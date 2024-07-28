<template>
  <div class="main-out">
    <router-view />
    <j-alert />
  </div>
</template>

<script>
import JAlert from '@/components/JAlert'
import pb from  '@/lib/proto' 
import pbUtils from '@/lib/pbUtils'

export default {
  name: 'App',
  components: {
    JAlert
  }, 
  created () {
  
    console.log(pbUtils.GetSetFunName("create"))
  },
  mounted () {


    //var cli=new webCli("roote19db7fafc9f11ee-21",{})
   // cli.connect()
 
    return

  }
}
</script>

<style>
@import "assets/css/message-box.css";
@import "assets/css/style.css";
</style>
</script>
<style >
body{
  width: 99%;
  height: 99%;
}

.main-out{
  height: 100%;
}

.el-container{
  height: 100%;
}

.el-main{
  height: 100%;
  background-color: #313131;
}

</style>
