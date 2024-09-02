import utils from './storeUtils'

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
      ReplaceLoginTab (state,loginObj) { 
         var temp= getTabItem(state,loginObj.TabId)
         if(temp==null){
          return
         }

         temp=utils.copyObj(loginObj.Info,temp)

        tryAddNewTab(state)
  
         saveToStoarge(state)
      },
      RemoveLoginTab(state,tabId){
        var l=state.LoginTabList.length 
        var tempList=[]
        for(var i=l-1;i>=0;i--){
          var tempItem=state.LoginTabList.pop()
          if(tempItem.TabId==tabId){
            break
          }

           tempList.push(tempItem)
        }
 
        tempList=tempList.reverse()
        tempList.forEach(element => {
          state.LoginTabList.push(element)
        });

        saveToStoarge(state)
      }, 
      LoadTabList(state){
        if(window.localStorage[SHOWLIST]){
          var pidList= JSON.parse(window.localStorage[SHOWLIST])
          var loginMap=utils.getLoginMap()
          pidList.forEach(pid => {
            if(loginMap[pid]){
              var temp=utils.copyObj(loginMap[pid]) 
              temp.TabId=createTabId(state)
              temp.status=STATUS_INIT
   
              state.LoginTabList.push(temp)
            }
            
          }); 
        }

        state.LoginTabList.push(createDefault(state))
        console.log(state.LoginTabList) 
 
      }
    },
    actions: {
    },
    getters: {
    }
  }
  


  function saveToStoarge(state){
    var idList=[]
    state.LoginTabList.forEach(element => {
       if(element['pid']) idList.push(element['pid'])
     });

     window.localStorage[SHOWLIST]=JSON.stringify(idList)
  }

  
  function createTabId(state){
     state.TabSeed+=1
     return state.TabSeed.toString()
  }

  function getTabItem(state,tabId){
    for(var i=0;i<state.LoginTabList.length;i++){
      if(state.LoginTabList[i].TabId==tabId){
        return state.LoginTabList[i]
      }
    }
  }

  function createDefault(state){
    return {name:"新增",TabId:createTabId(state),status:STATUS_NEW,serverGroupId:DEFAULT_SERVERGROUPID}
  }

  function tryAddNewTab(state){
    for(var i=0;i<state.LoginTabList.length;i++){
      if(state.LoginTabList[i].status==STATUS_NEW){
        return 
      }
    }

    state.LoginTabList.push(createDefault(state))
  }

 