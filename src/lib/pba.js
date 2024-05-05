
window.Pb={
    ReqList:[],
    ResList:[],
    PushList:[],
    OtherList:[],
    M:{}
}

var list =["./pb/Client/ClientRequest_pb","./pb/Client/ClientResponse_pb","./pb/Client/ClientPushModel_pb"]

//var cliReqPb= require("./pb/Client/ClientRequest_pb")

var reqReg=new RegExp("Req$|Request$")
var resReg=new RegExp("Res$|Response$")
var pushReg=new RegExp("Push$")

for (var i=0;i<list.length;i++){
    var p=list[i]
    var temp=require(p)
    for (t in temp){
        console.log(t)
        if(reqReg.test(t)) window.Pb.ReqList.push(t) ;
        else if(resReg.test(t)) window.Pb.ResList.push(t) ;
        else if(pushReg.test(t)) window.Pb.PushList.push(t) ;
        else  window.Pb.OtherList.push(t) ;
     
        window.Pb.M[t]=temp[t]
     }
}

