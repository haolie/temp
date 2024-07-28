<template>
  <el-container>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane 
     v-for="(item,i) in $store.state.LoginTabList"
      :key="i"
      :label="item.name"
      :value="item.id"
      >用户管理</el-tab-pane> 
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
      LoginList:[]
    }
  },
  computed: { 
  },
  methods: { 
    Login(){
    
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
  watch:{ 
  }
}

</script>