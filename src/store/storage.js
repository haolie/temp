import utils from './storeUtils'
 
const SHOWLIST='ShowList'

export default {
    state: {
      storageObj: {}
    },
    mutations: {
      setPlayerItem (state, t) {
        if(!t.pid){
           return
        }
 
        var loginMap=utils.getLoginMap(window.localStorage)
         
        //delete storage[t.pid] 
        if(!loginMap[t.pid]){
          loginMap[t.pid]=t
        }else{
          var obj=loginMap[t.pid]
          Object.keys(t).forEach((k) => {
              obj[k]=t[k]
            })  
        } 
        utils.saveLoginMap(loginMap)
      },
      setShowList (state,showList) { 
        window.localStorage[SHOWLIST]=JSON.stringify(showList)
      },
      addFavoriteReq(state,addObj) { 

        if(!addObj.pid) return
        var loginMap=utils.getLoginMap(window.localStorage)
        var loginItem=loginMap[addObj.pid]
        if(!loginItem) {
          loginItem={pid:addObj.pid }
          loginMap[addObj.pid]=loginItem
        }
 
        if(!loginItem[utils.CON.KEY_FAVORITELIST]){
           loginItem[utils.CON.KEY_FAVORITELIST]={} 
        }

        loginItem[utils.CON.KEY_FAVORITELIST][[addObj.cmd]]=addObj.reqData
 
        utils.saveLoginMap(loginMap)
      },

      delFavoriteReq(state,delObj) { 

        if(!delObj.pid) return
        var loginMap=utils.getLoginMap(window.localStorage)
        var loginItem=loginMap[delObj.pid]
        if(!loginItem) {
          return
        }

        if(!loginItem[utils.CON.KEY_FAVORITELIST]){
          return
        }

        delete loginItem[utils.CON.KEY_FAVORITELIST][delObj.cmd]
  
        utils.saveLoginMap(loginMap)
      },
    },
    actions: {
    },
    getters: {
      getPlayerStorage: (state)=>(pid) => {
         var loginMap=utils.getLoginMap()
         if(loginMap[pid]) return loginMap[pid]

         return null
      },
      getShowList: (state)=> {
          if(window.localStorage[SHOWLIST]){
            return JSON.parse(window.localStorage[SHOWLIST])
          }

          return []
         
      },
      getFavoriteList: (state)=>(pid)=> { 
        var list=[]
        var loginMap=utils.getLoginMap(window.localStorage)
        var loginItem=loginMap[pid]
        if(!loginItem) {
          return list
        }

        if(!loginItem[utils.CON.KEY_FAVORITELIST]){
          return list
        }

        var temp=  loginItem[utils.CON.KEY_FAVORITELIST]
        Object.keys(temp).forEach((k) => {

           list.push({
            cmd:k,
            reqData:temp[k]
           })
        })
 
          return list
         
      }
      
    }
  } 


  