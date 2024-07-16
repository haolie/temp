<template>
  <el-container>
    <!-- <header data-v-730268c5="" class="el-header main-head">Header</header> -->
    <el-header class="main-head" style="height: 150px;"  v-show="Status==0">
      <el-row>
        <el-col :span="19">
          <el-row :gutter="20">

   <el-col :span="24">
   <el-select v-model="ServerGroupId" filterable placeholder="请选择">
    <el-option
      v-for="item in ServerList"
      :key="item.GroupID"
      :label="item.GroupName"
      :value="item.GroupID">
    </el-option>
  </el-select>
  </el-col> 

  <el-col :span="24">
    <el-input placeholder="请输入内容" v-model="ServerItem.url">
    <template slot="prepend">MC:</template>
  </el-input>
  </el-col> 

  <el-col :span="8">
    <el-input placeholder="请输入内容" v-model="ServerItem.Partner">
      <template slot="prepend">合作商:</template>
    </el-input>
  </el-col> 
  <el-col :span="8">
    <el-input placeholder="请输入内容" v-model="ServerGroupId">
      <template slot="prepend">ServerGroupId:</template>
    </el-input>
  </el-col>  
  <el-col :span="24">
    <el-input placeholder="请输入内容" v-model="ServerItem.LoginParam" class="input-with-select">
    <el-select v-model="ServerItem.LoginType" slot="prepend" placeholder="请选择" style="width: 132px;">
       <el-option
      v-for="item in LoginOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select> 
  </el-input>
  </el-col>
</el-row>
        </el-col>
        <el-col :span="5">
          <el-button type="primary" @click="Login" plain>主要按钮</el-button>
        </el-col>
      </el-row>

     
    
    </el-header>

  <el-container>
    <el-aside width="500px">
            <el-row>
                  <el-col :span="24">
                    <el-radio-group v-model="ListType">
      <el-radio-button label="Cmd"></el-radio-button> 
      <el-radio-button label="Msg"></el-radio-button>
    </el-radio-group>

    <el-col :span="24" v-show="ListType=='Cmd'">
      <el-row>
        <el-col :span="24">
          <div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="SearchCmd" class="input-with-select" > 
  </el-input>
</div>
        </el-col>
        <el-col :span="24">
          <ul class="infinite-list"  style="overflow:auto">
           <li v-for="item in CmdList" :key="item.Cmd" v-show="item.Cmd.indexOf(SearchCmd.toUpperCase())>=0"  class="infinite-list-item" @click="selectCmd(item)" :title="item.Cmd">{{ item.Cmd }} </li>
          </ul>
        </el-col>
      </el-row>
   
    </el-col>


    <el-col :span="24" v-show="ListType=='Msg'">
      <el-row>
        <el-col :span="24">
          <div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="SearchMsg" class="input-with-select" > 
    <el-button slot="append" icon="el-icon-refresh" @click="onSearchMsg"></el-button>
  </el-input>
</div>
        </el-col>
        <el-col :span="24">
          <ul class="infinite-list"  style="overflow:auto">
           <li v-for="item in WebCli.msgList" :key="item.MsgOrder" class="infinite-list-item" v-show="item.Cmd.indexOf(SearchMsg.toUpperCase())>=0" @click="selectMsg(item)" :title="item.Cmd">{{ item.Cmd }} </li>
          </ul>
        </el-col>
      </el-row>
    </el-col>

                  </el-col>
            </el-row>
    </el-aside>
    <el-main>
      <el-row> 
         <el-col :span="24">
          <el-input placeholder="请输入内容" v-model="MsgObj.Cmd"  :disabled="true" class="input-with-select" > 
             <el-button slot="append" icon="el-icon-check" @click="request()"></el-button>
          </el-input>
         </el-col>
      </el-row>
      <el-col style="height: 100%;">
        <el-container style="height: 100%;">
  <el-main style="height: 40%;">
    <textarea v-model="MsgObj.Req" style="height: 100%;width: 100%;color: #FFFFFF;background: #323224;">

    </textarea>
  </el-main>


  <el-footer style="height: 60%;background: #242424;">
    <textarea v-model="MsgObj.Res" style="height: 100%;width: 100%;color:blue;background: lightgray;font-size: larger;">

    </textarea>
  </el-footer>
</el-container>
      </el-col>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import pbUtils from '@/lib/pbUtils'
import webClient from '@/lib/client'
import { watch } from 'gulp';
let _this

export default {
  components: {},
  data () {
    return {
      Status:0,
      ServerGroupId:1007,
      ServerItem:{
        url:"",
        PartnerId:1001,
        VersionId:101, 
        LoginType:"PlayerYaceLogin",
        LoginParam:"l11"
      }, 
      ServerList:[],
      SearchCmd:"",
      SearchMsg:"",
      CmdList:[],
      MsgList:[],
      ListType:"Cmd",
      ShowLoginPanel:true,
      MsgObj:{
        Cmd:"",
        Res:{},
        Req:"{}"
      }, 
      LoginOptions: [{
          value: 'PlayerYaceLogin',
          label: '玩家名'
        }, {
        value: 'PlayerLogin',
          label: 'UserId'
        }, {
          value: 'PlayerReLogin',
          label: 'Seasion'
        }],
      connectLogoin:function(){
        
      },
      WebCli:new webClient({
      LoginParam:"l11",
      LoginType:"PlayerYaceLogin",
      Mc:"ws://10.253.0.63:10001/client",
      Partner:1001,
      VersoinId:101,
      ServerGroupid:1007,
      onStatus:function(state){
        this.ShowLoginPanel=state<=0
        
      }
      })
    }
  },
  computed: {
    monthNum () {
      if (!this.dateStatus) return ''
      return Math.floor(this.dateStatus.dayNum / 30)
    },
    dayNum () {
      if (!this.dateStatus) return ''
      return Math.floor(this.dateStatus.dayNum % 30)
    }
  },
  methods: {
    Connect(){
       var _this=this
       this.WebCli.setOpt({
       LoginParam:"l11",
       LoginType:"PlayerYaceLogin",
       Mc:"ws://10.253.0.63:10001/client",
       Partner:1001,
       VersoinId:101,
       ServerGroupid:1007,
       onStatus:function(state){
        this.ShowLoginPanel=state<=0
        
      }
      })
    },
    Login(){
        
        this.WebCli.Login()
    },
    getBottomRightItems () { // 

     debugger
      // this.$http.get({
      //   api: 'B_TOTALITEM',
      //   params: {},
      //   callback: function (data) {
      //     data.forEach(function (item) {
      //       item.valueItem = _this.$lib.transNum(item.itemValue, 2)
      //     })
      //     _this.bottomRightItems = data
      //   }
      // })
    },
    onSearchCmd(){  
       this.CmdList=this.WebCli.cmdSearch(this.SearchCmd)
    },
    onSearchMsg(){  
       this.WebCli.cmdSearch(function(status,obj){
        if(status!=200){
          console.log("MC Err:"+status)
          return
        }

        console.log(obj)

       })
    },
    selectCmd(CmdObj){
       this.MsgObj.Cmd=CmdObj.Cmd
       this.MsgObj.Req=JSON.stringify(new CmdObj.Req().toObject(),null,2)
    },
    selectMsg(msg){
       this.WebCli.selectMsg(this.MsgObj,msg)
    },
    request(){
       this.WebCli.Query(this.MsgObj.Cmd,JSON.parse(this.MsgObj.Req))
    },
    getServerItem(){
       for(var i=0;i<this.ServerList.length;i++){
         if(this.ServerItem.ServerGroupId==this.ServerList[i].GroupID){
           return this.ServerList[i]
         }
       }

       return null
    },
    loadServerList(){
      var _this=this
      pbUtils.GetServerList(function(status,list){
        if(status!=200){
          console.log("MC Err:"+status)
          return
        }

        _this.ServerList=list
      })
    }
  },
  updated () {},
  watch: {},
  created () {
     
  },
  mounted () { 
    this.CmdList=window.Pb.ReqList   
    this.loadServerList()
  }
}

</script>