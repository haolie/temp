import pbUitl from '@/lib/pbUtils'

function Client(uid,option){
    let client=Object.create(Client.prototype)
    client.uid=uid
    client.pid=""
    client.name=""
    client.isConnect=false
    client.option=option
    client.wbSocket=null
    

}

Client.prototype.Login=function(){
    var loginReq= pbUitl.CreateReqObj("PlayerLogin")
    loginReq.setUserid("bd6897c0a49b4b938f0d8acfece7467a")
    loginReq.setServerid(1007)
    loginReq.setPartnerid(1001)
    this.sendReq(1,loginReq)
}

Client.prototype.sendReq=function(comman,req){
if (!this.isConnect)return

    var obj=this.createReq(comman,req)
    this.wbSocket.send(obj.serializeBinary())
}

Client.prototype.onMessage=function(event){
   var response=pbUitl.CreatePbObj("ClientResponse")
   response.deserializeBinary(event.data)
   var responseObj=response.toObject();
   if(responseObj.command==1){
    var loginRes= pbUitl.CreatePbObj("PlayerLoginRes")
    loginRes.deserializeBinary(responseObj.data)
    console.log(JSON.stringify(loginRes.toObject()))
   }
}

Client.prototype.onOpen=function(event){
   this.isConnect=true
}

Client.prototype.onClose=function(event){
    this.isConnect=false
}

Client.prototype.connect=function(){
     if(this.isConnect){
        return
     }

     var _this=this
    this.wbSocket=new WebSocket("ws://10.253.0.63:10001/client")
    this.wbSocket.binaryType="arraybuffer"
 
    this.wbSocket.onclose=function(event){
        _this.onClose(event)
    }

    this.onmessage=function(event){
        _this.onMessage(event)
    }

    this.onopen=function(event){
        _this.onOpen(event)
    }    

    this.onerror=function(event){
        console.log(event)
    }
}

Client.prototype.createReq=function(command,pbObj){
    var req= pbUitl.CreatePbObj("ClientRequest")
    req.setCmd(command)
    req.setHandlecode("36636465")
    req.setPartnerid(1001)
    req.setServerid(1007)
    req.setGameversionid(101) 
    req.setData(pbObj.serializeBinary())

    return req
}





function createReq(pbObj){

}



export default Client