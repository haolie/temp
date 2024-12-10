import libUtils from '../lib/libUtils' 
import utils from './storeUtils'
    
export default {
    state: { 
      fvList:[],
    },
    mutations: { 
      LoadFvList(state) {
        var lst=utils.loadFvList()
        lst.forEach(element => {
          state.fvList.push(element) 
        });
         
      },
      addFavoriteReq(state,addObj) { 

       var isAdd=true
       for(var i=0;i<=state.fvList.lenght;i++){
         if(state.fvList[i].cmd==addObj.cmd){
            isAdd=false
            state.fvList[i].reqData=addObj.reqData
         }
       }

       if(isAdd){
        state.fvList.push(addObj)
       }
 
 
        utils.saveFvList(state.fvList)
      },

      delFavoriteReq(state,delObj) { 
        var isFind=false
        libUtils.removeFromArray(state.fvList,function(i,item){
            if(item.cmd==delObj.cmd){
                isFind=true
                return 1;
            }
        })

        if(isFind){
            utils.saveFvList(state.fvList)
        }
      },
    },
    actions: {
    },
    getters: {  
      getFavoriteList: (state)=> {  
        return state.fvList
      }
      
    }
  } 


  