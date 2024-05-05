let api = {
  getURL: (i) => {
    let a = {

      // 菜单dev ? 'static/jsons/menu/getSys.json' :
      'S_MENU': 'usermgmt-service/menu/getMenu',
      /**
       * 登录, 登出接口
       */
      // 登录
      'S_LOGIN': 'auth-service/system/login',
      // 登出
      'S_LOGOUT': 'auth-service/system/logout',
      // 用户信息dev ? 'static/jsons/menu/user-info.json' :
      'S_USERINFO': 'usermgmt-service/menu/user-info',


      // 四项（营收,利润,合同,科技支出及技术投入）数据
      'B_TOTALITEM': 'business/businessRun/totalItem',
      // 成员单位排名
      'B_UNITMENSORT': 'business/businessRun/unitMemSort',
      // 成员单位完成率低于X
      'B_QUOTAFINISSHEDITEM': 'business/businessRun/quotaFinishedItem',
      // 完成率排名前三
      'B_FINISHEDUNITMENTOP3': 'business/businessRun/finishedUnitMemTop3',
      // 五大行业
      'B_WDYTVALUEPIE': 'business/businessRun/wdytValuePie',
      //指标信息
      'B_QUOTAINFOLIST': 'business/businessRun/quotaInfoList',
      //主要指标信息
      'B_MAINQUOTAINFOS': 'business/businessRun/mainQuotaInfos',
      //指标信息分析
      'B_QUOTAANALYSIS': 'business/businessRun/quotaAnalysis',
      //考核周期与综合评分
      'B_KHZQVALUE': 'business/businessRun/khzqValue',
      //次级指标查询
      'B_SUBQUOTAITEM': 'business/businessRun/subQuotaItem',
      //单位未完成率
      'B_NOFINISHEDVALUE': 'business/businessRun/noFinishedValue',
      //单位人均净利润低于网安平均水平
      'B_LAST$PROFITBYPERSON': 'business/businessRun/last4ProfitByPerson',
      //滚动提示信息
      'B_NOTIFIINFOS': 'business/businessRun/notifyInfoList',

            //滚动提示信息
      'B_WEBLOGIN': 'login',
      'B_WETEST': 'test',
    }

    return window.config.API_MAPPING(a[i])
  }
}

export default api
