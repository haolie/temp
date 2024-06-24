<template>
  <el-container>
    <!-- <header data-v-730268c5="" class="el-header main-head">Header</header> -->
    <el-header class="main-head" style="height: 120px;">
      <el-row>
        <el-col :span="19">
          <el-row :gutter="20">
  <el-col :span="24">
    <el-input placeholder="请输入内容" v-model="mc">
    <template slot="prepend">MC:</template>
  </el-input>
  </el-col> 
  <el-col :span="12">
    <el-input placeholder="请输入内容" v-model="partner">
      <template slot="prepend">合作商:</template>
    </el-input>
  </el-col>
  <el-col :span="12">
    <el-input placeholder="请输入内容" v-model="versoinCode">
      <template slot="prepend">版本号:</template>
    </el-input>
  </el-col>
  <el-col :span="24">
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 132px;">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select> 
  </el-input>
  </el-col>
</el-row>
        </el-col>
        <el-col :span="5">
          <el-button type="primary" plain>主要按钮</el-button>
        </el-col>
      </el-row>

     
    
    </el-header>
  <el-main>Main</el-main>
</el-container>
</template>
<script>
import Columnar from '@/lib/columnar.js'
import { connect } from 'echarts/lib/echarts'
let _this
export default {
  components: {},
  data () {
    return {
      mc:11,
      partner:1001,
      versoinCode:1,
      connectLogoin:function(){
        
      }
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
    }
  },
  updated () {},
  watch: {},
  created () {
    console.log(Columnar)
  },
  mounted () {
    _this = this
    this.getBottomRightItems()
  }
}
</script>
<style scoped src="../../../static/assets/css/index.css">
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
  background-color: red;
}

</style>
