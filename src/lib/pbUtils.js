
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
        var p=this.GetPb(k)
        if(p){
            return new p()
        }
      
        return null
    },
    CreateReqObj:function(command){
        if( window.Pb.CmdMap[command.toUpperCase()]){
             return new window.Pb.CmdMap[command.toUpperCase()].Req()
        }

        return null
    },
    CreateRequest:function(opt,command,pbObj){
        var request= this.CreatePbObj("ClientRequest")
        
         
    },
    CreateResFromData:function(command,data){
        command=command.toUpperCase();
        if(window.Pb.CmdMap[command]){
            return window.Pb.CmdMap[command].Res.deserializeBinary(data)
        }
      
        return null
    },
    CreateReqFromData:function(command,data){
        command=command.toUpperCase();
        if(window.Pb.CmdMap[command]){
            return window.Pb.CmdMap[command].Req.deserializeBinary(data)
        }
      
        return null
    },
    GetCommandNum:function(command){
        if( window.Pb.CmdMap[command.toUpperCase()]){
            return  window.Pb.CmdMap[command.toUpperCase()].Value
       }

    },
    GetCommand:function(cmd){
        for (var k in window.Pb.CmdMap){
            if(cmd==window.Pb.CmdMap[k].Value){
                return window.Pb.CmdMap[k]
            }
        }
    },
    GetServerList:function(cb){ 
        var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        httpRequest.open('POST', 'https://managecenterapitest-dqsj2.qcplay.com/API/ServerGroupList.ashx', true); //第二步：打开连接
        httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
        httpRequest.send('GroupType=Mix&HashValue=');//发送请求 将情头体写在send中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
            if(httpRequest.status == 200){
                cb(httpRequest.status)
            }
    
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
                json=JSON.parse(json.Data)
                cb(httpRequest.status,json)
            }
        };
    }
}

 

export default pbUtils