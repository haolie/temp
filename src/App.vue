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
var _this;
export default {
  name: 'App',
  components: {
    JAlert
  }, 
  created () {
    var obj=new Pve.PveInfo()
    console.log( JSON.stringify(obj.toObject(),null,2) )
    console.log("creted")
  },
  mounted () {
    console.log("mounted")
    _this=this
    debugger 
    if("WebSocket" in window){
      this.wbSocket=new WebSocket("ws://127.0.0.1:9296/login?name=23")
      this.wbSocket.binaryType="arraybuffer"

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
