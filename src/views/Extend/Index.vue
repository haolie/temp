<template>
  <el-container style="width: 100%;height: 100%;">
    <el-row style="width: 100%;height: 100%;">
        <el-col :span="24">
          <el-row :gutter="20">

            <el-col :span="6">
              <el-select v-model="ServerItem.ServerGroupId" filterable placeholder="请选择">
                <el-option v-for="item in $store.state.serverList" :key="item.GroupID" :label="item.GroupName"
                  :value="item.GroupID">
                </el-option>
              </el-select>
            </el-col>

            <el-col :span="18">
              <el-input placeholder="请输入内容" v-model="ServerItem.Url">
                <template slot="prepend">MC:</template>
              </el-input>
            </el-col>

            <el-col :span="8">
              <el-input placeholder="请输入内容" v-model="ServerItem.PartnerId">
                <template slot="prepend">合作商:</template>
              </el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="请输入内容" v-model="ServerItem.ServerGroupId">
                <template slot="prepend">ServerGroupId:</template>
              </el-input>
            </el-col> 
          </el-row>
        </el-col> 
      </el-row>
<!-- "mcUrl","partnerId","versionId" -->
    <GuildApply :serverGroupId="ServerItem.ServerGroupId"
    :partnerId="ServerItem.PartnerId"
    :versionId="ServerItem.VersionId"
     :mcUrl="ServerItem.Url">
    </GuildApply>
  </el-container>
</template>

<script>

import GuildApply from './GuildApply.vue'
  
export default {
  components: {GuildApply},
  data () {
    return {
      
      ServerItem: {
        Url: "",
        PartnerId: 1001,
        VersionId: 101,
        LoginType: "PlayerYaceLogin",
        ServerGroupId: 0,
      },
      LoginList:[]
    }
  },
  computed: { 
    c:function(item){
       
    }
  },
  methods: { 
    removeItem(tabId){
      debugger
      this.$store.commit("RemoveLoginTab",tabId) 
    }, 
    onSearchCmd(){  
       
    },
    onSearchMsg(){  
      
    }, 
  },
  updated () {}, 
  created () {
    var _this= this
  },
  mounted () { 
    
  },
  watch: {
    "ServerItem.ServerGroupId": {
      handler: function (id, oId) {
        var _this = this
        this.$store.commit("addServerListCb", function () {
          var item = _this.$store.getters.getServerItem(id)
          _this.ServerItem.Url = item.GroupUrl
        })
 
      },
      immediate: false
    },
  }
}

</script>