<template>
  <el-container>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane 
     v-for="(item,i) in $store.state.LoginTabList"
      :key="i"
      :label="item.name"
      :value="item.id"
      >
      <PlayerView></PlayerView>
    </el-tab-pane> 
  </el-tabs>
</el-container>
</template>
<script>
import PlayerView from '@/PlayerView'

export default {
  components: {PlayerView},
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