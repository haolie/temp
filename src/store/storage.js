const MAX_STORAGE_NUM=20
const LOGINMAP='LoginMap'
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
 
        var loginMap=getLoginMap(window.localStorage)
         
        //delete storage[t.pid] 
        if(!loginMap[t.pid]){
          loginMap[t.pid]=t
        }else{
          var obj=loginMap[t.pid]
          Object.keys(t).forEach((k) => {
              obj[k]=t[k]
            })  
        }

         saveLoginMap(window.localStorage,loginMap)
      },
      setShowList (state,showList) { 
        window.localStorage[SHOWLIST]=JSON.stringify(showList)
      },
      loadStorageObj (state) { 
          
      },
    },
    actions: {
    },
    getters: {
      getPlayerStorage: (state)=>(pid) => {
        if (state.token === '') {
          state.token = window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : ''
        }
        return state.token
      },
      getShowList: (state)=> {
          if(window.localStorage[SHOWLIST]){
            return JSON.parse(window.localStorage[SHOWLIST])
          }

          return []
         
      }
    }
  }

  function getLoginMap(storageObj){
    if(storageObj[LOGINMAP]){
      return JSON.parse(storageObj[LOGINMAP]) 
    }

    return {}
  }

  function saveLoginMap(storageObj,lMap){
    storageObj[LOGINMAP]=JSON.stringify(lMap)
  }

  


  