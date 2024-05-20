var ora = require('ora')
var rm = require('rimraf')
var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var deasync =require("deasync")
const { ls } = require('shelljs')



function copy(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function createF() {
  will2("pb") 
   fs.writeFile("./src/lib/proto.js",createContent(list),'utf8',(err)=>{ console.log(err) })
}

var list = []
var pbPath = './src/lib/'
function will2(dir){
 
   var files =readDir_(pbPath + dir)
   if(!files){
    return
   }


   
   for(var i=0;i<files.length;i++){
    var f=files[i]

  
    var tempPath =dir+"/"+f
    if(f.indexOf(".js")>0){
      list.push("./"+tempPath)
    }else{
      will2(tempPath)
    }
   }
}

createF()

 
function readDir_(dir){ 
   var status=false
   var lst=[]
   fs.readdir(dir,function(err,files){ 
     lst=files
     status=true
   })

   while (!status){
    deasync.runLoopOnce()
   }
 

   return lst
}

 

function travel(dir, todir, level) {
  fs.stat(todir, function (err2, stats) {
    if (err2) fs.mkdirSync(todir)
    fs.readdir(dir, function (err, files) {
      if (err) {
        throw err
      } else {
        if (files.length > 0) {
          files.forEach(o => {
            var pathname = path.join(dir, o)
            var topath = path.join(todir, o)

            fs.stat(pathname, function (err1, stats) {
              if (stats.isDirectory()) {
                travel(pathname, topath, level + 1)
              } else {
                copy(pathname, topath)
              }
            })
          })
          if (level === 1) {
            console.log(chalk.cyan('  new assets copy complete.\n'))
          }
        }
      }
    })
  })
}


function createrequire(pth){
  return `  require("${pth}"),
  `
}

function createContent(list){

  var listPath=""
  for(var i=0;i<list.length;i++){
    listPath+=createrequire(list[i])
  }

 return ` 
window.Pb={
  ReqList:[],
  ResList:[],
  PushList:[],
  OtherList:[],
  M:{}
}

var list =[
  ${listPath}
]

//var cliReqPb= require("./pb/Client/ClientRequest_pb")

var reqReg=new RegExp("Req$|Request$")
var resReg=new RegExp("Res$|Response$")
var pushReg=new RegExp("^Push")

for (var i=0;i<list.length;i++){
  var temp=list[i]
  for (t in temp){
      if(reqReg.test(t)) window.Pb.ReqList.push(t) ;
      else if(resReg.test(t)) window.Pb.ResList.push(t) ;
      else if(pushReg.test(t)) window.Pb.PushList.push(t) ;
      else  window.Pb.OtherList.push(t) ;
   
      window.Pb.M[t.toUpperCase()]=temp[t]
   }
}


  `
}