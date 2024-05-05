<template>
  <div style="color: #afe5ff">
    <div class="bodyem1"></div>
    <div class="bodyem2"></div>
    <div class="bodyline"></div>
    <div class="top">
      <h3>营业收入</h3>
    </div>
    <div class="alarm">
      <h3>距考核周期结束还剩</h3>
      <p>
        <template v-if="monthNum">
          <b>{{monthNum}}</b>月
        </template>
        <template v-if="dayNum">
          <b>{{dayNum}}</b>天
        </template>
      </p>
      <!--<div class="score"><b>95</b>紧急</div>-->
      <div :class="{'score-zc':dateStatus&&dateStatus.statusValue}" class="score">
        <b>{{dateStatus ? dateStatus.index : '--'}}</b>{{(dateStatus&&Number(dateStatus.statusValue))?'正常':'紧急'}}</div>
    </div>
  </div>
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
