
let pbUtils={
    SetWithObj:function(pbObj,obj){
if(!pbObj||!obj){
    return
}


        for (var k in obj){
            var fnName= this.GetSetFunName(k)
            console.log(fnName)
            pbObj[fnName](obj[k])
        }
    },
    GetSetFunName:function(key){
        return "set"+key.replace(/( |^)[a-z]/g,(L)=>L.toUpperCase())
    },
    CreatePbObj:function(k){
        if(window.Pb.M[k]){
            return new window.Pb.M[k]()
        }
      
        return null
    },
    CreateReqObj:function(command){
        return this.CreatePbObj(command+"Req")
    },
    CreateRequest:function(command,pbObj){
        var request= this.CreatePbObj("ClientRequest")
         
    },
}

 

export default pbUtils