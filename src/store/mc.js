export default {
    state: {
      serverList: [],
      isServerLoaded:false,
      waiteServerCbList:[]
    },
    mutations: {
      updateList (state, list) {
        //window.sessionStorage.setItem('token', t)
        for(var i=0;i<list.length;i++){
            state.serverList.push(list[i])
        }

        state.isServerLoaded=true
        state.waiteServerCbList.forEach(element => {
            element(state.serverList)
        });

        console.log("updateList")
        console.log(state.serverList)
      },
      addServerListCb(state,cb){
         if(state.isServerLoaded){
            cb(state.serverList)
         }else{
            waiteServerCbList.push(cb)
         }
      } 
    },
    actions: {
        loadServerList({ commit }){
            return new Promise((resolve, reject) => {
             
                var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        httpRequest.open('POST', 'https://managecenterapitest-dqsj2.qcplay.com/API/ServerGroupList.ashx', true); //第二步：打开连接
        httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
        httpRequest.send('GroupType=Mix&HashValue=');//发送请求 将情头体写在send中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中

            if(httpRequest.status != 200){
                reject(httpRequest.status)
            }
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
                json=JSON.parse(json.Data)
                if(json){
                    commit('updateList',json)
                    resolve(json)
                }
            }
        };
              })
        }
    },
    getters: {
      serverList: state => { 
        return state.serverList
      },
      getServerItem: (state) => (groupId) => { 
        for(var i=0;i<state.serverList.length;i++){
            if(state.serverList[i].GroupID==groupId){
                return state.serverList[i];
            }
        }
        return null
      }
    }
  }
  