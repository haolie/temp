import utils from './storeUtils'
 
const SHOWLIST='ShowList'
const FvList='FvList'

export default {
    state: {
      storageObj: {},
      fvlist:[],
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
      }  
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
      } 
    }
  } 


  