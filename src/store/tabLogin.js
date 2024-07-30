const DEFAULT_SERVERGROUPID=1007
const STATUS_NEW=10000
const STATUS_INIT=1
const SHOWLIST='ShowList'
const LOGINMAP='LoginMap'
export default {
    state: {
      LoginTabList: [],
      TabSeed:0
    },
    mutations: {
      ReplaceLoginTab (state,tabId, infoObj) {
         var temp= getTabItem(state,tabId)
         if(temp==null){
          return
         }

         Object.keys(infoObj).forEach((k) => {
          for (let i in infoObj[k]) {
            temp[k] = infoObj[k]
          }
        })

        tryAddNewTab(state)
  
         saveToStoarge(state.LoginTabList)
      },
      RemoveLoginTab(state,index){
        var l=state.LoginTabList.length
        if(index>=l) return;
        var tempList=[]
        for(var i=l-1;i>index;i--){
           tempList.push(state.LoginTabList.pop())
        }

        state.LoginTabList.pop()
        tempList=tempList.reverse()
        tempList.forEach(element => {
          state.LoginTabList.push(element)
        });

        saveToStoarge(state.LoginTabList)
      }, 
      LoadTabList(state){
        if(window.localStorage[SHOWLIST]){
          var pidList= JSON.parse(window.localStorage[SHOWLIST])
          var loginMap=getLoginMap(window.localStorage)
          pidList.forEach(pid => {
            loginMap[pid].TabId=createTabId(state)
            loginMap[pid].status=STATUS_INIT

            if(loginMap[pid])state.LoginTabList.push(loginMap[pid])
          });

          state.LoginTabList.push(createDefault())
        }
 
      }
    },
    actions: {
    },
    getters: {
    }
  }
  


  function saveToStoarge(list){
    var idList=[]
    list.forEach(element => {
       if(element['id']) idList.push(element['id'])
     });

     window.localStorage[SHOWLIST]=JSON.stringify(idList)
  }

  function getLoginMap(storageObj){
    if(storageObj[LOGINMAP]){
      return JSON.parse(storageObj[LOGINMAP]) 
    }

    return {}
  }

  function createTabId(state){
     state.TabSeed+=1
     return state.TabSeed
  }

  function getTabItem(state,tabId){
    for(var i=0;i<state.LoginTabList.length;i++){
      if(state.LoginTabList[i].TabId==tabId){
        return state.LoginTabList[i]
      }
    }
  }

  function createDefault(state){
    return {Name:"新增",TabId:createTabId(),Status:STATUS_NEW,ServerGroupId:DEFAULT_SERVERGROUPID}
  }

  function tryAddNewTab(state){
    for(var i=0;i<state.LoginTabList.length;i++){
      if(state.LoginTabList[i].status==STATUS_NEW){
        return 
      }
    }

    state.LoginTabList.push(createDefault(state))
  }