<template>
  <div>
    <router-view />
    <j-alert />
  </div>
</template>

<script>
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
window.goog-jspb;
import JAlert from '@/components/JAlert'
import Pve from '@/lib/PveInfo_pb'
import reqModel from  '@/lib/pb/Client/ClientRequest_pb'
import resModel from  '@/lib/pb/Client/ClientResponse_pb'

import login from  '@/lib/pb/Player/PlayerLogin_pb'
var _this;
export default {
  name: 'App',
  components: {
    JAlert
  }, 
  created () {
  
    console.log("creted")
  },
  mounted () {

    var obj=new reqModel.ClientRequest()
    obj.setCmd(1)
    obj.setHandlecode(3663)
    obj.setPartnerid(1001)
    obj.setServerid(10017)
    obj.setGameversionid(101) 

    var loginReq=new login.PlayerLoginReq()
    loginReq.setUserid("bd6897c0a49b4b938f0d8acfece7467a")
    loginReq.setServerid(10017)
    loginReq.setPartnerid(1001)

    obj.setData(loginReq.serializeBinary())


    console.log( JSON.stringify(obj.serializeBinary(),null,2) )

    console.log("mounted")
    _this=this
    debugger 
    if("WebSocket" in window){
      this.wbSocket=new WebSocket("ws://10.253.0.63:10001/client")
      this.wbSocket.binaryType="arraybuffer"
      this.wbSocket.onmessage = function (event) {

        var res=new resModel.ClientResponse()
		  
		  
          console.log(JSON.stringify(reqModel.ClientRequest.deserializeBinary(event.data).toObject()))
        }
        this.wbSocket.onopen = function (event) {
          console.log("连接开启!")

      
    


          _this.wbSocket.send(obj.serializeBinary())
        }
        this.wbSocket.onclose = function (event) {
          console.log("event.data")
        }
 

    }else if("WebSocket" in window){
      this.wbSocket=new MozWebSocket("/api/login")

    }else{
      this.wbSocket=new SockJs("/api/login")
    } 



  }
}
</script>

<style>
@import "assets/css/message-box.css";
@import "assets/css/style.css";
</style>
