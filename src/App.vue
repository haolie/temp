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
import groupRoom from  '@/lib/pb/GroupRoom/GroupRoomTeamInfo_pb'
import groupRoomCreate from  '@/lib/pb/GroupRoom/GroupRoomCreate_pb' 
import webCli from  '@/lib/client' 

import pbUtils from '@/lib/pbUtils'

import p from  '@/lib/proto'
var _this;
export default {
  name: 'App',
  components: {
    JAlert
  }, 
  created () {
  
    console.log(pbUtils.GetSetFunName("create"))
  },
  mounted () {


    var cli=new webCli("",{})
    cli.connect()
    cli.Login()

     for (var t in groupRoomCreate){
      // console.log(t)
      // var to=new groupRoomCreate[t]()

      // var toObj=to.toObject()
      // toObj.id=665


      //var to= pbUtils.CreateReqObj("ClientRequest")
      // var to= pbUtils.CreateReqObj("GroupRoomCreate")

      // console.log(JSON.stringify(to.toObject()))
     }

      //  var d=groupRoomCreate.GroupRoomCreateReq()
      //  debugger
    return

    var obj=new reqModel.ClientRequest()
    obj.setCmd(1)
    obj.setHandlecode("36636465")
    obj.setPartnerid(1001)
    obj.setServerid(1007)
    obj.setGameversionid(101) 

    var loginReq=new login.PlayerLoginReq()
    loginReq.setUserid("bd6897c0a49b4b938f0d8acfece7467a")
    loginReq.setServerid(1007)
    loginReq.setPartnerid(1001)

    obj.setData(loginReq.serializeBinary())
 
    console.log("mounted")
    _this=this
    debugger 
    if("WebSocket" in window){
      this.wbSocket=new WebSocket("ws://10.253.0.63:10001/client")
      this.wbSocket.binaryType="arraybuffer"
      this.wbSocket.onmessage = function (event) {
 

        var clientRes=resModel.ClientResponse.deserializeBinary(event.data)
        var reqObj= clientRes.toObject()
        console.log("收到数据!"+reqObj.handlecode)
          console.log(JSON.stringify(reqObj))

          var d= clientRes.getData()
          var loginRes= login.PlayerLoginRes.deserializeBinary(d)
          console.log(JSON.stringify(loginRes.toObject()))
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
