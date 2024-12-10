<template>

  <el-container style="width: 100%;height: 100%;">
    <el-row>
      <el-col :span="24">

        <div class="demo-input-suffix">
          GuildId：
          <el-input placeholder="请输入内容" v-model="Guildid" clearable>
          </el-input>
        </div>

      </el-col>

      <el-col :span="24">
        <div class="demo-input-suffix">
          Count:
          <el-input placeholder="请输入内容" v-model="Count" clearable>
          </el-input>
        </div>
      </el-col>

      <el-col :span="24">
        <div class="demo-input-suffix">
          namePart：
          <el-input placeholder="请输入内容" v-model="PerName" clearable>
          </el-input>
        </div>

      </el-col>

      <el-col :span="24">
        <div class="demo-input-suffix">
          <el-button type="primary" @click="start" plain>开始</el-button>
        </div>


      </el-col>

    </el-row>




  </el-container>


</template>

<script>
import webClient from '@/lib/client'
import pbUitl from '@/lib/pbUtils'

const cmd_changeLv = 'PLAYERMODIFYLVFORDEBUG'
const cmd_guildApply = 'GUILDAPPLY'
const cmd_changeName = 'PLAYERALTERPLAYERNAME'
const con_wait = 1



export default {
  props: ["serverGroupId", "mcUrl", "partnerId", "versionId"],
  components: {},
  data() {
    return {
      Guildid: "",
      Count: 20,
      PerName: '',
    }
  },
  computed: {
    c: function (item) {

    }
  },
  methods: {
    onSearchCmd() {

    },
    start() {
      var _this = this
      var changeLvFun = function (wcl, cb) {
        var tempReq = pbUitl.CreateReqObj(cmd_changeLv)
        tempReq.setLv(30)
        wcl.Query(cmd_changeLv, tempReq.toObject(), function (msg) {
          cb(wcl)
        })
      }

      var applyFun = function (wcl, cb) {
        var tempReq = pbUitl.CreateReqObj(cmd_guildApply)
        tempReq.setGuildid(_this.Guildid)
        wcl.Query(cmd_guildApply, tempReq.toObject(), function (msg) {
          cb(wcl)
        })
      }

      var fn = function (i, cb) {
        var wbCli = new webClient({})

        var tempName = _this.PerName + (i + 1).toString()
        wbCli.setOpt({
          LoginParam: tempName,
          LoginType: 'PlayerYaceLogin',
          Mc: _this.mcUrl,
          Partner: _this.partnerId,
          VersoinId: _this.versionId,
          ServerGroupid: _this.serverGroupId,
          onStatus: function (state) {
            if (state != 1) {
              console.log("login failed!!!")
              return;
            }

          },
          onMsg: function (msg) {

          }
        })

        wbCli.connect(function () {
          wbCli.Login(function () {

            setTimeout(() => {
              // var tempReq = pbUitl.CreateReqObj(cmd_changeName)
              // tempReq.setNewplayername(tempName)
              // tempReq.setConsumetype(1)
              // wbCli.Query(cmd_changeName, tempReq.toObject(), function (msg) {
              
              // })

              changeLvFun(wbCli, function () {
                  applyFun(wbCli, function () {
                    console.log("success:" + tempName)
                    cb()
                  })
                })

            }, 1000);
          })
        })

      }

      var i = 1;
      var callBack = function () {
        if (i < _this.Count) {
          i += 1
          fn(i, callBack)
        }
      }

      fn(i, callBack)

    },
  },
  updated() { },
  created() {
    var _this = this
  },
  mounted() {

  },
  watch: {
  }
}

</script>