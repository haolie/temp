
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
    GetPb:function(k){
        k=k.toUpperCase()
        return window.Pb.M[k]
    },
    CreatePbObj:function(k){
        var p=this.GetPb()
        if(p){
            return p()
        }
      
        return null
    },
    CreateReqObj:function(command){
        return this.CreatePbObj(command+"Req")
    },
    CreateRequest:function(command,pbObj){
        var request= this.CreatePbObj("ClientRequest")
         
    },
    CreateResFromData:function(command,data){
        var k=command+"Res"
        var p=this.GetPb(k)
        if(p){
            return p.deserializeBinary(data)
        }
      
        return null
    },
    GetCommandNum:function(command){
        command=command.toUpperCase()
        var cmdMap=this.GetPb("Command")
        return cmdMap[command]?cmdMap[command]:0
    },
    GetCommandName:function(cmdNum){
        var cmdMap=this.GetPb("Command")
        for(c in cmdMap){
            if(cmdMap[c]==cmdNum){
                return c
            }
        }
        return ""
    },
}

 

export default pbUtils