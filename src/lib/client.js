import pbUitl from '@/lib/pbUtils'

function Client(uid,option){
    this.uid=uid
    this.option=option
}

Client.prototype.uid=""
Client.prototype.pid=""
Client.prototype.name=""
Client.prototype.isConnect=false
Client.prototype.option=null
Client.prototype.wbSocket=null
Client.prototype.order=0
Client.prototype.Login=function(){
    var loginReq= pbUitl.CreateReqObj("PlayerLogin")
    loginReq.setUserid(this.uid)
    loginReq.setServerid(1007)
    loginReq.setPartnerid(1001)
    this.sendReq("PlayerLogin",loginReq)
}

Client.prototype.sendReq=function(comman,req){
if (!this.isConnect)return

    var obj=this.createReq(comman,req)
    this.wbSocket.send(obj.serializeBinary())
}

Client.prototype.onMessage=function(event){
    console.log("client onMessage")
   var response=pbUitl.GetPb("ClientResponse").deserializeBinary(event.data) 
   var responseObj=response.toObject();
       
	   var cmdName=pbUitl.GetCommandName(responseObj.cmd)
	   if (responseObj.code!=0){
		   console.log(cmdName+"err:"+responseObj.code)
	   }else{
		 var res=  pbUitl.CreateResFromData(cmdName,responseObj.data)
		 console.log(JSON.stringify(res.toObject()))
	   } 
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

    
        var loginReq= pbUitl.CreateReqObj("PlayerLogin")
        loginReq.setUserid(_this.uid)
        loginReq.setServerid(1007)
        loginReq.setPartnerid(1001)

        var obj=_this.createReq(1,loginReq)


        _this.wbSocket.send(obj.serializeBinary())
      }
      this.wbSocket.onclose = function (event) {
        console.log("event.data")
      }
}

Client.prototype.connect=function(){
     if(this.isConnect){
        return
     }

 console.log("try strt")
     var _this=this
     this.wbSocket=new WebSocket("ws://10.253.0.63:10001/client")
     this.wbSocket.binaryType="arraybuffer"
     this.wbSocket.onmessage=function(event){
        _this.onMessage(event)
    }

 
    this.wbSocket.onclose=function(event){
        _this.onClose(event)
    }

   
    this.wbSocket.onopen=function(event){
        _this.onOpen(event)
    }    

    this.wbSocket.onerror=function(event){
        console.log(event)
    }
}

Client.prototype.createReq=function(command,pbObj){
	this.order++
    var req= pbUitl.CreatePbObj("ClientRequest")
    var cmdNum=pbUitl.GetCommandNum(command)
    req.setCmd(cmdNum)
    req.setHandlecode(this.order)
    req.setPartnerid(1001)
    req.setServerid(1007)
    req.setGameversionid(101) 
    req.setData(pbObj.serializeBinary())

    return req
}





function createReq(pbObj){

}



export default Client