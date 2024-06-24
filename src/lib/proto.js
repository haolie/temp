 
window.Pb={
  ReqList:[],
  ResList:[],
  PushList:[],
  OtherList:[],
  M:{},
  CmdMap:{},
}


let cmdAll=require("./pb/Command_pb.js")

var list =[
    require("./pb/ActiveGift_pb.js"),
    require("./pb/ActivityCalendar_pb.js"),
    require("./pb/ActivityDailyPack_pb.js"),
    require("./pb/ActivityDepot_pb.js"),
    require("./pb/ActivityKaifuMatch_pb.js"),
    require("./pb/ActivityKaifu_pb.js"),
    require("./pb/ActivityProRecruitReward_pb.js"),
    require("./pb/ActivityTaskPass_pb.js"),
    require("./pb/Activity_pb.js"),
    require("./pb/Adventure_pb.js"),
    require("./pb/AncientRemainsTreasureHunt_pb.js"),
    require("./pb/AncientRuinsRedeem_pb.js"),
    require("./pb/Area_pb.js"),
    require("./pb/AresRallyRecruit_pb.js"),
    require("./pb/Bonus_pb.js"),
    require("./pb/BuyGold_pb.js"),
    require("./pb/Card_pb.js"),
    require("./pb/ChallengeInfo_pb.js"),
    require("./pb/Champion_pb.js"),
    require("./pb/ChargeFirst_pb.js"),
    require("./pb/ChargeGift_pb.js"),
    require("./pb/Charge_pb.js"),
    require("./pb/Client_pb.js"),
    require("./pb/Collection_pb.js"),
    require("./pb/Command_pb.js"),
    require("./pb/DailyDeals_pb.js"),
    require("./pb/DailySign_pb.js"),
    require("./pb/Email_pb.js"),
    require("./pb/Examine_pb.js"),
    require("./pb/Expedition_pb.js"),
    require("./pb/Experience_pb.js"),
    require("./pb/FashionChatframe_pb.js"),
    require("./pb/FashionHeadframe_pb.js"),
    require("./pb/FashionHead_pb.js"),
    require("./pb/FashionHorn_pb.js"),
    require("./pb/FashionVcards_pb.js"),
    require("./pb/Fashion_pb.js"),
    require("./pb/Fight_pb.js"),
    require("./pb/Friend_pb.js"),
    require("./pb/GeneralActivityConvert_pb.js"),
    require("./pb/GeneralActivitySign_pb.js"),
    require("./pb/GeneralActivityTask_pb.js"),
    require("./pb/GlobalRank_pb.js"),
    require("./pb/Goods_pb.js"),
    require("./pb/GroupRoom_pb.js"),
    require("./pb/GuildHunt_pb.js"),
    require("./pb/Guild_pb.js"),
    require("./pb/HeroEquipPosition_pb.js"),
    require("./pb/HeroEquip_pb.js"),
    require("./pb/HeroRecruit_pb.js"),
    require("./pb/Hero_pb.js"),
    require("./pb/HitPoint_pb.js"),
    require("./pb/HonorExchange_pb.js"),
    require("./pb/HornMessage_pb.js"),
    require("./pb/Inherit_pb.js"),
    require("./pb/LoginGiftActivity_pb.js"),
    require("./pb/Logistics_pb.js"),
    require("./pb/Maintenance_pb.js"),
    require("./pb/Market_pb.js"),
    require("./pb/Marquee_pb.js"),
    require("./pb/NewHeroPreview_pb.js"),
    require("./pb/Notice_pb.js"),
    require("./pb/OnlineReward_pb.js"),
    require("./pb/OreShop_pb.js"),
    require("./pb/PlayerBigLv_pb.js"),
    require("./pb/PlayerEquip_pb.js"),
    require("./pb/PlayerGet_pb.js"),
    require("./pb/PlayerOutput_pb.js"),
    require("./pb/PlayerReward_pb.js"),
    require("./pb/Player_pb.js"),
    require("./pb/Profession_pb.js"),
    require("./pb/PulseheadRivalry_pb.js"),
    require("./pb/PvePass_pb.js"),
    require("./pb/PveTeam_pb.js"),
    require("./pb/Pve_pb.js"),
    require("./pb/Pvp_pb.js"),
    require("./pb/RecruitActivityGift_pb.js"),
    require("./pb/RecruitActivityPass_pb.js"),
    require("./pb/Resource_pb.js"),
    require("./pb/ResultStatus_pb.js"),
    require("./pb/RoughStoneShop_pb.js"),
    require("./pb/Secret_pb.js"),
    require("./pb/ServerInfo_pb.js"),
    require("./pb/Slostland_pb.js"),
    require("./pb/Slot_pb.js"),
    require("./pb/StarsGoodGift_pb.js"),
    require("./pb/StarterPack_pb.js"),
    require("./pb/TaskMain_pb.js"),
    require("./pb/Task_pb.js"),
    require("./pb/Team_pb.js"),
    require("./pb/TowerTreasure_pb.js"),
    require("./pb/Tower_pb.js"),
    require("./pb/TriggerGift_pb.js"),
    require("./pb/Vip_pb.js"),
    require("./pb/WeeklyPack_pb.js"),
    require("./pb/WorldBoss_pb.js"),
    require("./pb/ZhanQu_pb.js"),
  
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

var cmdTmp=new cmdAll()
for (var cmd in cmdTmp){
   var key=cmd.replace("_","")
   window.pb.CmdMap[key]={
    Key:key,
    Cmd:cmd
   }
}


  