const DEFAULT_SERVERGROUPID=1007
const SHOWLIST='ShowList'
const LOGINMAP='LoginMap'
export default {
    state: {
      LoginTabList: [],
    },
    mutations: {
      AddLoginTab (state, infoObj) {
         var temp= state.LoginTabList.pop()
         state.LoginTabList.push(infoObj)
         state.LoginTabList.push(temp)

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
  
  function createDefault(){
    return {Name:"新增",Status:0,ServerGroupId:DEFAULT_SERVERGROUPID}
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