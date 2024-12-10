const MAX_STORAGE_NUM=20
const LOGINMAP='LoginMap'
const SHOWLIST='ShowList'
const FvList='FvList'

export default {
    CON:{
        KEY_FAVORITELIST:'FavoriteList'
    },

    getLoginMap:function(){
        if(window.localStorage[LOGINMAP]){
          return JSON.parse(window.localStorage[LOGINMAP]) 
        }
    
        return {}
    },

    saveLoginMap:function(lMap){
        window.localStorage[LOGINMAP]=JSON.stringify(lMap)
    }, 
    loadFvList:function(){
        if(window.localStorage[FvList]){
            return JSON.parse(window.localStorage[FvList]) 
          }
      
        return []
    },
    saveFvList:function(list){
        window.localStorage[FvList]=JSON.stringify(list)
    }, 
    copyObj:function(srcObj,tagObj,ignoreObj){
        if(!tagObj){
         tagObj={}
        }
    
        Object.keys(srcObj).forEach((k) => {

            if(ignoreObj&&ignoreObj[k]) return
         tagObj[k] = srcObj[k]
       })
        
       return tagObj
     },


}

 