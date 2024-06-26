// source: Command.proto
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

goog.exportSymbol('proto.PbModel.Common.Command', null, global);
/**
 * @enum {number}
 */
proto.PbModel.Common.Command = {
  ERROR: 0,
  PLAYER_LOGIN: 1,
  PLAYER_RELOGIN: 2,
  PLAYER_XINTIAO: 3,
  PLAYER_PUSHCHARGE: 4,
  PLAYER_PUSHREDDOTINFO: 5,
  CLIENT_CONNECTIONCLOSE: 6,
  RESOURCE_ADDFORDEBUG: 7,
  PLAYER_YACELOGIN: 8,
  CLIENT_NEWVERSION: 9,
  CLIENT_NEWRESOURCEVERSION: 10,
  RESOURCE_PUSHEXTRACHANGEINFO: 11,
  RESOURCE_DELETEFORDEBUG: 12,
  PLAYERGET_INITDATA: 10001,
  PLAYER_LOGINFORTEST: 10002,
  PLAYER_ALTERPLAYERNAME: 10003,
  PLAYER_NEWPLAYER: 10004,
  PLAYER_VIEWREDDOT: 10005,
  SERVERINFO_PUSHMODULEOPENINFOS: 10006,
  EMAIL_READ: 10007,
  EMAIL_READALL: 10008,
  EMAIL_REWARD: 10009,
  EMAIL_REWARDALL: 10010,
  EMAIL_DELETE: 10011,
  EMAIL_DELETEALL: 10012,
  EMAIL_GETINFO: 10013,
  EMAIL_ADDEMAILFORDEBUG: 10014,
  ACTIVITY_PUSHREDDOTINFO: 10015,
  CHARGE_CONFIRMORDERBYTYPE: 10016,
  CHARGE_STONEEXCHANGE: 10017,
  ACTIVITY_PUSHINFOS: 10018,
  PLAYER_VIEWALLINFO: 10019,
  CHARGE_GENERATEORDERID: 10020,
  PLAYER_PUSHCHATINFO: 10021,
  PLAYER_PUSHNEWSTEPINFO: 10022,
  PLAYER_MODIFYNEWSTEPINFO: 10023,
  FIGHT_TESTFORDEBUG: 20001,
  FIGHT_INIT: 20002,
  FIGHT_STOP: 20003,
  FIGHT_AUTO: 20004,
  SLOT_PUSHMAINSLOTINFO: 30001,
  PLAYER_PUSHFAPINFO: 30002,
  TEAM_GETALLTEAMINFO: 30101,
  TEAM_GETTEAMINFO: 30102,
  TEAM_UPDATETEAMINFO: 30103,
  TEAM_GETTEAMHEROIDS: 30104,
  TEAM_REMOVEHERO: 30105,
  TEAM_PLANGETINFO: 30151,
  TEAM_PLANADDPLAN: 30152,
  TEAM_PLANUPDATENAME: 30153,
  TEAM_PLANUPDATETEAMPLAN: 30154,
  TEAM_PLANDELTEAMPLAN: 30155,
  TEAM_PUSHTEAMPLAN: 30156,
  GUILD_REMINDGUILDIMPEACH: 30201,
  GUILD_BOSSEND: 30202,
  GUILD_SEARCH: 30203,
  GUILD_GETGUILDSHOWINFO: 30204,
  GUILD_GETGUILDINFORANK: 30205,
  GUILD_GETGUILDINFO: 30206,
  GUILD_CREATEGUILD: 30207,
  GUILD_DISMISSGUILD: 30208,
  GUILD_AUTOJOINGUILD: 30209,
  GUILD_APPLY: 30210,
  GUILD_CANCELAPPLY: 30211,
  GUILD_EXITGUILD: 30212,
  GUILD_GETAPPLYLIST: 30213,
  GUILD_MANAGEAPPLY: 30214,
  GUILD_MANAGEAPPLYFORONEKEY: 30215,
  GUILD_KICKOUTGUILD: 30216,
  GUILD_KICKOUTGUILDFORONEKEY: 30217,
  GUILD_POSTASSIGNMENT: 30218,
  GUILD_POSTCHANGE: 30219,
  GUILD_CONTRASTPOSTCHANGE: 30220,
  GUILD_GETGUILDPOSITIONINFO: 30221,
  GUILD_GETGUILDMEMBERINFO: 30222,
  GUILD_GETIMPEACHMENTINFO: 30223,
  GUILD_IMPEACHMENT: 30224,
  GUILD_IMPEACHMENTVOTE: 30225,
  GUILD_RETIREMENT: 30226,
  GUILD_UPGRADELV: 30227,
  GUILD_UPDATEGUILDBASICINFO: 30228,
  GUILD_UPDATENOTICE: 30229,
  GUILD_UPDATEDECLARATION: 30230,
  GUILD_UPDATEIFEXEMPTREVIEW: 30231,
  GUILD_GETGUILDNEWS: 30232,
  GUILD_GETBUILDINGINFO: 30233,
  GUILD_BUILDINGLVUP: 30234,
  GUILD_CHANGEGUILDTYPE: 30235,
  GUILD_GETWAGES: 30236,
  GUILD_GETGUILDSHOPINFO: 30237,
  GUILD_BUYGUILDSHOP: 30238,
  GUILD_GETGUILDRECORD: 30239,
  GUILD_GETGUILDTASKINFO: 30240,
  GUILD_GETGUILDTASKREWARD: 30241,
  GUILD_GETGUILDTASKREWARDBYONEKEY: 30242,
  GUILD_GETGUILDTASKOVERALLREWARD: 30243,
  GUILD_ADDACTIVENUMFORDEBUG: 30244,
  GUILD_ADDGUILDFUNDFORDEBUG: 30245,
  GUILD_GETBASEBOSSINFO: 30246,
  GUILD_BASEBOSSFIGHT: 30247,
  GUILD_GETBASEBOSSREWARD: 30248,
  GUILD_GETBASEBOSSRANK: 30249,
  GUILD_GETBASEBOSSMESSAGE: 30250,
  GUILD_GETBOSSINFO: 30251,
  GUILD_SWITCHBOSS: 30252,
  GUILD_ACTIVATIONBOSS: 30253,
  GUILD_BOSSFIGHT: 30254,
  GUILD_GETBOSSRANK: 30255,
  GUILD_BOSSENDVIEW: 30256,
  GUILD_MODIFYBEASTSPIRITNUMFORDEBUG: 30257,
  GUILD_PUSHAVATARINFO: 30258,
  GUILD_PUSHBUILDINGCHANGE: 30259,
  GUILD_GETBUILDINFO: 30260,
  GUILD_BUILD: 30261,
  GUILD_RECEIVEBUILDREWARD: 30262,
  GUILD_GETGUILDMEMBERBUILDINFO: 30263,
  HERORECRUIT_BUYGOODS: 30301,
  HERORECRUIT_RECRUIT: 30302,
  HERORECRUIT_GETINFO: 30303,
  HERORECRUIT_SELECTHERO: 30304,
  HERORECRUIT_SEENEWHEROTIPS: 30305,
  HERORECRUIT_GETRECRUITREWARDNUM: 30306,
  HERORECRUIT_CAMPREFRESH: 30307,
  HERORECRUIT_GETPRORECRUITNUMREWARD: 30308,
  ORESHOP_GETINFO: 30401,
  ROUGHSTONESHOP_GETINFO: 30402,
  CHARGEFIRST_GETINFO: 30501,
  CHARGEFIRST_DRAWCHARGEBOX: 30502,
  CHARGEFIRST_PUSHCHARGEBOXINFO: 30503,
  GUILDHUNT_GETINFO: 30601,
  GUILDHUNT_GETMEMBERINFO: 30602,
  GUILDHUNT_FIGHT: 30603,
  GUILDHUNT_BOSSFIGHT: 30604,
  GUILDHUNT_BORROWFIGHT: 30605,
  GUILDHUNT_PULLING: 30606,
  GUILDHUNT_GETREWARD: 30607,
  GUILDHUNT_GETREWARDBYONEKEY: 30608,
  GUILDHUNT_GETHURTRANKING: 30609,
  GUILDHUNT_HELP: 30610,
  GUILDHUNT_GETACCUMULATEREWARD: 30611,
  GUILDHUNT_GETHISTORYRANKING: 30612,
  GUILDHUNT_GETRANKREWARD: 30613,
  GUILDHUNT_SENDEMAIL: 30614,
  GUILDHUNT_VIEWSHOWID: 30615,
  GUILDHUNT_GETFIRSTKILLINFO: 30616,
  GUILDHUNT_GETFIGHTLOG: 30617,
  GUILDHUNT_PUSHGUILDHUNTSHOW: 30618,
  MARQUEE_PUSHMARQUEEFORSYSTEM: 30701,
  MARQUEE_PUSHMARQUEEFORSYSTEMCHAT: 30702,
  INHERIT_GETINFO: 40001,
  INHERIT_FIGHT: 40002,
  INHERIT_QUICKFIGHT: 40003,
  INHERIT_BUYTIMES: 40004,
  NEWHEROPREVIEW_GETINFO: 40005,
  NEWHEROPREVIEW_SHOW: 40006,
  STARSGOODGIFT_GETINFO: 40007,
  STARSGOODGIFT_TASKREWARD: 40008,
  PULSEHEADRIVALRY_GETINFO: 40009,
  PULSEHEADRIVALRY_TASKREWARD: 40010,
  PULSEHEADRIVALRY_LISTENTASKREWARD: 40011,
  HONOREXCHANGE_GETINFO: 40012,
  HONOREXCHANGE_TASKREWARD: 40013,
  HONOREXCHANGE_LISTENTASKREWARD: 40014,
  GOODS_USEGOODS: 50001,
  GOODS_SELLGOODS: 50002,
  GOODS_ADDGOODSFORDEBUG: 50003,
  GOODS_PUSHCHANGEINFO: 50004,
  GOODS_DELETEALLGOODSFORDEBUG: 50005,
  HEROEQUIP_FORGE: 50006,
  HEROEQUIP_GETMULTIPLEINFO: 50007,
  HEROEQUIP_UPLV: 50008,
  HEROEQUIP_UPVALUE: 50009,
  HEROEQUIP_CASTINGPREVIEW: 50010,
  HEROEQUIP_CASTING: 50011,
  HEROEQUIPPOSITION_GETINFO: 50012,
  HEROEQUIPPOSITION_WEAR: 50013,
  HEROEQUIPPOSITION_ONEKEYWEAR: 50014,
  HEROEQUIP_RECAST: 50015,
  SLOSTLAND_FORWARD: 50016,
  SLOSTLAND_HANDLE: 50017,
  SLOSTLAND_SHOPREFRESHORBUY: 50018,
  SLOSTLAND_GETINFO: 50019,
  SLOSTLAND_RECEIVEFIRSTPASSREWARD: 50020,
  SLOSTLAND_RECEIVESETTLEMENTREWARD: 50021,
  HEROEQUIP_ADDFORDEBUG: 50022,
  HEROEQUIPPOSITION_ONEKEYTAKEOFF: 50023,
  SLOSTLAND_GELALLSHOPINFO: 50024,
  ARESRALLYRECRUIT_CHOICEHEROPOOLID: 50025,
  ARESRALLYRECRUIT_RECRUIT: 50026,
  ARESRALLYRECRUIT_GETINFO: 50027,
  GENERALACTIVITYSIGN_GETINFO: 50028,
  GENERALACTIVITYSIGN_SIGN: 50029,
  GENERALACTIVITYCONVERT_GETINFO: 50030,
  GENERALACTIVITYCONVERT_CONVERT: 50031,
  SLOSTLAND_GETRANK: 50032,
  SLOSTLAND_USEMEDICALPACKAGE: 50033,
  PVE_GETINFO: 70001,
  PVE_FIGHT: 70002,
  CARD_GETINFO: 70003,
  CARD_DRAWDAILYREWARD: 70004,
  CARD_DRAWDRAWFREE: 70005,
  BUYGOLD_GETINFO: 70060,
  BUYGOLD_BUY: 70061,
  LOGISTICS_GETINFO: 70071,
  LOGISTICS_RESET: 70072,
  LOGISTICS_RANDOM: 70073,
  LOGISTICS_GETSENIORINFO: 70074,
  LOGISTICS_RESETSENIOR: 70075,
  LOGISTICS_RANDOMSENIOR: 70076,
  RECRUITACTIVITYPASS_GETTURNINFO: 70087,
  RECRUITACTIVITYPASS_TURNSELECT: 70088,
  RECRUITACTIVITYPASS_TURNDRAW: 70089,
  RECRUITACTIVITYPASS_GETPLUSHINFO: 70090,
  RECRUITACTIVITYPASS_PLUSHSELECT: 70091,
  RECRUITACTIVITYPASS_PLUSHDRAW: 70092,
  RECRUITACTIVITYGIFT_GETINFO: 70093,
  RECRUITACTIVITYGIFT_SELECT: 70094,
  RECRUITACTIVITYGIFT_BUY: 70095,
  RECRUITACTIVITYPASS_PUSHTASKFINISHED: 70096,
  PVEPASS_GETINFO: 70107,
  PVEPASS_DRAWREWARD: 70108,
  PVETEAM_GOFIGHT: 70109,
  CHARGEGIFT_GETINFO: 70170,
  CHARGEGIFT_RESET: 70171,
  CHARGEGIFT_SELECTENDREWARD: 70172,
  CHARGEGIFT_SELECTGIFTREWARD: 70173,
  WEEKLYPACK_GETINFO: 70192,
  WEEKLYPACK_SELECT: 70193,
  WEEKLYPACK_BUY: 70194,
  GROUPROOM_SEARCH: 70200,
  GROUPROOM_CREATE: 70201,
  GROUPROOM_APPLY: 70202,
  GROUPROOM_HANDLEAPPLY: 70203,
  GROUPROOM_CHANGELEADER: 70204,
  GROUPROOM_KICKOUT: 70205,
  GROUPROOM_CHANGETEAMTYPE: 70206,
  GROUPROOM_TURNAUTOJOIN: 70207,
  GROUPROOM_LISTAPPLY: 70208,
  GROUPROOM_PUSHTEAM: 70209,
  GROUPROOM_STARTAUTOAPPLY: 70210,
  GROUPROOM_STOPAUTOAPPLY: 70211,
  GROUPROOM_PREPARE: 70212,
  GROUPROOM_INVITE: 70215,
  GROUPROOM_LISTINVITE: 70216,
  GROUPROOM_PLAYERBEINVITELIST: 70217,
  GROUPROOM_ACCEPTINVITE: 70218,
  GROUPROOM_STARTTEAMMERGE: 70219,
  GROUPROOM_STOPTEAMMERGE: 70230,
  GROUPROOM_PUSHINVITE: 70231,
  GROUPROOM_TURNAUTOFIGHT: 70232,
  GROUPROOM_PUSHAUTOJOINSTOP: 70233,
  GROUPROOM_PUSHMERGESTOP: 70234,
  PVETEAM_PUSHSTART: 70300,
  PVETEAM_GETINFO: 70301,
  PVETEAM_SELECTBOSS: 70302,
  PVETEAM_APPLYFIGHT: 70303,
  PVETEAM_SELECTTOFIGHT: 70304,
  PVETEAM_STARTFIGHT: 70305,
  PVETEAM_PUSHSTATUS: 70306,
  PVETEAM_PUSHPOSITION: 70307,
  PVETEAM_UPDATEPOSITION: 70308,
  PVETEAM_REMINDERFIGHTTIMEOUT: 70309,
  PVETEAM_OVERGAME: 70310,
  PVETEAM_PUSHFINISHED: 70311,
  PVE_SETNODEFORDEBUG: 70312,
  PVETEAM_DRAWREWARD: 70313,
  PVETEAM_SETAUTOFIGHT: 70314,
  HERO_LVUP: 80101,
  HERO_LVRESET: 80102,
  HERO_UPSTART: 80103,
  HERO_BATCHUPSTAR: 80104,
  HERO_UPBAGLV: 80105,
  HERO_SETAUTODECOMPOSE: 80106,
  HERO_DISBAND: 80107,
  HERO_AWAKENING: 80108,
  HERO_ROLLBACK: 80109,
  HERO_TALENTATTRLVUP: 80110,
  HERO_TALENTSKILLLVUP: 80111,
  HERO_EXCLUSIVEACT: 80112,
  HERO_EXCLUSIVELVUP: 80113,
  HERO_BIGLVUP: 80114,
  HERO_ROLLBACKPREVIEW: 80115,
  HERO_PUSHCHANGEINFO: 80116,
  HERO_TALENTQUICKUP: 80117,
  HERO_PUSHMAINFORCECHANGEINFO: 80118,
  HERO_HANDBOOKRECEIVE: 80119,
  HERO_STARSBOOKGETINFO: 80120,
  HERO_STARSBOOKLVUP: 80121,
  HERO_PUSHTALENTCHANGEINFO: 80122,
  HERO_ADDSTARSFORDEBUG: 80123,
  HERO_LVRESETPREVIEW: 80124,
  HERO_PUSHBIGLVCHANGEINFO: 80125,
  HERO_PUSHOWNCHANGEINFO: 80126,
  HERO_VIEWHEROLIST: 80127,
  HERO_VIEWHERODETAIL: 80128,
  HERO_BIGLVGOODSEXCHANGE: 80129,
  HERO_GETHEROMAXATTR: 80130,
  COLLECTION_PUSHCHANGEINFO: 80201,
  COLLECTION_STARSUP: 80202,
  COLLECTION_HEROWEARCOLLECTION: 80203,
  COLLECTION_HEROTAKEOFFCOLLECTION: 80204,
  COLLECTION_PUSHHEROWEARCOLLECTIONCHANGEINFO: 80205,
  EXAMINE_GETINFO: 80301,
  EXAMINE_FIGHT: 80302,
  EXAMINE_RECEIVEFRISTREWARD: 80303,
  EXAMINE_MINPASS: 80304,
  FASHION_PUSHCHANGEINFO: 80401,
  FASHION_ACTIVATION: 80402,
  FASHION_LVUP: 80403,
  FASHION_WEAR: 80404,
  FASHIONHEAD_PUSHCHANGEINFO: 80405,
  FASHIONHEAD_ACTIVATION: 80406,
  FASHIONHEAD_WEAR: 80407,
  FASHIONHEAD_SETAVATAR: 80408,
  FASHIONHEADFRAME_PUSHCHANGEINFO: 80409,
  FASHIONHEADFRAME_ACTIVATION: 80410,
  FASHIONHEADFRAME_WEAR: 80411,
  FASHIONCHATFRAME_PUSHCHANGEINFO: 80412,
  FASHIONCHATFRAME_ACTIVATION: 80413,
  FASHIONCHATFRAME_WEAR: 80414,
  FASHIONHORN_PUSHCHANGEINFO: 80415,
  FASHIONHORN_ACTIVATION: 80416,
  FASHIONHORN_WEAR: 80417,
  FASHIONVCARDS_PUSHCHANGEINFO: 80418,
  FASHIONVCARDS_ACTIVATION: 80419,
  FASHIONVCARDS_WEAR: 80420,
  HORNMESSAGE_SEND: 80501,
  HORNMESSAGE_PUSHHORNMESSAGE: 80502,
  VIP_GETINFO: 80601,
  VIP_RECEIVEFREE: 80602,
  EXPERIENCE_GETINFO: 80701,
  PROFESSION_GETINFO: 80801,
  PROFESSION_STUDY: 80802,
  PROFESSION_RESET: 80803,
  ACTIVEGIFT_EXCHANGE: 80901,
  HITPOINT_RECORD: 81001,
  WORLDBOSS_GETBOSS: 90001,
  WORLDBOSS_GETRANK: 90002,
  WORLDBOSS_GIVEUPFIGHT: 90003,
  WORLDBOSS_FIGHT: 90004,
  WORLDBOSS_ATTENTIONBOSS: 90005,
  WORLDBOSS_ACCEPTAWARD: 90006,
  WORLDBOSS_UNPACK: 90007,
  WORLDBOSS_GETHONORRANK: 90008,
  DAILYSIGN_GETINFO: 90009,
  DAILYSIGN_SIGN: 90010,
  GLOBALRANK_GETRANK: 90011,
  GLOBALRANK_GETRANKFIRST: 90012,
  TASK_GETDAILYTASKINFO: 90013,
  TASK_RECEIVEDAILYTASKREWARD: 90014,
  TASK_RECEIVEDAILYBOXREWARD: 90015,
  TASK_GETWEEKLYTASKINFO: 90016,
  TASK_RECEIVEWEEKLYTASKREWARD: 90017,
  TASK_RECEIVEWEEKLYBOXREWARD: 90018,
  ACTIVITYTASKPASS_GETINFO: 90019,
  ACTIVITYTASKPASS_RECEIVEPROGRESS: 90020,
  ACTIVITYDEPOT_GETINFO: 90022,
  ACTIVITYDEPOT_CHOOSEREWARD: 90023,
  ACTIVITYDEPOT_BUY: 90024,
  ACTIVITYDEPOT_DRAW: 90025,
  ACTIVITYKAIFU_GETINFO: 90026,
  ACTIVITYKAIFU_RECEIVEGROWTH: 90027,
  ACTIVITYKAIFU_RECEIVEPROGRESS: 90028,
  ACTIVITYKAIFU_BUYITEM: 90029,
  DAILYSIGN_TIMESREWARD: 90030,
  ONLINEREWARD_GETINFO: 90031,
  ONLINEREWARD_RECEIVEREWARD: 90032,
  ACTIVITYDAILYPACK_GETINFO: 90033,
  ACTIVITYDAILYPACK_SELECT: 90034,
  ACTIVITYDAILYPACK_BUY: 90035,
  ACTIVITYPRORECRUITREWARD_GETINFO: 90036,
  ACTIVITYPRORECRUITREWARD_RECEIVEREWARD: 90037,
  WORLDBOSS_PUSHATTENTIONBOSS: 90038,
  ONLINEREWARD_PUSHONLINEREWARD: 90039,
  CHAMPION_SIGNUPGETINFO: 110001,
  CHAMPION_SIGNUP: 110002,
  CHAMPION_SIGNUPGETWINPLAYER: 110003,
  CHAMPION_TEAM: 110004,
  CHAMPION_PRAISEGETRECORD: 110005,
  CHAMPION_PRAISE: 110006,
  CHAMPION_GUESS: 110007,
  CHAMPION_GUESSGETINFO: 110008,
  CHAMPION_GUESSGETRECORD: 110009,
  CHAMPION_GUESSRECEIVE: 110010,
  CHAMPION_GETREPORT: 110011,
  CHAMPION_FIGHTGETINFO: 110012,
  PLAYEROUTPUT_PREVIEW: 110013,
  PLAYEROUTPUT_RECEIVE: 110014,
  PLAYEROUTPUT_QUICKRECEIVE: 110015,
  PLAYER_PUSHRSINFO: 110016,
  PLAYERBIGLV_GETINFO: 110018,
  PLAYERBIGLV_UP: 110019,
  PLAYERBIGLV_RECEIVETASKREWARD: 110020,
  PLAYER_MODIFYLVFORDEBUG: 110021,
  PLAYERREWARD_GETINFO: 110022,
  PLAYERREWARD_DRAW: 110023,
  PLAYEREQUIP_WEARGETINFO: 110024,
  PLAYEREQUIP_WEAR: 110025,
  PLAYEREQUIP_TAKEOFF: 110026,
  PLAYEREQUIP_DECOMPOSE: 110027,
  PLAYEREQUIP_PUSHINFO: 110028,
  PLAYEROUTPUT_PUSHRECEIVE: 110030,
  PVP_GETINFO: 110031,
  PVP_GETRANKINFO: 110032,
  PVP_REFRESH: 110033,
  PVP_GETREPORTINFO: 110034,
  PVP_FIGHTFORSCORE: 110035,
  PVP_FIGHTFORGROUP: 110036,
  PVP_BUYRANKREWARD: 110037,
  PVP_EMAILFORGROUP: 110039,
  PVP_EMAILFORSCORE: 110040,
  CHAMPION_FIGHTREMINDER: 110041,
  CHAMPION_GUESSREMINDER: 110042,
  MARKET_GETINFO: 110043,
  MARKET_REFRESH: 110044,
  MARKET_BUY: 110045,
  MARKET_DAILYGETINFO: 110046,
  MARKET_DAILYREFRESH: 110047,
  MARKET_DAILYBUY: 110048,
  PLAYEROUTPUT_QUICKGETINFO: 110049,
  PLAYERREWARD_GAMEFINISHA: 110050,
  PLAYERREWARD_GAMEFINISHB: 110051,
  PLAYERREWARD_GAMEFINISHC: 110052,
  PLAYERREWARD_GAMEADDFORDEBUG: 110053,
  PLAYERREWARD_GAMEFINISHRELIC: 110054,
  TASKMAIN_GETINFO: 110055,
  TASKMAIN_RECEIVE: 110056,
  TASKMAIN_MODIFYTASKIDFORDEBUG: 110057,
  TASKMAIN_PUSHCHANGED: 110058,
  CHAMPION_PUSHINFO: 110059,
  CHAMPION_PUSHSCREAMMARK: 110060,
  CHAMPION_GETINFO: 110061,
  CHAMPION_PUSHSIGNUPWINDOW: 110062,
  CHAMPION_PUSHGUESSWINDOW: 110063,
  CHAMPION_PUSHCHAMPIONWINDOW: 110064,
  BONUS_SEND: 110065,
  BONUS_SENDALL: 110066,
  BONUS_PUSHLEFTNUM: 110067,
  BONUS_PUSHSEND: 110068,
  BONUS_GETGOODSINFO: 110069,
  BONUS_GETINFO: 110070,
  BONUS_PUSHTASKREWARD: 110071,
  BONUS_GETITEM: 110072,
  BONUS_GETNOTSENDINFO: 110073,
  BONUS_RECEIVE: 110074,
  BONUS_RECEIVEACHIEVE: 110075,
  BONUS_RECEIVEALL: 110076,
  CHALLENGEINFO_GETINFO: 110077,
  TRIGGERGIFT_SPECIALTRIGGER: 110078,
  TRIGGERGIFT_POOLCHOOSE: 110079,
  TRIGGERGIFT_BUY: 110080,
  TRIGGERGIFT_PUSHINFO: 110081,
  TRIGGERGIFT_PUSHPRESENTINFO: 110082,
  TRIGGERGIFT_GETINFO: 110083,
  PVP_BUYTICKET: 110084,
  PVP_TEAM: 110085,
  SECRET_GETCHAPTERS: 120001,
  SECRET_STARTCHAPTER: 120002,
  SECRET_GETEVENTINFO: 120003,
  SECRET_USENODEEVENT: 120004,
  SECRET_RESERTCHAPTER: 120005,
  SECRET_UPDATEPOSITION: 120006,
  EXPEDITION_PUSHINFO: 120007,
  EXPEDITION_GETINFO: 120008,
  EXPEDITION_GETNPCSTATUSINFO: 120009,
  EXPEDITION_GETHEROSTATUSINFO: 120010,
  EXPEDITION_NODEFIGHT: 120011,
  EXPEDITION_CHOICEBUFF: 120012,
  EXPEDITION_GETHPGOODS: 120013,
  EXPEDITION_USEHPGOODS: 120014,
  EXPEDITION_RECEIVEACHIEVE: 120015,
  EXPEDITION_MOPUP: 120016,
  EXPEDITION_RANDOMBUFF: 120017,
  EXPEDITION_BOSSFIGHT: 120018,
  EXPEDITION_GETREPORTINFO: 120019,
  EXPEDITION_GETRANKINFO: 120020,
  EXPEDITION_GETSHOPINFO: 120021,
  EXPEDITION_SHOPBUY: 120022,
  EXPEDITION_RECEIVEACCUMULATE: 120023,
  FRIEND_GETLIST: 120024,
  FRIEND_GETAPPLYLIST: 120025,
  FRIEND_GETBLOCKLIST: 120026,
  FRIEND_DELETE: 120027,
  FRIEND_APPLY: 120028,
  FRIEND_APPLYHANDLE: 120029,
  FRIEND_APPLYBATCHHANDLE: 120030,
  FRIEND_BLOCK: 120031,
  FRIEND_BLOCKDELETE: 120032,
  FRIEND_PUSHCHANGEINFO: 120033,
  FRIEND_GETADDLIST: 120034,
  FRIEND_GIVESHIPCOIN: 120035,
  FRIEND_GETSHIPCOIN: 120036,
  FRIEND_GIVEANDGETSHIPCOIN: 120037,
  NOTICE_GETINFO: 120038,
  ACTIVITYCALENDAR_GETINFO: 120039,
  LOGINGIFTACTIVITY_GETINFO: 120040,
  LOGINGIFTACTIVITY_RECEIVE: 120041,
  GENERALACTIVITYTASK_GETINFO: 120042,
  GENERALACTIVITYTASK_RECEIVE: 120043,
  FRIEND_PUSHBLOCKINFOS: 120044,
  ANCIENTRUINSREDEEM_GETINFO: 120045,
  ANCIENTRUINSREDEEM_EXCHANGE: 120046,
  ANCIENTRUINSREDEEM_RECEIVELAYER: 120047,
  ANCIENTREMAINSTREASUREHUNT_GETINFO: 120048,
  ANCIENTREMAINSTREASUREHUNT_EXPLORE: 120049,
  ANCIENTREMAINSTREASUREHUNT_PASS: 120050,
  ANCIENTREMAINSTREASUREHUNT_FIGHT: 120051,
  FRIEND_PUSHAPPLY: 120052,
  FRIEND_SHORTCUTAPPLY: 120053,
  ANCIENTREMAINSTREASUREHUNT_MAPOVER: 120054,
  ANCIENTREMAINSTREASUREHUNT_MOPUP: 120055,
  TOWER_GETINFO: 140001,
  TOWER_GETFIGHTINFO: 140002,
  TOWER_FIGHT: 140003,
  TOWER_AUTOFIGHT: 140004,
  TOWER_DRAWPROGRESSREWARD: 140005,
  TOWER_GETRANK: 140006,
  TOWER_JUMPNODEIDFORDEBUG: 140007,
  TOWER_BUYSTAMINA: 140008,
  TOWERTREASURE_GETINFO: 140009,
  TOWERTREASURE_DRAW: 140010,
  ACTIVITYKAIFUMATCH_GETINFO: 140011,
  ACTIVITYKAIFUMATCH_GETRANK: 140012,
  DAILYDEALS_GETINFO: 140013,
  DAILYDEALS_DRAW: 140014,
  STARTERPACK_GETINFO: 140015,
  STARTERPACK_SELECT: 140016,
  STARTERPACK_BUY: 140017,
  STARTERPACK_DAILYFREE: 140018
};

goog.object.extend(exports, proto.PbModel.Common);
