const MAX_STORAGE_NUM=20
const LOGINMAP='LoginMap'
const SHOWLIST='ShowList'

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

 