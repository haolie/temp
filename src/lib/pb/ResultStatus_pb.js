// source: ResultStatus.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.PbModel.Common.ResultStatus', null, global);
/**
 * @enum {number}
 */
proto.PbModel.Common.ResultStatus = {
  SUCCESS: 0,
  SERVERNOTEXISTS: 1,
  SERVERINMAINTAINANCE: 2,
  SYSTEMBUSY: 3,
  MODULENOTOPEN: 4,
  NEWVERSION: 5,
  NEWRESOURCEVERSION: 6,
  APIDATAERROR: 7,
  DATAERROR: 8,
  CLIENTDATAERROR: 9,
  ENCRYPTNOTCORRECT: 10,
  PARTNERLOGINKEYEMPTY: 11,
  PARTNERUSERLOGINFAIL: 12,
  HASSENSITIVEWWORDS: 13,
  DATANOTFULL: 14,
  SENSITIVEWORDS: 15,
  DATANOTEXIST: 16,
  IPFORBID: 17,
  HASSPECIALCHARACTER: 18,
  SESSIONEXPIRED: 19,
  CLIENTPARAMCOUNTNOENOUGH: 20,
  CLIENTPARAMTYPEERROR: 21,
  CLIENTPARAMOUTOFRANGE: 22,
  ENUMNOTDEFINED: 23,
  SERVERDATAERROR: 24,
  METHODNOEXIST: 25,
  NULLPARAMETER: 26,
  MATCHERROR: 27,
  PLAYERNOEXIST: 28,
  PLAYERISNOTNEW: 29,
  PLAYERISLOCKED: 30,
  DATASYNCING: 31,
  UNINTENDEDCALL: 32,
  PLAYERLOGINFOROTHERADDRESS: 33,
  PLAYERUPPERTIMELIMIT: 34,
  TIMEOUT: 35,
  ZHANQUDATATRANSFERING: 36,
  ERRCMD: 37,
  OPERATIONFAIL: 38,
  CLIENTPARAMREPEAT: 39,
  SUBMODULEISNOTEXISTS: 40,
  CMDNOTIMPL: 41,
  CMDUNAVAILABLE: 42,
  PLAYERNOLOGIN: 43,
  MESSAGEFORBIDDEN: 44,
  RESOURCETYPESUBENUMCONVERTERROR: 10001,
  RESOURCEMODELNOEXIST: 10002,
  NOTADDRESOURCETYPESUBENUM: 10003,
  NAMEALREADYEXIST: 10004,
  RESOURCETYPENOTIMPLBUILD: 10005,
  RESOUCENOTENOUGH: 10006,
  CHARGENOIMPL: 10007,
  CANTALTERPLAYERNAME: 10008,
  FRESSMODIFYNAMECOUNTNOTENOUGH: 10009,
  PLAYERNAMETOOSHORT: 10010,
  PLAYERNAMETOOLONG: 10011,
  TOKENERROR: 10012,
  EMAILNOEXISTS: 10013,
  EMAILREWARDNOEXIST: 10014,
  EMAILREWARDALREADRECEIVE: 10015,
  CHARGEMARKIDFORMATERROR: 10016,
  CREATEORDERIDFAIL: 10017,
  BONUSOUTTIME: 10018,
  BUYDAYLIMITNUM: 10019,
  BUYWEEKLYLIMITNUM: 10020,
  BUYMONTHLIMITNUM: 10021,
  CHARGENOSHORTAGE: 10022,
  HEROSLOTNOEXIST: 30001,
  TEAMHEROCOUNTERROR: 30101,
  TEAMFORMATIONNULL: 30102,
  TEAMFORMATIONISNULL: 30103,
  TEAMTEAMIDNOTCONTINUITY: 30104,
  TEAMNOFORMAIONT: 30105,
  TEAMHEROALREADYEXIST: 30106,
  TEAMHEROFIGHTPOSITIONREPEAT: 30107,
  TEAMTARGETPLAYERNOHERO: 30108,
  TEAMHERONOEXIST: 30109,
  TEAMFIGHTVERIFYFAIL: 30110,
  TEAMNAMEISEMPTY: 30111,
  TEAMNAMENOTEMPTY: 30112,
  TEAMTARGETFUNCNODEFINED: 30113,
  RECRUITMODELNOEXIST: 30201,
  RECRUITTYPENOTFREE: 30202,
  UNLOCKNOT: 30301,
  SLOTLOCKED: 30302,
  OPENDAYNOENOUGH: 30303,
  NAMEISEMPTY: 30304,
  INBUILDGUILDCD: 30305,
  GIFTNUMTOMAX: 30306,
  EXPNOENOUGH: 30307,
  NOTAPPLY: 30308,
  OPERATIONFREQUENTLY: 30309,
  GUILDPOSITIONNONUM: 30310,
  GUILDNUMTOMAX: 30311,
  GUILDCOINNOTENOUGH: 30312,
  GUILDNOTICENOTICELIMIT: 30313,
  GUILDNAMENOTICELIMIT: 30314,
  GUILDLOGONOTNUMBER: 30315,
  GUILDLOGONOTLOCK: 30316,
  GUILDEXISTSMEMBER: 30317,
  GUILDNOTICELIMIT: 30318,
  GUILDHUNTHPISZERO: 30319,
  GUILDHUNTLEVELERROR: 30320,
  GUILDHUNTNOTLOCK: 30321,
  GUILDHUNTNUMNOTENOUGH: 30322,
  GUILDHUNTIDTYPEERROR: 30323,
  GUILDFIGHTNUMNOTENOUGH: 30324,
  GUILDINFORMATIONTOBEUPDATED: 30325,
  GUILDBEHELPNONUM: 30326,
  GUILDBORROWNONUM: 30327,
  GUILDPLAYERDEALLOCK: 30328,
  GUILDEXEMPTREVIEWLOCK: 30329,
  GUILDHUNTBOXISDRAWED: 30330,
  GUILDHUNTBOXLEVELIDISDRAWED: 30331,
  GUILDHUNTBOXLEVELIDLOCK: 30332,
  GUILDIMPEACHNOTOPEN: 30333,
  GUILDIMPEACHVOTED: 30334,
  GUILDIMPEACHOPEN: 30335,
  GUILDSENDGUILDHUNTEMAILLIMIT: 30336,
  GUILDNOTKILLALLCHESS: 30337,
  GUILDSAMEGUILDNAME: 30338,
  GUILDGUILDFUNDNOTENOUGH: 30339,
  GUILDTYPEERROR: 30340,
  ACTIVENUMNOTENOUGH: 30341,
  GUILDRETIREMENTFAIL: 30342,
  GUILDHUNTNOTOPEN: 30343,
  GUILDISEXISTS: 30344,
  AUTOJOINGUILDERROR: 30345,
  GUILDSAMEGUILDNUMBER: 30346,
  GUILDDECLARATIONLIMIT: 30347,
  GUILDJOINLIMIT: 30348,
  GUILDNOPOWER: 30349,
  GUILDAPPLYTOMAX: 30350,
  GUILDAPPLYREPEAT: 30351,
  GUILDBASICINFONOTCHANGE: 30352,
  NOTGUILDMEMBER: 30353,
  GUILDNOTINTER: 30354,
  INJOINGUILDCD: 30355,
  GUILDMEMBERSFULL: 30356,
  GUILDAPPLYNOTEXIST: 30357,
  INTEREDGUILD: 30358,
  GUILDISNOTEXISTS: 30359,
  GUILDTRAIRINGCOINNOTENOUGH: 30360,
  GUILDNOTCHANGE: 30361,
  GUILDUNABLEACTIVITY: 30362,
  GUILDNOTACTIVITY: 30363,
  GUILDTYPECHANGECD: 30364,
  GUILDPERSONNOTLONE: 30365,
  GUILDAPPLYFIGHT: 30366,
  GUILDIMPEACHTIMENOT: 30367,
  GUILDSWITCHBOSSSAME: 30368,
  GUILDBOSSREPEATEDACTIVATION: 30369,
  ACTIVENOTOPEN: 30370,
  PLAYERNOTEXIST: 30371,
  NOREWARDACCESS: 30372,
  THEOTHERPLAYERFIGHTING: 30373,
  LEAGUETOPNOTJOINGUILD: 30374,
  BUILDREWARDHAVEBEENRECEIVED: 30375,
  BUILDREWARDNOTUNLOCK: 30376,
  GUILDBULIDINGCOINNOTENOUGH: 30377,
  GOODSMODELNOTEXIST: 30401,
  RECRUITSHOPCONFIGNOEXIST: 30402,
  RECRUITNOTENOUGHT: 30403,
  HERORECRUITTYPENOCANFREE: 30404,
  RECRUITTYPENOTOPEN: 30405,
  RECRUITWANTCONFIGNOEXIST: 30406,
  RECRUITWANTHERONUMLIMIT: 30407,
  RECRUITWANTHERONOEXIST: 30408,
  VIPLIMITED: 30409,
  PVEMAINCHAPTERREWARDRECEIVE: 30410,
  RECRUITCAMPIDNOTIDENTICAL: 30411,
  HEROSOULNOTENOUGH: 30412,
  CHARGEFIRSTCHARGENODONE: 30501,
  CHARGEFIRSTALREADYDRAWCHARGEREWARD: 30502,
  MAGICLVLIMIT: 40001,
  EXPNOTENOUGH: 40002,
  HEROLVRELATIONDATANOTEXIST: 40003,
  HEROMAXLVLIMIT: 40004,
  HEROMODELNOTEXIST: 40005,
  HEROSTARRELATIONNOTEXIST: 40006,
  HEROALREADYUPMAXSTAR: 40007,
  HEROUPSTARUSENOTENOUGH: 40008,
  HEROSTARRESETRELATIONNOTEXIST: 40009,
  HEROALREADYLOCK: 40010,
  HEROLOCK: 40011,
  HERONOTUSE: 40012,
  HEROFORMTYPEERR: 40013,
  HEROELEMENTIDERR: 40014,
  HERORESETTYPEIDERR: 40015,
  GOODSNOTENOUGH: 50001,
  CONFIGNOTEXISTS: 50002,
  GOODSCANNOTUSE: 50003,
  SELECTTARGETNOTEXISTS: 50004,
  THISGOODSNOTMERGE: 50005,
  CHAPTERNODENOTEXISTS: 50006,
  GOODSNOTSELL: 50007,
  HEROEQUIPNOTEXIST: 50008,
  SELECTEDRESOURCENOTMATCH: 50009,
  ALREADYMAXVALUE: 50010,
  HEROEQUIPALREADYWEAR: 50011,
  HEROEQUIPNOTCASTING: 50012,
  HEROEQUIPNOTRECAST: 50013,
  NODENOTFINISH: 50014,
  NODEINCORRECT: 50015,
  NODEALREADYFINISH: 50016,
  SHOPMERCHANDISENOTEXISTS: 50017,
  CHAPTERNOTPASS: 50018,
  PARTNOTMATCH: 50019,
  FIGHTNOTFINISH: 50020,
  HEROEQUIPNOTUSE: 50021,
  PLEASECHOICEPOOL: 50022,
  PLEASERECEICEREWARD: 50023,
  THISFINSHCHAPTERALREADYLIMIT: 50024,
  HEROALREADYSACRIFICE: 50025,
  INHERITNODENOTEXIST: 60001,
  INHERITNODEISLOCKED: 60002,
  INHERITCHAPTERNOTEXISTS: 60004,
  INHERITFIGHTTIMESNOTENOUGH: 60005,
  INHERITNODEPASSED: 60006,
  INHERITNODEISNOTPASS: 60007,
  INHERITTOWERIDDONTENOUGH: 60008,
  INHERITFIGHTCOUNTPARAMERROR: 60009,
  FUNCTASKCONFIGNOTEXIST: 60010,
  FUNCTASKNOTFINISH: 60011,
  FUNCALREADYRECEIVEREWARD: 60012,
  FUNCRECEIVEMAXNUM: 60013,
  INHERITCHAPTOPDAYNOENOGH: 60014,
  INHERITCHAPTLVNOENOGH: 60015,
  CANNOTBUYAGAIN: 70001,
  CARDNOTACTIVE: 70002,
  TEAMNOTEXISTS: 70003,
  TEAMALREADYFULL: 70004,
  ALREADYINTEAM: 70005,
  NEEDLEADERAUTHORITY: 70006,
  PVPMAPNOTEXISTS: 70007,
  PLAYERNOTAPPLY: 70008,
  PLAYERNOTINTEAM: 70009,
  TEAMTYPEERR: 70010,
  PLAYERALREADYINTEAM: 70011,
  CANNOTCHANGETEAMTAGNOW: 70012,
  GROOMROOMGAMEALREADYSTATED: 70013,
  NOTININVITELIST: 70014,
  TEAMNOTSTARTPREPARE: 70015,
  TEAMPLAYERNOTENOUGH: 70016,
  CANNOTCHANGELEADERNOW: 70017,
  PLAYERISPREPARING: 70018,
  PLAYERCANNOTFIGHTAGAIN: 70019,
  CANNOTFIGHTNOW: 70020,
  TEAMINFIGHTING: 70021,
  TEAMNOTINFIGHTING: 70022,
  TAGWASBEKILLED: 70023,
  PVETEAMCHAPTERNOTACTIVE: 70024,
  CANNOTSELECTREWARD: 70025,
  SELECTREWARDNOTEXISTS: 70026,
  GIFTNOTAVAILABLE: 70027,
  GIFTNOTBUY: 70028,
  REWARDNOTSELECT: 70029,
  TEAMWITHOUTTARGET: 70030,
  TEAMISMERGING: 70031,
  MAXLV: 80001,
  HEROSTARNOTENOUGH: 80002,
  HEROVALUELVNOTENOUGH: 80003,
  HEROEXPNOTENOUGH: 80004,
  HEROALREADYUPMAXLV: 80005,
  LVDEFICIENT: 80006,
  NEEDHEROUPAPPOINTSTAR: 80007,
  SURPLUSHEROLVNOTENOUGH: 80008,
  NEEDSAMEHEROSTAR: 80009,
  NEEDOTHERHERONUM: 80010,
  PARAMETERNOTENOUGH: 80011,
  HEROINTEAMINFO: 80012,
  HEROMODELIDINCONFORMITY: 80013,
  HEROSTARINCONFORMITY: 80014,
  HEROSTARNUMNOTENOUGH: 80015,
  HEROVALUELVNOEAT: 80016,
  PROFESSIONINCONFORMITY: 80017,
  PARAMNOTMATCH: 80018,
  HEROSTARACTIVITYCHECKED: 80019,
  HEROMODELNOEXIST: 80020,
  ALREADYAWAKENINGNOTOPERATE: 80021,
  CURRENTHEROLVNOTREBORN: 80022,
  TODAYHEROREBORNCOUNTALREADYMAX: 80023,
  HEROCONFIGNOTEXIST: 80024,
  ALREADYAWAKENING: 80025,
  USENUMNOTENOUGH: 80026,
  HEROROLLBACKNOCONDITIONNOT: 80027,
  HEROTALENTSKILLPOINTNOTENOUGH: 80028,
  HEROTALENTATTRPOINTNOTENOUGH: 80029,
  ACTIVATED: 80030,
  PLEASEACTIVATEFIRST: 80031,
  HEROBIGLVNOTENOUGH: 80032,
  AWAKENINGEXCLUSIVELVNOTENOUGH: 80033,
  REWARDRECEIVE: 80034,
  CONDITIONNOTMET: 80035,
  COLLECTIONNOT: 80036,
  COLLECTIONSTARSNOTSUIT: 80037,
  COLLECTIONWEARING: 80038,
  COLLECTIONMODEIDDIFFERENT: 80039,
  COLLECTIONALREADYWEAR: 80040,
  BIGLVNOTENOUGH: 80041,
  NODEPASSED: 80042,
  NEEDNODENOPASS: 80043,
  GIFTPURCHASED: 80044,
  CHARGENUMMISMATCH: 80045,
  COLLECTIONNOTWEAR: 80046,
  REPEATEDACTIVATION: 80047,
  FASHIONNONEEDACT: 80048,
  FASHIONNOLVUP: 80049,
  FASHIONHAVENOT: 80050,
  FASHIONSROLENOTSATISFIED: 80051,
  RESOURCETYPESUBENUMNOTUSE: 80052,
  FASHIONNOTUSE: 80053,
  HEADROLENOTSATISFIED: 80054,
  HEADHAVENOT: 80055,
  AVATARURLERROR: 80056,
  HEADFRAMEHAVENOT: 80057,
  HEADFRAMEEXPIRE: 80058,
  CHATFRAMEHAVENOT: 80059,
  CHATFRAMEEXPIRE: 80060,
  FASHIONEXPIRED: 80061,
  HERONUMMAX: 80062,
  HORNMESSAGELIMIT: 80063,
  NOLVUP: 80064,
  HERONOWEARCOLLECTION: 80065,
  COLLECTIONMODELIDDIFFERENT: 80066,
  PROFESSIONCLASSCOMPLETEPRNO: 80067,
  PROFESSIONNEEDPHASENO: 80068,
  INTRIGUENORESET: 80069,
  ACTIVEGIFTEXPIRED: 80070,
  ACTIVEGIFTHAVEUSED: 80071,
  ACTIVEGIFTNOTEXIST: 800072,
  ACTIVEGIFTNOTUSE: 800073,
  WORLDBOSSBOSSDEAD: 90001,
  WORLDBOSSDATANOTEXIST: 90002,
  WORLDBOSSNOTJOIN: 90003,
  WORLDBOSSATTENTIONBOSSUPPERLIMIT: 90004,
  WORLDBOSSATTENTION: 90005,
  WORLDBOSSNOATTENTION: 90006,
  WORLDBOSSOTHERBOSS: 90007,
  REWARDCANNOTDRAW: 90008,
  REWARDNOTEXISTS: 90009,
  ALREADYSIGN: 90010,
  PLEASEWAITFORCD: 90011,
  TIMEDNOTOPEN: 90012,
  SELECTREWARDCONFIGNOEXISTS: 90013,
  CHOOSENUMNOTENOUGH: 90014,
  DRAWFINISH: 90015,
  NOTCHOOSEREWARD: 90016,
  REWARDRECEIVEALL: 90017,
  VIPNOTINRANGE: 90018,
  NOTGUESSTIME: 100001,
  GUESSPARAMERROR: 100002,
  GUESSED: 100003,
  GUESSFAIL: 100004,
  PRAISED: 100005,
  SIGNUPED: 100006,
  NOTSIGNUPTIME: 100007,
  NOTTEAMTIME: 100008,
  NOTGUESS: 100009,
  EQUIPNOTEXISTS: 100011,
  NOTWEAREQUIP: 100012,
  PLAYERLVNOTENOUGH: 100013,
  TASKREWARDNOTRECEIVE: 100015,
  NOREWARD: 100016,
  NOPRIVILEGE: 100017,
  BAGCAPACITYNOTENOUGH: 100018,
  POWERNOTENOUGH: 100019,
  SCREAMMARKNOTENOUGH: 100020,
  PLAYERBIGLVNOTENOUGH: 100021,
  TGTNOTINCHALLENGELIST: 100022,
  PVPTICKETNOTENOUGH: 100023,
  CANNOTCHALLENGETGT: 100024,
  REWARDING: 100025,
  TGTNOTINRANK: 100026,
  GROUPERROR: 100027,
  TGTRANKCHANGED: 100028,
  CHALLENGECHANGED: 100029,
  BUYNUMNOTENOUGH: 100030,
  REFRESHNUMNOTENOUGH: 100031,
  OPENWITHPLAYERLV: 100032,
  PVEPROGRESSNOTENOUGH: 100033,
  PLEASEFINISHGAME: 100034,
  PLAYEREQUIPREPEATED: 100035,
  BONUSRECEIVED: 100036,
  RECEIVEMAXNUM: 100038,
  BONUSNOTENOUGH: 100039,
  GIFTFAILURE: 100040,
  CHAPTERDATANOTEXIST: 110001,
  ELEMENTEVENTCONFIGNOTEXIST: 110002,
  SECRETREALMEVENTTYPENOTEXIST: 110003,
  REQUESTOBJISNULL: 110004,
  SECRETREALMEVENTTYPEINCONSISTENT: 110005,
  NPCCONFIGNOTEXIST: 110006,
  GROUPPARAERROR: 110007,
  ORDERPARAINCONSISTENT: 110008,
  EXTRAPARAMNOENOUGH: 110009,
  HAVETHISBUFF: 110010,
  BUFFCONFIGNOTEXIST: 110011,
  BUFFNOTEXIST: 110012,
  CHAPTERCONFIGNOTEXIST: 110013,
  CHAPTERNOTOPEN: 110014,
  THISCHAPTERNOTSTART: 110015,
  TYPEIDISNULL: 110016,
  CHANGEIDISNOTEXIST: 110017,
  OPTIONIDNOTEXIST: 110018,
  REWARDRECEIVED: 110019,
  ELEMENTCONFIGNOTEXIST: 110020,
  DATARESET: 110021,
  NODECONFIGNOTEXIST: 110022,
  NOTSELECTEDBUFF: 110023,
  NODEISPASS: 110024,
  PLEASEPASSLASTLAYER: 110025,
  NODEINFOLACK: 110026,
  NODEISNOTPASS: 110027,
  NODENOTEXISTBUFF: 110028,
  NOTEXISTBUFFCONFIG: 110029,
  MAXNUM: 110030,
  PASSCOUNTNOTENOUGH: 110031,
  MOPUPNOTOPEN: 110032,
  MOPUPISEND: 110033,
  NODEISHAVEBUFF: 110034,
  PASSALLNODEANDCHOICEBUFF: 110035,
  SHOPCONFIGNOTEXISTS: 110036,
  BUYDAILYLIMITNUM: 110037,
  RECEIVEDREWARDNOTEXIST: 110038,
  SELECTEDBUFF: 110039,
  HEROMAXNUM: 110040,
  FORMATIONNULL: 110041,
  SERVERZONENOTEXIST: 110042,
  NOTONEZONE: 110043,
  BLOCKTHISPLAYER: 110044,
  BLOCKEDBYPLAYER: 110045,
  APIERROR: 110046,
  NOTFRIENDCANNOTBLOCK: 110047,
  NOTALLOWSELFFRIEND: 110048,
  FRIENDNUMISUPPERLIMIT: 110049,
  BLOCKNUMISUPPERLIMIT: 110050,
  TARGETFRIENDNUMISUPPERLIMIT: 110051,
  PLAYERALREADYBEFRIEND: 110052,
  NEXTDAYAPPLY: 110053,
  FRIENDAPPLYNOTEXISTS: 110054,
  TARGETADDFRIENDERROR: 110055,
  TARGETSAVEAPPLYERROR: 110056,
  UNBLOCKTHISPLAYER: 110057,
  FRIENDSHIPSENDMAX: 110058,
  FRIENDSHIPHASSEND: 110059,
  NOFRIEND: 110060,
  TODAYRECEIVEHASMAX: 110061,
  FRIENDSHIPNORECEIVE: 110062,
  FRIENDSHIPRECEIVED: 110063,
  FRIENDSHIPCOINNOTENOUGH: 110064,
  NOTONEAREA: 110065,
  TASKCONFIGNOTEXISTS: 110066,
  LAYERCONFIGNOTEXIST: 110067,
  LAYERNOTUNLOCK: 110068,
  BUYNUMLIMIT: 110069,
  BUYNUMUPPERLIMIT: 110070,
  EVENTCONFIGNOTEXISTS: 110071,
  REWARDCONFIGNOTEXISTS: 110072,
  NOFIGHTEVENT: 110073,
  CURMAPNOTCOMPLETE: 110074,
  MAPCOMPLETECOUNTNOTENOUGH: 110075,
  ACTIVITYREWARDCONFIGNOTEXISTS: 110076,
  EVENTREWARDCONFIGNOTEXISTS: 110077,
  DELETEPLAYERIDISNULL: 110078,
  SELECTEDBUFFSNOTEXIST: 110079,
  BLOCKDATAISNULL: 110080,
  TASKNOTFINISH: 113001,
  SCORENOTENOUGH: 113002,
  GUILDTEAMNOCHALLENGESNUM: 113003,
  PLAYERTEAMNOCHALLENGESNUM: 113004,
  TEAMSTATUSNOTFREETIME: 113005,
  WARBATTLEEND: 113006,
  TEAMNOCHALLENGESNUM: 113007,
  TEAMSTATUSERROR: 113008,
  TEAMSTATUSNOTALLOW: 113009,
  GUILDNOTONMAP: 120010,
  GVGNOTINFIGHTTIME: 120011,
  GVGBATTLENOTOPEN: 120012,
  PLEASEWAITBATTLEUPLOAD: 120013,
  GVGPLEASEREENTERBATTLE: 120014,
  GVGPLEASEWAITBATTLECREATE: 120015,
  GVGCANNOTLIKE: 120016,
  GVGLIKELIMIT: 120017,
  GVGCARNOTACTIVATE: 120018,
  GVGCARALREADYACTIVATE: 120019,
  GVGALREADYISCOMMANDER: 120020,
  GVGCOMMANDERORDERERROR: 120021,
  GVGMEMBERPOSTERROR: 120022,
  GVGCOMMANDPOSTBUFFCDLIMIT: 120023,
  GVGCOMMANDPOSTBUFFUSENUMLIMIT: 120024,
  GVGCOMMANDPOSTBUFFOTHERINUSE: 120025,
  GVGAUTHORITYERROR: 120026,
  GVGBUFFNOTIMPLEMENTED: 120027,
  COMBATTEAMNUMLIMIT: 150001,
  AUTOFIGHTNODEIDLIMIT: 150002,
  AUTOFIGHTNOOPEN: 150003,
  TOWERNODERELATIONNOTEXISTS: 150004,
  MAINTASKNOTOVER: 150005,
  TOWERNODEIDERR: 150006,
  STAMINANOTENOUGH: 150007,
  MAXSTAMINALIMIT: 150008,
  ACTIVITYENUMERR: 150009,
  ACTIVITYCONFIGDATAERR: 150010,
  TOWERTREASUREREWARDNOEXIST: 150011,
  TOWERTREASUREREWARDTYPEERR: 150012,
  TOWERNOTPASS: 150013,
  ALREADYTOWERTREASUREREWARD: 150014,
  TOWERTREASURENOOPEN: 150015,
  TOWERTREASURELAYERIDNOEXIST: 150016,
  TOWERTREASUREALREADYPAY: 150017,
  ALREADYDAILYDEALSREWARD: 150018,
  DAILYDEALSNOPAYREWARD: 150019,
  DAILYDEALSREWARDNOEXIST: 150020,
  DAILYDEALSALREADYPAY: 150021,
  DAILYDEALSONEKEYCHARGEERR: 150022,
  STARTERPACKGIFTNOEXIST: 150023,
  STARTERPACKGIFTBUYTYPEERR: 150024,
  STARTERPACKGIFTPOOLCONFIGDATAERR: 150025,
  ALREADYSELECTSTARTERPACKGIFT: 150026
};

goog.object.extend(exports, proto.PbModel.Common);
