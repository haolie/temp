<template>
  <div style="color: #afe5ff">

    <div class="bodyem1"></div>
    <div class="bodyem2"></div>
    <div class="bodyem3"></div>
    <div class="bodyem4"></div>
    <div class="bodyline"></div>
    <div class="bodyline bodylinebt"></div>

    <a href="#/" class="skback"><i class="icon-reply"></i>返回</a>

    <!-- 顶部 -->
    <div class="top">
      <h3>净利润</h3>
    </div>

    <div class="container-flex">
      <div class="container-flex-box">
        <div class="wrap-left">
          <!-- 五大业态 -->
          <div class="chart-img" id="echarts_wdyt"></div>
          <!-- 单位营收排名 -->
          <div class="revenue">
            <div class="revenue-tit"><h3>成员单位净利润排名</h3><i></i>
              <em @click="topSortType=0;getUnitSortList()" :class="{active:!topSortType}">未完成</em>
              <em @click="topSortType=1;getUnitSortList()" :class="{active:topSortType}">已完成</em>
            </div>
            <div class="revenue-box">
              <!-- 蓝色底：#00427f; 蓝色值:#08c7fb;  橙色:#ff9000 -->
              <div id="echart_list" class="sys-runk" style="height: 100%;padding: 0">

              </div>
            </div>
          </div>
        </div>
        <div class="wrap-center">
          <div class="cate catestyle">
            <ul>
              <li v-for="(item,i) in subItems">
                <h3>{{item.name}}</h3>
                <h2>
                  <b>{{$lib.transNum(item.value,2).value }}</b>{{$lib.transNum(item.value,2).unit }}{{subUnits[i]}}
                  <em :class="Number(item.change>=0)?'up':'down'"><i :class="Number(item.change>=0)?'icon-arrow-up':'icon-arrow-down'" class="icon-arrow-up"></i>{{item.change}}%</em>
                </h2>
              </li>
            </ul>
          </div>
          <div class="indexarea" style="padding-top:2rem">
            <div id="analysisView" style="height: 27rem;margin-top: 2rem;"></div>
          </div>
          <div class="indextit">{{analysisLabel}}月净利润分析</div>
          <div class="scrollbox">
            <div id="scrollDiv">
              <el-carousel ref="infoPanel" height="5rem" direction="vertical">
                <el-carousel-item v-for="(item,i) in infoItems" :key="i">
                  <li>{{ item.info }}</li>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="scroltit" style="z-index: 200">
              <div @click="$refs.infoPanel.prev()" class="updown" id="but_down" style="cursor: pointer;">向上</div>
              <div @click="$refs.infoPanel.next()" class="updown" id="but_up" style="cursor: pointer;">向下</div>
            </div>
          </div>
        </div>
        <div class="wrap-right">
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
            <div class="score" :class="{'score-zc':dateStatus&&dateStatus.statusValue}">
              <b>{{dateStatus ? dateStatus.index : '--'}}</b>{{(dateStatus&&Number(dateStatus.statusValue))?'正常':'紧急'}}
            </div>
          </div>
          <!-- 营业收入完成率预警 -->
          <div class="completion">
            <div class="completion-tit"><h3>营业收入完成率预警</h3></div>
            <div class="completion-box">
              <div class="completion-h3"><b>{{lowerThanAvgInfo.num}}</b>家单位完成率低于平均【{{averageValue}}%】且处于亏损状态</div>
              <div class="completion-chart" id="echarts_lowerThanAvg" style="height: 11rem;width: 100%;padding: 0"></div>
              <div class="completion-h3"><b>{{lastItems.items.length}}</b>单位人均净利润低于网安平均水平【{{lastItems.averagePer}}元/人】</div>
              <div class="completion-table">
                <table width="100%" border="0">
                  <tbody>
                  <tr>
                    <th>序号</th>
                    <th>单位名称</th>
                    <th>人均净利润</th>
                  </tr>
                  <tr v-for="(item,i) in lastItems.items" :key="i">
                    <td>{{i+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.value}}万元/人</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="completion-h3">完成率排名前三单位</div>
              <div class="completion-runk">
                <ul>
                  <li v-for="(item,i) in topItems" :key="i" v-if="i<3"><em>1</em>
                    <h3>{{item.unitMem}}</h3>
                    <p>{{item.finishedPer}}%</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <div class="layer zoomIn animated layer01" style=" display: none ">
      <div class="layerbg"></div>
      <div class="layerclose"><i class="icon-close"></i></div>
      <div class="layertit">
        <h2 class="tit fadeInDown animated ">经济实体指标情况-30所
          <div class="time">[&nbsp;1-9月<i class="icon-calendar"></i>&nbsp;]</div>
        </h2>
      </div>
      <div class="layerbox">
        内容
      </div>
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
      dateStatus: null,
      dataType: '43',
      topSortType: 1,
      lastItems: {averagePer:0,items:[]},
      analysisLabel: '',
      lowerThanAvgInfo:{percent:0,num:0},
      subItems: [],
      averageValue: '',
      infoItems: [],
      subUnits: ['元/人', '元', '元/人'],
      topItems: []
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
    getPieData () { // 查询五大业态数据
      this.$http.get({
        api: 'B_WDYTVALUEPIE',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          data.forEach(function (d) {
            // d.value = d.value * 10000
          })
          var option = {
            color: ['#23a6fe', '#e8aa50', '#d3758f', '#61a0a7', '#d48264', '#e7dac9'],
            grid: {
              right: '30px',
              left: '30px'
            },
            title: {
              show: true,
              text: '五大业态\n营收统计',
              top: '40%',
              left: '38%',
              textStyle: {
                color: '#fff'
              }
            },
            series: [
              {
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: true,
                    formatter: function (arg) {
                      var temp = _this.$lib.transNum(arg.value, 2)
                      return temp.value + temp.unit + '/' + arg.percent + '%\n' + arg.name
                    }
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: true
                  }
                },
                data: data
              }
            ]
          }
          var echart = _this.$echarts.init(document.getElementById('echarts_wdyt'))
          echart.setOption(option)
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    getUnitSortList () { // 获取成员单位排名
      this.$http.get({
        api: 'B_UNITMENSORT',
        params: {quotaNum: this.dataType, finishedStatus: this.topSortType},
        callback: function (data) {
          var names = []
          var valuesA = []
          var valuesB = []
          var targetValues = []
          var perValues = []
          data.sort(function (a, b) {
            return _this.topSortType ? (a.finishedPer - b.finishedValue ) : (b.finishedPer - a.finishedValue)
          })
          data.forEach(function (d) {
            var temp = _this.topSortType ? d.finishedValue : d.noFinishedValue
            perValues.push(d.finishedPer)
            names.push(d.unitMem)
            var v = _this.topSortType ? d.finishedValue : -d.noFinishedValue
            if (v > 0) {
              valuesA.push(v)
              valuesB.push(0)
            } else {
              valuesA.push(0)
              valuesB.push(v)
            }
            targetValues.push(d.targetValue)
          })
          // <!-- 蓝色底：#00427f; 蓝色值:#08c7fb;  橙色:#ff9000 -->
          var option = {
            color: ['#00427f', '#08c7fb', '#ff9000'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              },
              formatter: function (a, b, c, d, e) {
                var index = a[0].dataIndex
                var item = data[index]

                return '目标利润:' + _this.$lib.transNum(targetValues[index], 2, 1) + '<br />' + (_this.topSortType ? '已完成' : '未完成') + ':' + _this.$lib.transNum(_this.topSortType ? item.finishedValue : item.noFinishedValue, 2, 1)
              }
            },
            grid: {
              left: '60px',
              right: '60px',
              top: '18px',
              bottom: '0px'
            },
            xAxis: [
              {
                type: 'value',
                show: false
              }
            ],
            yAxis: [
              {
                type: 'category',
                offset: 0,
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                  color: '#afe5ff'
                },
                data: names
              },
              {
                type: 'category',
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                  color: '#afe5ff',
                  formatter: function (name, index) {
                    return name + '%'
                  }
                },
                data: perValues
              }
            ],
            series: [
              {
                type: 'bar',
                barGap: '-100%',
                barCategoryGap: '55%',
                label: {
                  color: '#fff',
                  show: false,
                  position: 'right',
                  formatter: function (arg) {
                    return _this.$lib.transNum(arg.data, 2, 1)
                  }
                },
                data: targetValues
              },
              {
                type: 'bar',
                label: {
                  color: '#fff',
                  show: false,
                  position: 'right',
                  formatter: function (arg) {
                    if (!Number(arg.data)) return ''
                    return _this.$lib.transNum(arg.data, 2, 1)
                  }
                },
                data: valuesA
              },
              {
                type: 'bar',
                label: {
                  color: '#fff',
                  show: false,
                  position: 'left',
                  formatter: function (arg) {
                    if (!Number(arg.data)) return ''
                    return _this.$lib.transNum(arg.data, 2, 1)
                  }
                },
                data: valuesB
              }
            ]
          }
          var echart = _this.$echarts.init(document.getElementById('echart_list'))
          echart.setOption(option)
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    getLast4 () {
      this.$http.get({
        api: 'B_LAST$PROFITBYPERSON',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          _this.lastItems = data
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    getTop3 () {
      this.$http.get({
        api: 'B_FINISHEDUNITMENTOP3',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          _this.topItems = data
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    analysis () {
      this.$http.get({
        api: 'B_QUOTAANALYSIS',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          var opt = {
            total: data.total,
            completed: data.completed,
            completedGrowthTate: data.completedGrowthTate,
            quarterData: data.quarterData
          }
          opt.quarterData.forEach(function (d) {
            d.label = '累计利润'
          })
          _this.analysisLabel = opt.quarterData[opt.quarterData.length - 1].name
          return new Columnar({
            el: 'analysisView',
            data: opt
          })
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    getLowerThanAvg () {
      this.$http.get({
        api: 'B_NOFINISHEDVALUE',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          var targetValues = [159210000, 123520000, 93520000, 73520000]
          var values = [-59210000, -63520000, -33520000, -2520000]
          var perValues = [-34.2, -180, -81.2, 54.2]
          var names = ['卫士通', '网安本部', '深思科技', '神风']
          var avg = '35'
          _this.lowerThanAvgInfo=data.info
          names=data.legend
          targetValues = data.target
          values = data.done
          var valuesA=[]
          var valuesB=[]
          values.forEach(function (v) {
            if(v>=0){
              valuesA.push(v)
              valuesB.push(0)
            } else {
              valuesA.push(0)
              valuesB.push(v)
            }
          })
          perValues = []
          data.percent.forEach(function (d,i) {
            perValues.push(d.percent)
          })
          avg = data.info.percent
          if (avg.indexOf('%') >= 0) {
            avg = avg.replace('%', '')
          }
          _this.averageValue = avg

          var option = {
            color: ['#ff900094','#08c7fb', '#ff9000'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['完成净利润', '目标净利润'],
              bottom: '0',
              textStyle: {
                color: '#fff'
              }
            },
            grid: {
              left: '60px',
              right: '65px',
              top: '18px',
              bottom: '55px'
            },
            xAxis: [
              {
                type: 'value',
                show: false
              }
            ],
            yAxis: [
              {
                type: 'category',
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                  color: '#afe5ff',
                },
                data: names
              },
              {
                type: 'category',
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                  color: '#afe5ff',
                  formatter: function (name, index) {
                    return name + '%'
                  }
                },
                data: perValues
              }
            ],
            series: [
              {
                name: '目标净利润',
                type: 'bar',
                barGap: '-100%',
                label: {
                  color: '#fff',
                  show: true,
                  position: 'right',
                  formatter: function (arg) {
                    return _this.$lib.transNum(arg.data, 2, 1)
                  }
                },
                data: targetValues
              },
              {
                name: '完成净利润>0',
                type: 'bar',
                label: {
                  color: '#fff',
                  show: true,
                  position: 'left',
                  formatter: function (arg) {
                    if(!arg.data)return ''
                    return _this.$lib.transNum(arg.data, 2, 1)
                  }
                },
                data: valuesA
              },
              {
                name: '完成净利润<0',
                type: 'bar',
                label: {
                  color: '#fff',
                  show: true,
                  position: 'left',
                  formatter: function (arg) {
                    if(!arg.data)return ''
                    return _this.$lib.transNum(arg.data, 2, 1)
                  }
                },
                data: valuesB
              }
            ]
          }
          var echart = _this.$echarts.init(document.getElementById('echarts_lowerThanAvg'))
          echart.setOption(option)
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    getDateStatus () {
      this.$http.get({
        api: 'B_KHZQVALUE',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          _this.dateStatus = data
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    getSubQuotaItems () {
      this.$http.get({
        api: 'B_SUBQUOTAITEM',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          _this.subItems = data
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    },
    getInfoItems () {
      this.$http.get({
        api: 'B_NOTIFIINFOS',
        params: {quotaNum: this.dataType},
        callback: function (data) {
          _this.infoItems = data
        }
      }, (res) => {
        _this.$store.commit('setJalertText', {text: res})
      })
    }
  },
  updated () {
  },
  watch: {},
  created () {
  },
  mounted () {
    _this = this
    this.getPieData()
    this.getUnitSortList()
    this.getLast4()
    this.getTop3()
    this.analysis()
    this.getLowerThanAvg()
    this.getDateStatus()
    this.getSubQuotaItems()
    this.getInfoItems()
  }
}
</script>
<style scoped src="../../../static/assets/css/indexdetail.css"></style>
