 
window.Pb={
  ReqList:[],
  ResList:[],
  PushList:[],
  OtherList:[],
  CmdMap:{},
  M:{}
}


let cmdAll=require("./pb/Command_pb.js")

var list =[
    require("./pb/Activity_pb.js"),
    require("./pb/Card_pb.js"),
    require("./pb/Charge_pb.js"),
    require("./pb/Chat_pb.js"),
    require("./pb/Client_pb.js"),
    require("./pb/Command_pb.js"),
    require("./pb/Email_pb.js"),
    require("./pb/Goods_pb.js"),
    require("./pb/Hero_pb.js"),
    require("./pb/HitPoint_pb.js"),
    require("./pb/Image_pb.js"),
    require("./pb/Maintenance_pb.js"),
    require("./pb/Marquee_pb.js"),
    require("./pb/Notice_pb.js"),
    require("./pb/PlayerGet_pb.js"),
    require("./pb/Player_pb.js"),
    require("./pb/Resource_pb.js"),
    require("./pb/ResultStatus_pb.js"),
    require("./pb/ServerInfo_pb.js"),
    require("./pb/ZhanQu_pb.js"),
  
]

var reqReg=new RegExp("Req$|Request$")
var resReg=new RegExp("Res$|Response$")
var pushReg=new RegExp("^Push")

//var cmdTmp=new cmdAll()
for (var cmd in cmdAll.Command){
   var key=cmd.replace("_","").toUpperCase()
   window.Pb.CmdMap[key]={
    Key:key,
    Cmd:cmd,
    Value:cmdAll.Command[cmd]
   }
}

for (var i=0;i<list.length;i++){
  var temp=list[i]
  for (t in temp){
    var k=t.toUpperCase()   
      if(reqReg.test(t)){ 
         var tk= k.slice(0,k.length-3)
         if( window.Pb.CmdMap[tk]){
            window.Pb.CmdMap[tk].Req=temp[t]
            window.Pb.ReqList.push(window.Pb.CmdMap[tk]) 
         }
      } 
      else if(resReg.test(t)) {
       
         var tk= k.slice(0,k.length-3)
         if( window.Pb.CmdMap[tk]){
            window.Pb.CmdMap[tk].Res=temp[t]
            window.Pb.ResList.push(window.Pb.CmdMap[tk]) 
         }
      }
      else if(pushReg.test(t)) window.Pb.PushList.push(t) ;
      else  window.Pb.OtherList.push(t) ;
   
      window.Pb.M[t.toUpperCase()]=temp[t]
   }
}


  