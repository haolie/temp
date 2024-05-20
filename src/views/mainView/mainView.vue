<template>
  <el-container>
  
</el-container>
</template>
<script>
import Columnar from '@/lib/columnar.js'
let _this
export default {
  components: {},
  data () {
    return {
      dataType: '-1',
      dateStatus: null,
      bottomRightItems: [],
      otherInfoItems: [],
      mainInfoItems: []
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
</style>
