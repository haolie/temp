<template>
  <el-container>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</el-container>
</template>
<script>
import pbUtils from '@/lib/pbUtils'
import webClient from '@/lib/client'  

export default {
  components: {},
  data () {
    return {
     
    }
  },
  computed: { 
  },
  methods: { 
    Login(){
        var _this=this
        this.Connect(function(){
          _this.WebCli.Login(function(){
            _this.$store.commit("setPlayerItem",{
              pid:_this.WebCli.pid,
              name:_this.WebCli.name,
              time:new Date().getTime()
            }) 
          })
        })
    }, 
    onSearchCmd(){  
       this.CmdList=this.WebCli.cmdSearch(this.SearchCmd)
    },
    onSearchMsg(){  
      var l=this.MsgList.length
       for(var i=0;i<l;i++){
        this.MsgList.pop()
       }
    },
    selectCmd(CmdObj){
       this.MsgObj.Cmd=CmdObj.Cmd
       this.MsgObj.Req=JSON.stringify(new CmdObj.Req().toObject(),null,2)
    },
    selectMsg(msg){
       this.WebCli.selectMsg(this.MsgObj,msg)
    },
    request(){
      var _this=this
       this.WebCli.Query(this.MsgObj.Cmd,JSON.parse(this.MsgObj.Req),function(msg){
        _this.selectMsg(msg)
       })
    },
    getServerItem(){
       for(var i=0;i<this.ServerList.length;i++){
         if(this.ServerGroupId==this.ServerList[i].GroupID){
           return this.ServerList[i]
         }
       }

       return null
    },
    loadServerList(){
      // var _this=this
      // pbUtils.GetServerList(function(status,list){
      //   if(status!=200){
      //     console.log("MC Err:"+status)
      //     return
      //   }

      //   if(list){
      //     _this.ServerList=list
      //     _this.ServerGroupId=1007
      //   }
      

      // })
    }
  },
  updated () {},
  watch: {},
  created () {
    var _this= this
    this.CmdList=window.Pb.ReqList   
    this.$store.commit("addServerListCb",function(){
        _this.ServerGroupId=1007
    })
  },
  mounted () { 
    
  },
  watch:{
    ServerGroupId:{
      handler:function(id,oId){
       var item=this.$store.getters.getServerItem(id)
       console.log(item)
       this.ServerItem.url=item.GroupUrl

    },
    immediate:false
    },
  }
}

</script>