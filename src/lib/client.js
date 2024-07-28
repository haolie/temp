import pbUitl from '@/lib/pbUtils'
import { name } from 'file-loader'
import { error } from 'shelljs'

const CMD_XINTIAO="PLAYERXINTIAO"
const igList={
    SLOT_PUSHMAINSLOTINFO:1
}

function Client(option){
    this.option=option
}

// 0:未登陆； <0 登陆错误 ；1:登陆成功； 2:离线
Client.prototype.status=0
Client.prototype.uid=""
Client.prototype.pid=""
Client.prototype.name=""
Client.prototype.isConnect=false
Client.prototype.option=null
Client.prototype.wbSocket=null
Client.prototype.order=0
Client.prototype.msgOrder=0
Client.prototype.reqMap={}
Client.prototype.msgList=[]
Client.prototype.Login=function(cb){
    var _this=this
    var loginReq= pbUitl.CreateReqObj(_this.option.LoginType)
        loginReq.setPlayername(_this.option.LoginParam) 
        //var obj=this.createReq(this.option.LoginType,loginReq)
        _this.sendReq(_this.option.LoginType,loginReq,function(res){
             
            if (res.Code==0){
                _this.name=res.Res.playername
                _this.pid=res.Res.id
                _this.uid=res.Res.userid
                _this.setStatus(1)
            }else{
                _this.setStatus(-res.Code)
            } 

            if(cb)cb()
        })
}

Client.prototype.sendReq=function(comman,req,cb){
if (!this.isConnect)return

    var obj=this.createReq(comman,req)
    this.wbSocket.send(obj.serializeBinary())

    if(comman!=CMD_XINTIAO){
        this.reqMap[obj.getHandlecode()]={
            Req:req.toObject(),
            Cb:cb,
            Time:new Date().getTime()
        }
    }
}

Client.prototype.setStatus=function(status){
    this.status=status
    if(this.status==1){
        this.startHead()
    }

    if(this.option.onStatus){
        this.option.onStatus(status)
    } 
}

Client.prototype.onMessage=function(event){
   if(this.option.onData){
     this.onData()
   }

    
   var response=pbUitl.GetPb("ClientResponse").deserializeBinary(event.data) 
   var responseObj=response.toObject(); 
	   var cmdObj=pbUitl.GetCommand(responseObj.cmd)
       if(cmdObj.Cmd==CMD_XINTIAO){
        console.log("client PLAYER_XINTIAO")
        return     
       }

       if(igList[cmdObj.Cmd]){
         return     
       }


       var o={
        MsgOrder:this.msgOrder++,
        Key:cmdObj.Key,
        Cmd:cmdObj.Cmd,
        Code:responseObj.code,
        Res:{},
        Req:{}
       }
	   if (responseObj.code!=0){
		   console.log(cmdObj.Cmd+"err:"+responseObj.code)

	   }else{ 
		 var res=  cmdObj.Res.deserializeBinary(responseObj.data)
         o.Res=res.toObject() 
	   } 

       if(this.reqMap[responseObj.handlecode]){

        o.Req=this.reqMap[responseObj.handlecode]
        if(this.reqMap[responseObj.handlecode].Cb){
            this.reqMap[responseObj.handlecode].Cb(o)
        }

        this.reqMap[responseObj.handlecode]=undefined
       }

       if (this.option.onMsg)
         this.option.onMsg(o)
        else
       this.msgList.push(o)
}

Client.prototype.onOpen=function(event){
   this.isConnect=true
   this.Login()
   console.log("client connected")
}

Client.prototype.onClose=function(event){
    console.log("client onClose")
    this.isConnect=false
}

Client.prototype.Test=function(){ 
    var _this=this
    this.wbSocket=new WebSocket("ws://10.253.0.63:10001/client")
    this.wbSocket.binaryType="arraybuffer"
    this.wbSocket.onmessage = function (event) {


        var clientRes=pbUitl.GetPb("ClientResponse").deserializeBinary(event.data)
      var reqObj= clientRes.toObject()
      console.log("收到数据!"+reqObj.handlecode)
        console.log(JSON.stringify(reqObj))

        var d= clientRes.getData()

          var loginRes= pbUitl.CreateResFromData("PlayerLogin",d)
        console.log(JSON.stringify(loginRes.toObject()))
      }
      this.wbSocket.onopen = function (event) {
        console.log("连接开启!")

    
        var loginReq= pbUitl.CreateReqObj("PlayerYaceLogin")
        loginReq.setPlayername("l11") 

        var obj=_this.createReq("PlayerYaceLogin",loginReq)


        _this.wbSocket.send(obj.serializeBinary())
      }
      this.wbSocket.onclose = function (event) {
        console.log("event.data")
      }
}

Client.prototype.setOpt=function(opt){
   this.option=opt
}

Client.prototype.connect=function(cb,opt){
     if(this.isConnect){
        if(cb)cb()

        return
     }

     if(opt) this.option=opt

     console.log("try strt")
     console.log(this.option.Mc)
     var _this=this
     this.wbSocket=new WebSocket(this.option.Mc)
     this.wbSocket.binaryType="arraybuffer"
     this.wbSocket.onmessage=function(event){
        _this.onMessage(event)
    }

 
    this.wbSocket.onclose=function(event){
        _this.onClose(event)
        _this.setStatus(2)
    }

   
    this.wbSocket.onopen=function(event){
        _this.onOpen(event)
        if(cb)cb()
    }    

    this.wbSocket.onerror=function(event){
        console.log(event)
    }
}

Client.prototype.startHead=function(){
    if(this.status!=1){
        return
    }

    var req= pbUitl.CreateReqObj("PLAYERXINTIAO")
    this.sendReq("PLAYERXINTIAO",req)
    var _this=this
    setTimeout(() => {
        _this.startHead()
    }, 500);

}

Client.prototype.createReq=function(command,pbObj){
	this.order++
    var req= pbUitl.CreatePbObj("ClientRequest")
    var cmdNum=pbUitl.GetCommandNum(command)
    req.setCmd(cmdNum)
    req.setHandlecode(this.order.toString())
    req.setPartnerid(this.option.Partner)
    req.setServerid(this.option.ServerGroupid)
    req.setGameversionid(this.option.VersoinId) 
    req.setData(pbObj.serializeBinary())
 

    return req
}

Client.prototype.getServerList=function(cb){ 
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'https://managecenterapitest-dqsj2.qcplay.com/API/ServerGroupList.ashx', true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send('GroupType=Mix&HashValue=');//发送请求 将情头体写在send中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if(httpRequest.status == 200){
            cb(httpRequest.status)
        }

        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            json=JSON.parse(json.Data)
            cb(httpRequest.status,json)
        }
    };
}

Client.prototype.msgClear=function(txt){ 
 
}

Client.prototype.selectMsg=function(obj,msg){ 
    obj.Cmd=msg.Cmd
   
    if(msg.Req&&msg.Req.Req){
        obj.Req=JSON.stringify(msg.Req.Req,null,2) 
    }else{
        obj.Req="{}"
    }

    if(msg.Code==0){
        obj.Res=  JSON.stringify(msg.Res,null,2) 
    }else{
        obj.Res= JSON.stringify({error:msg.Code},null,2) 
    }
  
 }

 Client.prototype.Query=function(cmd,msg,cb){ 
    cmd = cmd.replace("_","").toUpperCase()
    var req= pbUitl.CreateReqObj(cmd)
    pbUitl.SetWithObj(req,msg)
  
    this.sendReq(cmd,req,cb)
 }

 
export default Client