<template>
  <el-container style="width: 100%;height: 100%;">
   <el-tabs  type="border-card" class="demo-tabs" @tab-remove="removeItem"  style="width: 100%;height: 100%;">
    <el-tab-pane closable  
     v-for="item in $store.state.LoginTabList"
      :key="item.TabId"
      :label="item.status==10000?item.name:item.name+'('+item.serverGroupId+')'"
      :value="item.TabId"
      :name="item.TabId"
      >
      <PlayerView :tabInfo="item"></PlayerView>
    </el-tab-pane> 

    <el-tab-pane name="tab_ex" key="extend" label="扩展">
      <extend></extend>
    </el-tab-pane>
  </el-tabs>

  <!-- <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs> -->
</el-container>
</template>
<script> 
import PlayerView from './PlayerView.vue'
import Extend from '../Extend/Index.vue'


export default {
  components: {PlayerView,Extend},
  data () {
    return {
      LoginList:[]
    }
  },
  computed: { 
    tabName:function(item){
       
    }
  },
  methods: { 
    removeItem(tabId){ 
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
  watch:{ 
  }
}

</script>