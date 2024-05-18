 
window.Pb={
  ReqList:[],
  ResList:[],
  PushList:[],
  OtherList:[],
  M:{}
}

var list =[
    require("./pb/Adventure/AdventureChallenge_pb.js"),
    require("./pb/Adventure/AdventureGetInfo_pb.js"),
    require("./pb/Area/AreaCustomMerge_pb.js"),
    require("./pb/Area/AreaGetSubServerGroupId_pb.js"),
    require("./pb/Area/AreaGetZoneId_pb.js"),
    require("./pb/Area/AreaGetZoneInfos_pb.js"),
    require("./pb/Area/AreaInfo_pb.js"),
    require("./pb/Area/AreaMatch_pb.js"),
    require("./pb/Area/AreaMergeInfo_pb.js"),
    require("./pb/Card/Card_pb.js"),
    require("./pb/Champion/ChampionFightGetInfo_pb.js"),
    require("./pb/Champion/ChampionGetReport_pb.js"),
    require("./pb/Champion/ChampionGuessGetInfo_pb.js"),
    require("./pb/Champion/ChampionGuessGetRecord_pb.js"),
    require("./pb/Champion/ChampionGuessReceive_pb.js"),
    require("./pb/Champion/ChampionGuess_pb.js"),
    require("./pb/Champion/ChampionModel_pb.js"),
    require("./pb/Champion/ChampionPraiseGetRecord_pb.js"),
    require("./pb/Champion/ChampionPraise_pb.js"),
    require("./pb/Champion/ChampionSignUpGetInfo_pb.js"),
    require("./pb/Champion/ChampionSignUpGetWinPlayer_pb.js"),
    require("./pb/Champion/ChampionSignUp_pb.js"),
    require("./pb/Champion/ChampionTeam_pb.js"),
    require("./pb/Client/ClientNewResourceVersion_pb.js"),
    require("./pb/Client/ClientPushModel_pb.js"),
    require("./pb/Client/ClientRequest_pb.js"),
    require("./pb/Client/ClientResponse_pb.js"),
    require("./pb/Collection/CollectionStarsUp_pb.js"),
    require("./pb/Collection/Collection_pb.js"),
    require("./pb/Collection/HeroTakeOffCollection_pb.js"),
    require("./pb/Collection/HeroWearCollection_pb.js"),
    require("./pb/Collection/PushCollectionChangeInfo_pb.js"),
    require("./pb/Collection/PushHeroWearCollectionChangeInfo_pb.js"),
    require("./pb/Common/Command_pb.js"),
    require("./pb/Common/ResultStatus_pb.js"),
    require("./pb/DailySign/DailySignGetInfo_pb.js"),
    require("./pb/DailySign/DailySign_pb.js"),
    require("./pb/Examine/ExamineFight_pb.js"),
    require("./pb/Examine/ExamineGetInfo_pb.js"),
    require("./pb/Examine/ExamineReceiveFristReward_pb.js"),
    require("./pb/Examine/Examine_pb.js"),
    require("./pb/Expedition/ExpeditionChoiceBuff_pb.js"),
    require("./pb/Expedition/ExpeditionGetHeroStatusInfo_pb.js"),
    require("./pb/Expedition/ExpeditionGetHpGoods_pb.js"),
    require("./pb/Expedition/ExpeditionGetInfo_pb.js"),
    require("./pb/Expedition/ExpeditionGetNodeFightInfo_pb.js"),
    require("./pb/Expedition/ExpeditionGetNpcStatusInfo_pb.js"),
    require("./pb/Expedition/ExpeditionGetReportInfo_pb.js"),
    require("./pb/Expedition/ExpeditionGetShopInfo_pb.js"),
    require("./pb/Expedition/ExpeditionMopUp_pb.js"),
    require("./pb/Expedition/ExpeditionRandomBuff_pb.js"),
    require("./pb/Expedition/ExpeditionReceiveAccumulate_pb.js"),
    require("./pb/Expedition/ExpeditionReceiveAchieve_pb.js"),
    require("./pb/Expedition/ExpeditionShopBuy_pb.js"),
    require("./pb/Expedition/ExpeditionUseHpGoods_pb.js"),
    require("./pb/Expedition/PushExpeditionInfo_pb.js"),
    require("./pb/FightModel/BattleReport_pb.js"),
    require("./pb/FightModel/CalcRequest_pb.js"),
    require("./pb/FightModel/CalcResponse_pb.js"),
    require("./pb/FightModel/ClientHero_pb.js"),
    require("./pb/FightModel/ClientNpcs_pb.js"),
    require("./pb/FightModel/ClientPlayer_pb.js"),
    require("./pb/FightModel/ClientSummon_pb.js"),
    require("./pb/FightModel/CommonAttr_pb.js"),
    require("./pb/FightModel/ErrorCode_pb.js"),
    require("./pb/FightModel/FightAttrEnum_pb.js"),
    require("./pb/FightModel/FightObjectTeamInfo_pb.js"),
    require("./pb/FightModel/FightObject_pb.js"),
    require("./pb/FightModel/GetGsNpcTeamInfo_pb.js"),
    require("./pb/FightModel/GetGsPlayerTeamInfo_pb.js"),
    require("./pb/FightModel/Location_pb.js"),
    require("./pb/FightModel/LuaResult_pb.js"),
    require("./pb/FightModel/RemainHp_pb.js"),
    require("./pb/FightModel/SupportUnits_pb.js"),
    require("./pb/Goods/GoodsAddGoods_pb.js"),
    require("./pb/Goods/GoodsDeleteAllGoods_pb.js"),
    require("./pb/Goods/GoodsPBInfo_pb.js"),
    require("./pb/Goods/GoodsSellGoods_pb.js"),
    require("./pb/Goods/GoodsUseGoods_pb.js"),
    require("./pb/Goods/PushGoodsChangeInfo_pb.js"),
    require("./pb/GroupRoom/GroupRoomApply_pb.js"),
    require("./pb/GroupRoom/GroupRoomChangeLeader_pb.js"),
    require("./pb/GroupRoom/GroupRoomChangeTeamType_pb.js"),
    require("./pb/GroupRoom/GroupRoomCreate_pb.js"),
    require("./pb/GroupRoom/GroupRoomHandleApply_pb.js"),
    require("./pb/GroupRoom/GroupRoomkickOut_pb.js"),
    require("./pb/GroupRoom/GroupRoomListApply_pb.js"),
    require("./pb/GroupRoom/GroupRoomPrepare_pb.js"),
    require("./pb/GroupRoom/GroupRoomSearch_pb.js"),
    require("./pb/GroupRoom/GroupRoomStartAutoApply_pb.js"),
    require("./pb/GroupRoom/GroupRoomStopAutoApply_pb.js"),
    require("./pb/GroupRoom/GroupRoomTeamInfo_pb.js"),
    require("./pb/GroupRoom/GroupRoomTeamItem_pb.js"),
    require("./pb/GroupRoom/GroupRoomTurnAutoJoin_pb.js"),
    require("./pb/GroupRoom/PushGroupRoomTeam_pb.js"),
    require("./pb/GVGCenter/GVGCenterChangeGroup_pb.js"),
    require("./pb/GVGCenter/GVGCenterGameEnd_pb.js"),
    require("./pb/GVGCenter/GVGCenterGroup_pb.js"),
    require("./pb/GVGCenter/GVGCenterGuildInfo_pb.js"),
    require("./pb/GVGCenter/GVGCenterGuildJoin_pb.js"),
    require("./pb/GVGCenter/GVGCenterGuildMemberModel_pb.js"),
    require("./pb/GVGCenter/GVGCenterGuildRankReward_pb.js"),
    require("./pb/GVGCenter/GVGCenterGuildRank_pb.js"),
    require("./pb/GVGCenter/GVGCenterGVGServerAddress_pb.js"),
    require("./pb/GVGCenter/GVGCenterLike_pb.js"),
    require("./pb/GVGCenter/GVGCenterMatchInfo_pb.js"),
    require("./pb/GVGCenter/GVGCenterMatchSchedule_pb.js"),
    require("./pb/GVGCenter/GVGCenterPlayerInfo_pb.js"),
    require("./pb/GVGCenter/GVGCenterPlayerRankReward_pb.js"),
    require("./pb/GVGCenter/GVGCenterPlayerRank_pb.js"),
    require("./pb/GVGCenter/GVGCenterPushGuildRankFashion_pb.js"),
    require("./pb/GVGCenter/GVGCenterPushGvgServerAddr_pb.js"),
    require("./pb/GVGServer/GVGServerBattleGuildRank_pb.js"),
    require("./pb/GVGServer/GVGServerBattleInfo_pb.js"),
    require("./pb/GVGServer/GVGServerBattlePlayerRank_pb.js"),
    require("./pb/GVGServer/GVGServerCar_pb.js"),
    require("./pb/GVGServer/GVGServerChangeNums_pb.js"),
    require("./pb/GVGServer/GVGServerCommander_pb.js"),
    require("./pb/GVGServer/GVGServerFightReport_pb.js"),
    require("./pb/GVGServer/GVGServerGpFightBlockModel_pb.js"),
    require("./pb/GVGServer/GVGServerGuildBirthPointInfo_pb.js"),
    require("./pb/GVGServer/GVGServerGuildDoorDamageRank_pb.js"),
    require("./pb/GVGServer/GVGServerGuildTask_pb.js"),
    require("./pb/GVGServer/GVGServerGuildWarFinalInfo_pb.js"),
    require("./pb/GVGServer/GVGServerGvgNpc_pb.js"),
    require("./pb/GVGServer/GVGServerLandResource_pb.js"),
    require("./pb/GVGServer/GVGServerLaoARankInfo_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientAttackReq_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientDefendReq_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientExitGame_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientGetInfo_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientGetLiteImg_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientGetPersonRank_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientGetPointInfoReq_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientMarkPoint_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientNearInfos_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientSetFirePoint_pb.js"),
    require("./pb/GVGServer/GVGServerMapClientTeamBackReq_pb.js"),
    require("./pb/GVGServer/GVGServerMapEventInfo_pb.js"),
    require("./pb/GVGServer/GVGServerMapPointDetialInfo_pb.js"),
    require("./pb/GVGServer/GVGServerMapPointInfo_pb.js"),
    require("./pb/GVGServer/GVGServerMapPointTypeModel_pb.js"),
    require("./pb/GVGServer/GVGServerMatch_pb.js"),
    require("./pb/GVGServer/GVGServerPbPoint_pb.js"),
    require("./pb/GVGServer/GVGServerPing_pb.js"),
    require("./pb/GVGServer/GVGServerPlayerInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPlayerRank_pb.js"),
    require("./pb/GVGServer/GVGServerPlayerTask_pb.js"),
    require("./pb/GVGServer/GVGServerPushAdditionInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushBattleGuildRank_pb.js"),
    require("./pb/GVGServer/GVGServerPushCountDownHint_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapAllPointInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapEventInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapFightInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapGameResult_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapGetNearEventInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapGuildScore_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapLandEvent_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapPointInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapTeamEffectInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapTeamInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushMapTeamOnPoint_pb.js"),
    require("./pb/GVGServer/GVGServerPushRankReport_pb.js"),
    require("./pb/GVGServer/GVGServerPushShowInfo_pb.js"),
    require("./pb/GVGServer/GVGServerPushSuccessMove_pb.js"),
    require("./pb/GVGServer/GVGServerPushToGSKillNum_pb.js"),
    require("./pb/GVGServer/GVGServerReddot_pb.js"),
    require("./pb/GVGServer/GVGServerTaskInfo_pb.js"),
    require("./pb/GVGServer/GVGServerTeamInfo_pb.js"),
    require("./pb/GVGServer/GVGServerUpdateGuildGVGInfo_pb.js"),
    require("./pb/GVGServer/GVGServerUpdateGuildInfo_pb.js"),
    require("./pb/GVGServer/GVGServerWarSituation_pb.js"),
    require("./pb/Hero/HeroAwakening_pb.js"),
    require("./pb/Hero/HeroBatchUpStar_pb.js"),
    require("./pb/Hero/HeroBigLvUp_pb.js"),
    require("./pb/Hero/HeroDisband_pb.js"),
    require("./pb/Hero/HeroExclusiveAct_pb.js"),
    require("./pb/Hero/HeroExclusiveInfo_pb.js"),
    require("./pb/Hero/HeroExclusiveLvUp_pb.js"),
    require("./pb/Hero/HeroHandBookReceive_pb.js"),
    require("./pb/Hero/HeroLvReset_pb.js"),
    require("./pb/Hero/HeroLvUp_pb.js"),
    require("./pb/Hero/HeroRollBackPreview_pb.js"),
    require("./pb/Hero/HeroRollBack_pb.js"),
    require("./pb/Hero/HeroSetAutoDecompose_pb.js"),
    require("./pb/Hero/HeroStarsBookGetInfo_pb.js"),
    require("./pb/Hero/HeroStarsBookInfo_pb.js"),
    require("./pb/Hero/HeroStarsBookLvUp_pb.js"),
    require("./pb/Hero/HeroTalentAttrLvUp_pb.js"),
    require("./pb/Hero/HeroTalentSkillLvUp_pb.js"),
    require("./pb/Hero/HeroTalent_pb.js"),
    require("./pb/Hero/HeroUpBagLv_pb.js"),
    require("./pb/Hero/HeroUpStart_pb.js"),
    require("./pb/Hero/Hero_pb.js"),
    require("./pb/Hero/PushHeroChangeInfo_pb.js"),
    require("./pb/Hero/PushHeroMainForceChangeInfo_pb.js"),
    require("./pb/Hero/PushHeroTalentChangeInfo_pb.js"),
    require("./pb/HeroEquip/HeroEquipCastingPreview_pb.js"),
    require("./pb/HeroEquip/HeroEquipCasting_pb.js"),
    require("./pb/HeroEquip/HeroEquipForge_pb.js"),
    require("./pb/HeroEquip/HeroEquipGetMultipleInfo_pb.js"),
    require("./pb/HeroEquip/HeroEquipPBInfo_pb.js"),
    require("./pb/HeroEquip/HeroEquipUpLv_pb.js"),
    require("./pb/HeroEquip/HeroEquipUpValue_pb.js"),
    require("./pb/HeroEquipPosition/HeroEquipPositionGetInfo_pb.js"),
    require("./pb/HeroEquipPosition/HeroEquipPositionOneKeyWear_pb.js"),
    require("./pb/HeroEquipPosition/HeroEquipPositionWear_pb.js"),
    require("./pb/Inherit/InheritBuyTimes_pb.js"),
    require("./pb/Inherit/InheritFight_pb.js"),
    require("./pb/Inherit/InheritGetInfo_pb.js"),
    require("./pb/Inherit/InheritObj_pb.js"),
    require("./pb/Inherit/InheritQuickFight_pb.js"),
    require("./pb/Player/PlayerAlterPlayerName_pb.js"),
    require("./pb/Player/PlayerBaseInfo_pb.js"),
    require("./pb/Player/PlayerCommonInfo_pb.js"),
    require("./pb/Player/PlayerDivinityClientBase_pb.js"),
    require("./pb/Player/PlayerGetInitData_pb.js"),
    require("./pb/Player/PlayerLoginForTest_pb.js"),
    require("./pb/Player/PlayerLogin_pb.js"),
    require("./pb/Player/PlayerModifyLvForDebug_pb.js"),
    require("./pb/Player/PlayerNewPlayer_pb.js"),
    require("./pb/Player/PlayerReLogin_pb.js"),
    require("./pb/Player/PlayerShuCangInfo_pb.js"),
    require("./pb/Player/PlayerXinTiao_pb.js"),
    require("./pb/Player/PlayerYaceLogin_pb.js"),
    require("./pb/PlayerBigLv/PlayerBigLvGetInfo_pb.js"),
    require("./pb/PlayerBigLv/PlayerBigLvReceiveTaskReward_pb.js"),
    require("./pb/PlayerBigLv/PlayerBigLvUp_pb.js"),
    require("./pb/PlayerEquip/PlayerEquipDecompose_pb.js"),
    require("./pb/PlayerEquip/PlayerEquipModel_pb.js"),
    require("./pb/PlayerEquip/PlayerEquipTakeOff_pb.js"),
    require("./pb/PlayerEquip/PlayerEquipWearGetInfo_pb.js"),
    require("./pb/PlayerEquip/PlayerEquipWear_pb.js"),
    require("./pb/PlayerOutput/PlayerOutputPreview_pb.js"),
    require("./pb/PlayerOutput/PlayerOutputQuickReceive_pb.js"),
    require("./pb/PlayerOutput/PlayerOutputReceive_pb.js"),
    require("./pb/PlayerReward/PlayerRewardDraw_pb.js"),
    require("./pb/PlayerReward/PlayerRewardGetInfo_pb.js"),
    require("./pb/Push/PushChampionInfo_pb.js"),
    require("./pb/Push/PushPlayerBigLvChange_pb.js"),
    require("./pb/Push/PushPlayerCharge_pb.js"),
    require("./pb/Push/PushPlayerEquipInfo_pb.js"),
    require("./pb/Push/PushPlayerLvChange_pb.js"),
    require("./pb/Push/PushPlayerOutputReceive_pb.js"),
    require("./pb/Push/PushPowerChange_pb.js"),
    require("./pb/Push/PushPvpTicket_pb.js"),
    require("./pb/Push/PushReddotInfo_pb.js"),
    require("./pb/Pve/PveFight_pb.js"),
    require("./pb/Pve/PveGetInfo_pb.js"),
    require("./pb/Pve/PveInfo_pb.js"),
    require("./pb/Pvp/PvpBuyRankReward_pb.js"),
    require("./pb/Pvp/PvpFightForGroup_pb.js"),
    require("./pb/Pvp/PvpFightForScore_pb.js"),
    require("./pb/Pvp/PvpGetInfo_pb.js"),
    require("./pb/Pvp/PvpGetRankInfo_pb.js"),
    require("./pb/Pvp/PvpGetReportInfo_pb.js"),
    require("./pb/Pvp/PvpRefresh_pb.js"),
    require("./pb/Resource/ResourceAddForDebug_pb.js"),
    require("./pb/Resource/ResourceObj_pb.js"),
    require("./pb/Resource/ResourceToClientModel_pb.js"),
    require("./pb/SecretRealm/SecretRealm_pb.js"),
    require("./pb/Team/TeamGetAllTeamInfo_pb.js"),
    require("./pb/Team/TeamGetTeamHeroIds_pb.js"),
    require("./pb/Team/TeamGetTeamInfo_pb.js"),
    require("./pb/Team/TeamModel_pb.js"),
    require("./pb/Team/TeamPlanAddPlan_pb.js"),
    require("./pb/Team/TeamPlanChangeDefautTeam_pb.js"),
    require("./pb/Team/TeamPlanDelTeamPlan_pb.js"),
    require("./pb/Team/TeamPlanGetInfo_pb.js"),
    require("./pb/Team/TeamPlanUpdateName_pb.js"),
    require("./pb/Team/TeamPlanUpdateTeamPlan_pb.js"),
    require("./pb/Team/TeamRemoveHero_pb.js"),
    require("./pb/Team/TeamUpdateTeamInfo_pb.js"),
    require("./pb/Tower/TowerAutoFight_pb.js"),
    require("./pb/Tower/TowerDrawProgressReward_pb.js"),
    require("./pb/Tower/TowerFight_pb.js"),
    require("./pb/Tower/TowerGetFightInfo_pb.js"),
    require("./pb/Tower/TowerGetInfo_pb.js"),
    require("./pb/Tower/TowerGetRank_pb.js"),
    require("./pb/Tower/TowerTestJumpNodeId_pb.js"),
    require("./pb/Tower/Tower_pb.js"),
    require("./pb/Vip/VipGetInfo_pb.js"),
    require("./pb/Vip/VipReceiveFree_pb.js"),
    require("./pb/Vip/Vip_pb.js"),
    require("./pb/WorldBoss/WorldBossAcceptAward_pb.js"),
    require("./pb/WorldBoss/WorldBossAttentionBoss_pb.js"),
    require("./pb/WorldBoss/WorldBossFight_pb.js"),
    require("./pb/WorldBoss/WorldBossGetBoss_pb.js"),
    require("./pb/WorldBoss/WorldBossGetHonorRank_pb.js"),
    require("./pb/WorldBoss/WorldBossGetRank_pb.js"),
    require("./pb/WorldBoss/WorldBossGiveUpFight_pb.js"),
    require("./pb/WorldBoss/WorldBossUnpack_pb.js"),
    require("./pb/ZhanQu/ZhanQuZoneCustomMerge_pb.js"),
    require("./pb/ZhanQu/ZhanQuZoneGetSubServerGroupId_pb.js"),
    require("./pb/ZhanQu/ZhanQuZoneGetZoneId_pb.js"),
    require("./pb/ZhanQu/ZhanQuZoneGetZoneInfos_pb.js"),
    require("./pb/ZhanQu/ZhanQuZoneInfo_pb.js"),
    require("./pb/ZhanQu/ZhanQuZoneMergeInfo_pb.js"),
  
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
   
      window.Pb.M[t]=temp[t]
   }
}


  