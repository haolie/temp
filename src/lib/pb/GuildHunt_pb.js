// source: GuildHunt.proto
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

var Resource_pb = require('./Resource_pb.js');
goog.object.extend(proto, Resource_pb);
var Team_pb = require('./Team_pb.js');
goog.object.extend(proto, Team_pb);
var Guild_pb = require('./Guild_pb.js');
goog.object.extend(proto, Guild_pb);
var Fight_pb = require('./Fight_pb.js');
goog.object.extend(proto, Fight_pb);
goog.exportSymbol('proto.PbModel.GuildHunt.FightLogInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntBoard', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntBorrowFightReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntBorrowFightRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntBossFightReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntBossFightRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntBoxInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntFightReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntFightRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntFirstKillInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetFightLogReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetFightLogRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetInfoReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetInfoRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetRewardReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntGetRewardRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntHelpReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntHelpRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntHurtRank', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntHurtRankInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntItemHuntReward', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntMemberInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntParticipateInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntPlayerInfo', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntPullingReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntPullingRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntRank', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntScoreRank', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntSendEmailReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntSendEmailRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntViewShowIdReq', null, global);
goog.exportSymbol('proto.PbModel.GuildHunt.GuildHuntViewShowIdRes', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntBorrowFightReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntBorrowFightReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntBorrowFightRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntBorrowFightRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntBossFightReq.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntBossFightReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntBossFightReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntBossFightReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntBossFightRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntBossFightRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntBossFightRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntFightReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntFightReq.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntFightReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntFightReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntFightReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntFightRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntFightRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntFightRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntFightRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetInfoReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetInfoRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntHurtRankInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntHurtRankInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetRewardReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetRewardReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetRewardReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetRewardRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetRewardRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetRewardRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetRewardRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntHelpReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntHelpReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntHelpReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntHelpRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntHelpRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntHelpRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntHelpRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntBoard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntBoard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntBoard.displayName = 'proto.PbModel.GuildHunt.GuildHuntBoard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntMemberInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntMemberInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntMemberInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntPlayerInfo.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntPlayerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntPlayerInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntPlayerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntItemHuntReward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntItemHuntReward.displayName = 'proto.PbModel.GuildHunt.GuildHuntItemHuntReward';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntRank = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntRank, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntRank.displayName = 'proto.PbModel.GuildHunt.GuildHuntRank';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntScoreRank, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntScoreRank.displayName = 'proto.PbModel.GuildHunt.GuildHuntScoreRank';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntHurtRank, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntHurtRank.displayName = 'proto.PbModel.GuildHunt.GuildHuntHurtRank';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntBoxInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntBoxInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntBoxInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntFirstKillInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntFirstKillInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntParticipateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntParticipateInfo.displayName = 'proto.PbModel.GuildHunt.GuildHuntParticipateInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntPullingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntPullingReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntPullingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntPullingRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntPullingRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntPullingRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntPullingRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntSendEmailReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntSendEmailReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntSendEmailReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntSendEmailRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntSendEmailRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntSendEmailRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntViewShowIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntViewShowIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntViewShowIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntViewShowIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetFightLogReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetFightLogReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntGetFightLogRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntGetFightLogRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.FightLogInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.FightLogInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.FightLogInfo.displayName = 'proto.PbModel.GuildHunt.FightLogInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.displayName = 'proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    borrowplayerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fightdifficulty: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntBorrowFightReq;
  return proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBorrowplayerid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightdifficulty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBorrowplayerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFightdifficulty();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 HuntId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.getHuntid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.setHuntid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string BorrowPlayerId = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.getBorrowplayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.setBorrowplayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 FightDifficulty = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.getFightdifficulty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightReq.prototype.setFightdifficulty = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_pb.ResourceToClientModel.toObject(includeInstance, f),
    maxhp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cuthp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reportstr: jspb.Message.getFieldWithDefault(msg, 5, ""),
    huntleveid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    fightreport: (f = msg.getFightreport()) && Fight_pb.FightReport.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntBorrowFightRes;
  return proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxhp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCuthp(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportstr(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntleveid(value);
      break;
    case 7:
      var value = new Fight_pb.FightReport;
      reader.readMessage(value,Fight_pb.FightReport.deserializeBinaryFromReader);
      msg.setFightreport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getMaxhp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCuthp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReportstr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHuntleveid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFightreport();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      Fight_pb.FightReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 MaxHp = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.getMaxhp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.setMaxhp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 Hp = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.getHp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.setHp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 CutHP = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.getCuthp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.setCuthp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string ReportStr = 5;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.getReportstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.setReportstr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 HuntLeveId = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.getHuntleveid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.setHuntleveid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional PbModel.Fight.FightReport FightReport = 7;
 * @return {?proto.PbModel.Fight.FightReport}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.getFightreport = function() {
  return /** @type{?proto.PbModel.Fight.FightReport} */ (
    jspb.Message.getWrapperField(this, Fight_pb.FightReport, 7));
};


/**
 * @param {?proto.PbModel.Fight.FightReport|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.setFightreport = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBorrowFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.clearFightreport = function() {
  return this.setFightreport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntBorrowFightRes.prototype.hasFightreport = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntBossFightReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntBossFightReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamlistList: jspb.Message.toObjectList(msg.getTeamlistList(),
    Team_pb.Team.toObject, includeInstance),
    fightcosttype: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightReq}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntBossFightReq;
  return proto.PbModel.GuildHunt.GuildHuntBossFightReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBossFightReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightReq}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntid(value);
      break;
    case 2:
      var value = new Team_pb.Team;
      reader.readMessage(value,Team_pb.Team.deserializeBinaryFromReader);
      msg.addTeamlist(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightcosttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntBossFightReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBossFightReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTeamlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      Team_pb.Team.serializeBinaryToWriter
    );
  }
  f = message.getFightcosttype();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 HuntId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.getHuntid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.setHuntid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PbModel.Team.Team TeamList = 2;
 * @return {!Array<!proto.PbModel.Team.Team>}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.getTeamlistList = function() {
  return /** @type{!Array<!proto.PbModel.Team.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, Team_pb.Team, 2));
};


/**
 * @param {!Array<!proto.PbModel.Team.Team>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightReq} returns this
*/
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.setTeamlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.Team.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Team.Team}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.addTeamlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.Team.Team, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.clearTeamlistList = function() {
  return this.setTeamlistList([]);
};


/**
 * optional int32 FightCostType = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.getFightcosttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightReq.prototype.setFightcosttype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntBossFightRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_pb.ResourceToClientModel.toObject(includeInstance, f),
    maxhp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cuthp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    huntleveid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fightreport: (f = msg.getFightreport()) && Fight_pb.FightReport.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntBossFightRes;
  return proto.PbModel.GuildHunt.GuildHuntBossFightRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxhp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCuthp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntleveid(value);
      break;
    case 6:
      var value = new Fight_pb.FightReport;
      reader.readMessage(value,Fight_pb.FightReport.deserializeBinaryFromReader);
      msg.setFightreport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntBossFightRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getMaxhp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCuthp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getHuntleveid();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFightreport();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      Fight_pb.FightReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 MaxHp = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.getMaxhp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.setMaxhp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 Hp = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.getHp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.setHp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 CutHP = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.getCuthp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.setCuthp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 HuntLeveId = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.getHuntleveid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.setHuntleveid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional PbModel.Fight.FightReport FightReport = 6;
 * @return {?proto.PbModel.Fight.FightReport}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.getFightreport = function() {
  return /** @type{?proto.PbModel.Fight.FightReport} */ (
    jspb.Message.getWrapperField(this, Fight_pb.FightReport, 6));
};


/**
 * @param {?proto.PbModel.Fight.FightReport|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.setFightreport = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBossFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.clearFightreport = function() {
  return this.setFightreport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntBossFightRes.prototype.hasFightreport = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntFightReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntFightReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamlistList: jspb.Message.toObjectList(msg.getTeamlistList(),
    Team_pb.Team.toObject, includeInstance),
    fightdifficulty: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightReq}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntFightReq;
  return proto.PbModel.GuildHunt.GuildHuntFightReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntFightReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightReq}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntid(value);
      break;
    case 2:
      var value = new Team_pb.Team;
      reader.readMessage(value,Team_pb.Team.deserializeBinaryFromReader);
      msg.addTeamlist(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightdifficulty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntFightReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntFightReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTeamlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      Team_pb.Team.serializeBinaryToWriter
    );
  }
  f = message.getFightdifficulty();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 HuntId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.getHuntid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.setHuntid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PbModel.Team.Team TeamList = 2;
 * @return {!Array<!proto.PbModel.Team.Team>}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.getTeamlistList = function() {
  return /** @type{!Array<!proto.PbModel.Team.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, Team_pb.Team, 2));
};


/**
 * @param {!Array<!proto.PbModel.Team.Team>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightReq} returns this
*/
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.setTeamlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.Team.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Team.Team}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.addTeamlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.Team.Team, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.clearTeamlistList = function() {
  return this.setTeamlistList([]);
};


/**
 * optional int32 FightDifficulty = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.getFightdifficulty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightReq.prototype.setFightdifficulty = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntFightRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntFightRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_pb.ResourceToClientModel.toObject(includeInstance, f),
    maxhp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cuthp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reportstr: jspb.Message.getFieldWithDefault(msg, 5, ""),
    bossmaxhp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    bosshp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    bosscuthp: jspb.Message.getFieldWithDefault(msg, 8, 0),
    huntleveid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    fightreport: (f = msg.getFightreport()) && Fight_pb.FightReport.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntFightRes;
  return proto.PbModel.GuildHunt.GuildHuntFightRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntFightRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxhp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCuthp(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportstr(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBossmaxhp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBosshp(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBosscuthp(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntleveid(value);
      break;
    case 10:
      var value = new Fight_pb.FightReport;
      reader.readMessage(value,Fight_pb.FightReport.deserializeBinaryFromReader);
      msg.setFightreport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntFightRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntFightRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getMaxhp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCuthp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReportstr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBossmaxhp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getBosshp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getBosscuthp();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getHuntleveid();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getFightreport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      Fight_pb.FightReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 MaxHp = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getMaxhp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setMaxhp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 Hp = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getHp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setHp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 CutHP = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getCuthp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setCuthp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string ReportStr = 5;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getReportstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setReportstr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 BossMaxHp = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getBossmaxhp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setBossmaxhp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 BossHp = 7;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getBosshp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setBosshp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 BossCutHP = 8;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getBosscuthp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setBosscuthp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 HuntLeveId = 9;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getHuntleveid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setHuntleveid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional PbModel.Fight.FightReport FightReport = 10;
 * @return {?proto.PbModel.Fight.FightReport}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.getFightreport = function() {
  return /** @type{?proto.PbModel.Fight.FightReport} */ (
    jspb.Message.getWrapperField(this, Fight_pb.FightReport, 10));
};


/**
 * @param {?proto.PbModel.Fight.FightReport|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.setFightreport = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFightRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.clearFightreport = function() {
  return this.setFightreport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntFightRes.prototype.hasFightreport = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq;
  return proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_pb.ResourceToClientModel.toObject(includeInstance, f),
    guildhuntplayerinfo: (f = msg.getGuildhuntplayerinfo()) && proto.PbModel.GuildHunt.GuildHuntPlayerInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes;
  return proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntPlayerInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntPlayerInfo.deserializeBinaryFromReader);
      msg.setGuildhuntplayerinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntplayerinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntPlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GuildHuntPlayerInfo GuildHuntPlayerInfo = 2;
 * @return {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.getGuildhuntplayerinfo = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntPlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntPlayerInfo, 2));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.setGuildhuntplayerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.clearGuildhuntplayerinfo = function() {
  return this.setGuildhuntplayerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetAccumulateRewardRes.prototype.hasGuildhuntplayerinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq;
  return proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildhuntfirstkillinfolistList: jspb.Message.toObjectList(msg.getGuildhuntfirstkillinfolistList(),
    proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes;
  return proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntFirstKillInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.deserializeBinaryFromReader);
      msg.addGuildhuntfirstkillinfolist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildhuntfirstkillinfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GuildHuntFirstKillInfo GuildHuntFirstKillInfoList = 1;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo>}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.prototype.getGuildhuntfirstkillinfolistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntFirstKillInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.prototype.setGuildhuntfirstkillinfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.prototype.addGuildhuntfirstkillinfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GuildHunt.GuildHuntFirstKillInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetFirstKillInfoRes.prototype.clearGuildhuntfirstkillinfolistList = function() {
  return this.setGuildhuntfirstkillinfolistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq;
  return proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 LevelID = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.prototype.getLevelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingReq.prototype.setLevelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildhunthurtranklistList: jspb.Message.toObjectList(msg.getGuildhunthurtranklistList(),
    proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject, includeInstance),
    playerguildhunthurtrank: (f = msg.getPlayerguildhunthurtrank()) && proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes;
  return proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntHurtRank;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader);
      msg.addGuildhunthurtranklist(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntHurtRank;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader);
      msg.setPlayerguildhunthurtrank(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildhunthurtranklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter
    );
  }
  f = message.getPlayerguildhunthurtrank();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GuildHuntHurtRank GuildHuntHurtRankList = 1;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.getGuildhunthurtranklistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntHurtRank, 1));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.setGuildhunthurtranklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRank=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.addGuildhunthurtranklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GuildHunt.GuildHuntHurtRank, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.clearGuildhunthurtranklistList = function() {
  return this.setGuildhunthurtranklistList([]);
};


/**
 * optional GuildHuntHurtRank PlayerGuildHuntHurtRank = 2;
 * @return {?proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.getPlayerguildhunthurtrank = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntHurtRank} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntHurtRank, 2));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntHurtRank|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.setPlayerguildhunthurtrank = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.clearPlayerguildhunthurtrank = function() {
  return this.setPlayerguildhunthurtrank(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetHistoryRankingRes.prototype.hasPlayerguildhunthurtrank = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq;
  return proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerguildhunthurtrank: (f = msg.getPlayerguildhunthurtrank()) && proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject(includeInstance, f),
    guildhunthurtranklistList: jspb.Message.toObjectList(msg.getGuildhunthurtranklistList(),
    proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes;
  return proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntHurtRank;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader);
      msg.setPlayerguildhunthurtrank(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntHurtRank;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader);
      msg.addGuildhunthurtranklist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerguildhunthurtrank();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter
    );
  }
  f = message.getGuildhunthurtranklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter
    );
  }
};


/**
 * optional GuildHuntHurtRank PlayerGuildHuntHurtRank = 1;
 * @return {?proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.getPlayerguildhunthurtrank = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntHurtRank} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntHurtRank, 1));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntHurtRank|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.setPlayerguildhunthurtrank = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.clearPlayerguildhunthurtrank = function() {
  return this.setPlayerguildhunthurtrank(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.hasPlayerguildhunthurtrank = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GuildHuntHurtRank GuildHuntHurtRankList = 2;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.getGuildhunthurtranklistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntHurtRank, 2));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.setGuildhunthurtranklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRank=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.addGuildhunthurtranklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GuildHunt.GuildHuntHurtRank, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetHurtRankingRes.prototype.clearGuildhunthurtranklistList = function() {
  return this.setGuildhunthurtranklistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetInfoReq;
  return proto.PbModel.GuildHunt.GuildHuntGetInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.repeatedFields_ = [1,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildhuntboardlistList: jspb.Message.toObjectList(msg.getGuildhuntboardlistList(),
    proto.PbModel.GuildHunt.GuildHuntBoard.toObject, includeInstance),
    guildhuntinfo: (f = msg.getGuildhuntinfo()) && proto.PbModel.GuildHunt.GuildHuntInfo.toObject(includeInstance, f),
    guildhuntplayerinfo: (f = msg.getGuildhuntplayerinfo()) && proto.PbModel.GuildHunt.GuildHuntPlayerInfo.toObject(includeInstance, f),
    guildhunthurtrankinfo: (f = msg.getGuildhunthurtrankinfo()) && proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.toObject(includeInstance, f),
    huntparticipateinfolistList: jspb.Message.toObjectList(msg.getHuntparticipateinfolistList(),
    proto.PbModel.GuildHunt.GuildHuntParticipateInfo.toObject, includeInstance),
    gethuntrewardidliststr: jspb.Message.getFieldWithDefault(msg, 6, ""),
    startime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    endtime: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetInfoRes;
  return proto.PbModel.GuildHunt.GuildHuntGetInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntBoard;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntBoard.deserializeBinaryFromReader);
      msg.addGuildhuntboardlist(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntInfo.deserializeBinaryFromReader);
      msg.setGuildhuntinfo(value);
      break;
    case 3:
      var value = new proto.PbModel.GuildHunt.GuildHuntPlayerInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntPlayerInfo.deserializeBinaryFromReader);
      msg.setGuildhuntplayerinfo(value);
      break;
    case 4:
      var value = new proto.PbModel.GuildHunt.GuildHuntHurtRankInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.deserializeBinaryFromReader);
      msg.setGuildhunthurtrankinfo(value);
      break;
    case 5:
      var value = new proto.PbModel.GuildHunt.GuildHuntParticipateInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntParticipateInfo.deserializeBinaryFromReader);
      msg.addHuntparticipateinfolist(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGethuntrewardidliststr(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildhuntboardlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntBoard.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntInfo.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntplayerinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.PbModel.GuildHunt.GuildHuntPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getGuildhunthurtrankinfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.serializeBinaryToWriter
    );
  }
  f = message.getHuntparticipateinfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.PbModel.GuildHunt.GuildHuntParticipateInfo.serializeBinaryToWriter
    );
  }
  f = message.getGethuntrewardidliststr();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStartime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * repeated GuildHuntBoard GuildHuntBoardList = 1;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getGuildhuntboardlistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntBoard, 1));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setGuildhuntboardlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.addGuildhuntboardlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GuildHunt.GuildHuntBoard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.clearGuildhuntboardlistList = function() {
  return this.setGuildhuntboardlistList([]);
};


/**
 * optional GuildHuntInfo GuildHuntInfo = 2;
 * @return {?proto.PbModel.GuildHunt.GuildHuntInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getGuildhuntinfo = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntInfo, 2));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setGuildhuntinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.clearGuildhuntinfo = function() {
  return this.setGuildhuntinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.hasGuildhuntinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GuildHuntPlayerInfo GuildHuntPlayerInfo = 3;
 * @return {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getGuildhuntplayerinfo = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntPlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntPlayerInfo, 3));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setGuildhuntplayerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.clearGuildhuntplayerinfo = function() {
  return this.setGuildhuntplayerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.hasGuildhuntplayerinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GuildHuntHurtRankInfo GuildHuntHurtRankInfo = 4;
 * @return {?proto.PbModel.GuildHunt.GuildHuntHurtRankInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getGuildhunthurtrankinfo = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntHurtRankInfo, 4));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntHurtRankInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setGuildhunthurtrankinfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.clearGuildhunthurtrankinfo = function() {
  return this.setGuildhunthurtrankinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.hasGuildhunthurtrankinfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated GuildHuntParticipateInfo HuntParticipateInfoList = 5;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntParticipateInfo>}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getHuntparticipateinfolistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntParticipateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntParticipateInfo, 5));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntParticipateInfo>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setHuntparticipateinfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.addHuntparticipateinfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.PbModel.GuildHunt.GuildHuntParticipateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.clearHuntparticipateinfolistList = function() {
  return this.setHuntparticipateinfolistList([]);
};


/**
 * optional string GetHuntRewardIdListStr = 6;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getGethuntrewardidliststr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setGethuntrewardidliststr = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 StarTime = 7;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getStartime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setStartime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 EndTime = 8;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetInfoRes.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerguildhunthurtrank: (f = msg.getPlayerguildhunthurtrank()) && proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject(includeInstance, f),
    guildhunthurtranklistList: jspb.Message.toObjectList(msg.getGuildhunthurtranklistList(),
    proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntHurtRankInfo;
  return proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntHurtRank;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader);
      msg.setPlayerguildhunthurtrank(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntHurtRank;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader);
      msg.addGuildhunthurtranklist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerguildhunthurtrank();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter
    );
  }
  f = message.getGuildhunthurtranklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter
    );
  }
};


/**
 * optional GuildHuntHurtRank PlayerGuildHuntHurtRank = 1;
 * @return {?proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.getPlayerguildhunthurtrank = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntHurtRank} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntHurtRank, 1));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntHurtRank|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} returns this
*/
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.setPlayerguildhunthurtrank = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.clearPlayerguildhunthurtrank = function() {
  return this.setPlayerguildhunthurtrank(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.hasPlayerguildhunthurtrank = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GuildHuntHurtRank GuildHuntHurtRankList = 2;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.getGuildhunthurtranklistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntHurtRank, 2));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntHurtRank>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} returns this
*/
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.setGuildhunthurtranklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRank=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.addGuildhunthurtranklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GuildHunt.GuildHuntHurtRank, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRankInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRankInfo.prototype.clearGuildhunthurtranklistList = function() {
  return this.setGuildhunthurtranklistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq;
  return proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntmemberinfoList: jspb.Message.toObjectList(msg.getHuntmemberinfoList(),
    proto.PbModel.GuildHunt.GuildHuntMemberInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes;
  return proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntMemberInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntMemberInfo.deserializeBinaryFromReader);
      msg.addHuntmemberinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntmemberinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GuildHuntMemberInfo HuntMemberInfo = 1;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntMemberInfo>}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.prototype.getHuntmemberinfoList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntMemberInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntMemberInfo>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.prototype.setHuntmemberinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.prototype.addHuntmemberinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GuildHunt.GuildHuntMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetMemberInfoRes.prototype.clearHuntmemberinfoList = function() {
  return this.setHuntmemberinfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq;
  return proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 LevelId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.prototype.getLevelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardReq.prototype.setLevelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_pb.ResourceToClientModel.toObject(includeInstance, f),
    participateinfolistList: jspb.Message.toObjectList(msg.getParticipateinfolistList(),
    proto.PbModel.GuildHunt.GuildHuntParticipateInfo.toObject, includeInstance),
    gethuntrewardidliststr: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes;
  return proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntParticipateInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntParticipateInfo.deserializeBinaryFromReader);
      msg.addParticipateinfolist(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGethuntrewardidliststr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getParticipateinfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntParticipateInfo.serializeBinaryToWriter
    );
  }
  f = message.getGethuntrewardidliststr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GuildHuntParticipateInfo ParticipateInfoList = 2;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntParticipateInfo>}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.getParticipateinfolistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntParticipateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntParticipateInfo, 2));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntParticipateInfo>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.setParticipateinfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.addParticipateinfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GuildHunt.GuildHuntParticipateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.clearParticipateinfolistList = function() {
  return this.setParticipateinfolistList([]);
};


/**
 * optional string GetHuntRewardIdListStr = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.getGethuntrewardidliststr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRankRewardRes.prototype.setGethuntrewardidliststr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetRewardReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetRewardReq;
  return proto.PbModel.GuildHunt.GuildHuntGetRewardReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetRewardReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 HuntId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.prototype.getHuntid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardReq.prototype.setHuntid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetRewardRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_pb.ResourceToClientModel.toObject(includeInstance, f),
    guildhuntboardlistList: jspb.Message.toObjectList(msg.getGuildhuntboardlistList(),
    proto.PbModel.GuildHunt.GuildHuntBoard.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetRewardRes;
  return proto.PbModel.GuildHunt.GuildHuntGetRewardRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntBoard;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntBoard.deserializeBinaryFromReader);
      msg.addGuildhuntboardlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetRewardRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntboardlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntBoard.serializeBinaryToWriter
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GuildHuntBoard GuildHuntBoardList = 2;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.getGuildhuntboardlistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntBoard, 2));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.setGuildhuntboardlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.addGuildhuntboardlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GuildHunt.GuildHuntBoard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardRes.prototype.clearGuildhuntboardlistList = function() {
  return this.setGuildhuntboardlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq;
  return proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_pb.ResourceToClientModel.toObject(includeInstance, f),
    guildhuntboardlistList: jspb.Message.toObjectList(msg.getGuildhuntboardlistList(),
    proto.PbModel.GuildHunt.GuildHuntBoard.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes;
  return proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntBoard;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntBoard.deserializeBinaryFromReader);
      msg.addGuildhuntboardlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntboardlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntBoard.serializeBinaryToWriter
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GuildHuntBoard GuildHuntBoardList = 2;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.getGuildhuntboardlistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntBoard, 2));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.setGuildhuntboardlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard}
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.addGuildhuntboardlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PbModel.GuildHunt.GuildHuntBoard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetRewardByOneKeyRes.prototype.clearGuildhuntboardlistList = function() {
  return this.setGuildhuntboardlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntHelpReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntHelpReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    helpplayerid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpReq}
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntHelpReq;
  return proto.PbModel.GuildHunt.GuildHuntHelpReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHelpReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpReq}
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelpplayerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntHelpReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHelpReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHelpplayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string HelpPlayerId = 1;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.prototype.getHelpplayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHelpReq.prototype.setHelpplayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntHelpRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntHelpRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntmemberinfoList: jspb.Message.toObjectList(msg.getHuntmemberinfoList(),
    proto.PbModel.GuildHunt.GuildHuntMemberInfo.toObject, includeInstance),
    guildhuntplayerinfo: (f = msg.getGuildhuntplayerinfo()) && proto.PbModel.GuildHunt.GuildHuntPlayerInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpRes}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntHelpRes;
  return proto.PbModel.GuildHunt.GuildHuntHelpRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHelpRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpRes}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntMemberInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntMemberInfo.deserializeBinaryFromReader);
      msg.addHuntmemberinfo(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntPlayerInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntPlayerInfo.deserializeBinaryFromReader);
      msg.setGuildhuntplayerinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntHelpRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHelpRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntmemberinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntplayerinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntPlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GuildHuntMemberInfo HuntMemberInfo = 1;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntMemberInfo>}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.getHuntmemberinfoList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntMemberInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntMemberInfo>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.setHuntmemberinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.addHuntmemberinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GuildHunt.GuildHuntMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.clearHuntmemberinfoList = function() {
  return this.setHuntmemberinfoList([]);
};


/**
 * optional GuildHuntPlayerInfo GuildHuntPlayerInfo = 2;
 * @return {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.getGuildhuntplayerinfo = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntPlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntPlayerInfo, 2));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.setGuildhuntplayerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHelpRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.clearGuildhuntplayerinfo = function() {
  return this.setGuildhuntplayerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntHelpRes.prototype.hasGuildhuntplayerinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntBoard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBoard.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    killrate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxhp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isgetreward: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    hunttype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    chessid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    monsterteamid: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntBoard;
  return proto.PbModel.GuildHunt.GuildHuntBoard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKillrate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxhp(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsgetreward(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHunttype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChessid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonsterteamid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntBoard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBoard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKillrate();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMaxhp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIsgetreward();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHunttype();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getChessid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMonsterteamid();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 HuntId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.getHuntid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.setHuntid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 KillRate = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.getKillrate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.setKillrate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 MaxHp = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.getMaxhp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.setMaxhp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool IsGetReward = 4;
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.getIsgetreward = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.setIsgetreward = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 HuntType = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.getHunttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.setHunttype = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 ChessID = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.getChessid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.setChessid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 MonsterTeamID = 7;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.getMonsterteamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoard.prototype.setMonsterteamid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntMemberInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    featstotal: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lv: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fap: jspb.Message.getFieldWithDefault(msg, 6, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    servername: jspb.Message.getFieldWithDefault(msg, 8, ""),
    serverid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    partnerid: jspb.Message.getFieldWithDefault(msg, 10, 0),
    position: jspb.Message.getFieldWithDefault(msg, 11, 0),
    lendnum: jspb.Message.getFieldWithDefault(msg, 12, 0),
    isarrange: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    behelpnum: jspb.Message.getFieldWithDefault(msg, 14, 0),
    guildfashionheadinfo: (f = msg.getGuildfashionheadinfo()) && Guild_pb.GuildFashionHeadInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntMemberInfo;
  return proto.PbModel.GuildHunt.GuildHuntMemberInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPositionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatstotal(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLv(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFap(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setServername(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerid(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPartnerid(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLendnum(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsarrange(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBehelpnum(value);
      break;
    case 15:
      var value = new Guild_pb.GuildFashionHeadInfo;
      reader.readMessage(value,Guild_pb.GuildFashionHeadInfo.deserializeBinaryFromReader);
      msg.setGuildfashionheadinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntMemberInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFeatstotal();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLv();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFap();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getServername();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getServerid();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getPartnerid();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLendnum();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getIsarrange();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getBehelpnum();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getGuildfashionheadinfo();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      Guild_pb.GuildFashionHeadInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 PositionId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setPositionid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string PlayerId = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 FeatsTotal = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getFeatstotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setFeatstotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Name = 4;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 Lv = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getLv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setLv = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 FAP = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getFap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setFap = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string UserId = 7;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string ServerName = 8;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getServername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setServername = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 ServerId = 9;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getServerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setServerid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 PartnerId = 10;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getPartnerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setPartnerid = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 Position = 11;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 LendNum = 12;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getLendnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setLendnum = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional bool IsArrange = 13;
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getIsarrange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setIsarrange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional int32 BeHelpNum = 14;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getBehelpnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setBehelpnum = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional PbModel.Guild.GuildFashionHeadInfo GuildFashionHeadInfo = 15;
 * @return {?proto.PbModel.Guild.GuildFashionHeadInfo}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.getGuildfashionheadinfo = function() {
  return /** @type{?proto.PbModel.Guild.GuildFashionHeadInfo} */ (
    jspb.Message.getWrapperField(this, Guild_pb.GuildFashionHeadInfo, 15));
};


/**
 * @param {?proto.PbModel.Guild.GuildFashionHeadInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
*/
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.setGuildfashionheadinfo = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntMemberInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.clearGuildfashionheadinfo = function() {
  return this.setGuildfashionheadinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntMemberInfo.prototype.hasGuildfashionheadinfo = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    pullingnum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    levelid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    resettime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mapid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntInfo}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntInfo;
  return proto.PbModel.GuildHunt.GuildHuntInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntInfo}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPullingnum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResettime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMapid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPullingnum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLevelid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getResettime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMapid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 PullingNum = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.getPullingnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.setPullingnum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 LevelID = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.getLevelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.setLevelid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 ResetTime = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.getResettime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.setResettime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 MapID = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.getMapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntInfo.prototype.setMapid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntPlayerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fightnum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fightnumlimit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fightbossnum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    helpnum: jspb.Message.getFieldWithDefault(msg, 4, 0),
    behelpnum: jspb.Message.getFieldWithDefault(msg, 5, 0),
    borrownum: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lendnum: jspb.Message.getFieldWithDefault(msg, 7, 0),
    isarrange: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    rewardcollectionstageList: jspb.Message.toObjectList(msg.getRewardcollectionstageList(),
    proto.PbModel.GuildHunt.GuildHuntItemHuntReward.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntPlayerInfo;
  return proto.PbModel.GuildHunt.GuildHuntPlayerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightnum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightnumlimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightbossnum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHelpnum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBehelpnum(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBorrownum(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLendnum(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsarrange(value);
      break;
    case 9:
      var value = new proto.PbModel.GuildHunt.GuildHuntItemHuntReward;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntItemHuntReward.deserializeBinaryFromReader);
      msg.addRewardcollectionstage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntPlayerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFightnum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFightnumlimit();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFightbossnum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHelpnum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBehelpnum();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getBorrownum();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLendnum();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getIsarrange();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getRewardcollectionstageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.PbModel.GuildHunt.GuildHuntItemHuntReward.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 FightNum = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getFightnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setFightnum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 FightNumLimit = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getFightnumlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setFightnumlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 FightBossNum = 3;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getFightbossnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setFightbossnum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 HelpNum = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getHelpnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setHelpnum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 BeHelpNum = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getBehelpnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setBehelpnum = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 BorrowNum = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getBorrownum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setBorrownum = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 LendNum = 7;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getLendnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setLendnum = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool IsArrange = 8;
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getIsarrange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setIsarrange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated GuildHuntItemHuntReward RewardCollectionStage = 9;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntItemHuntReward>}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.getRewardcollectionstageList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntItemHuntReward>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntItemHuntReward, 9));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntItemHuntReward>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
*/
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.setRewardcollectionstageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward}
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.addRewardcollectionstage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.PbModel.GuildHunt.GuildHuntItemHuntReward, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPlayerInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPlayerInfo.prototype.clearRewardcollectionstageList = function() {
  return this.setRewardcollectionstageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntItemHuntReward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chessid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward}
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntItemHuntReward;
  return proto.PbModel.GuildHunt.GuildHuntItemHuntReward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward}
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChessid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntItemHuntReward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChessid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 LevelID = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.prototype.getLevelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward} returns this
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.prototype.setLevelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 ChessId = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.prototype.getChessid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntItemHuntReward} returns this
 */
proto.PbModel.GuildHunt.GuildHuntItemHuntReward.prototype.setChessid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntRank.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntRank} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntRank.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    playerid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lv: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fap: jspb.Message.getFieldWithDefault(msg, 5, 0),
    position: jspb.Message.getFieldWithDefault(msg, 6, 0),
    winnum: jspb.Message.getFieldWithDefault(msg, 7, 0),
    baseinfo: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank}
 */
proto.PbModel.GuildHunt.GuildHuntRank.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntRank;
  return proto.PbModel.GuildHunt.GuildHuntRank.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntRank} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank}
 */
proto.PbModel.GuildHunt.GuildHuntRank.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLv(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFap(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinnum(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntRank.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntRank} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntRank.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLv();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFap();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getWinnum();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getBaseinfo();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 Rank = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PlayerId = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 Lv = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getLv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setLv = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Fap = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getFap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setFap = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 Position = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 WinNum = 7;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getWinnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setWinnum = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string BaseInfo = 8;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.getBaseinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntRank.prototype.setBaseinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntScoreRank.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntScoreRank} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    playerid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lv: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fap: jspb.Message.getFieldWithDefault(msg, 5, 0),
    position: jspb.Message.getFieldWithDefault(msg, 6, 0),
    score: jspb.Message.getFieldWithDefault(msg, 7, 0),
    baseinfo: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntScoreRank;
  return proto.PbModel.GuildHunt.GuildHuntScoreRank.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntScoreRank} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLv(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFap(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntScoreRank.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntScoreRank} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLv();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFap();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getBaseinfo();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 Rank = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PlayerId = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 Lv = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getLv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setLv = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Fap = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getFap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setFap = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 Position = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 Score = 7;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string BaseInfo = 8;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.getBaseinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntScoreRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntScoreRank.prototype.setBaseinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRank} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    playerid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lv: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fap: jspb.Message.getFieldWithDefault(msg, 5, 0),
    position: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hurt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    hurttimeunix: jspb.Message.getFieldWithDefault(msg, 8, 0),
    guildfashionheadinfo: (f = msg.getGuildfashionheadinfo()) && Guild_pb.GuildFashionHeadInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntHurtRank;
  return proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRank} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLv(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFap(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHurt(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHurttimeunix(value);
      break;
    case 9:
      var value = new Guild_pb.GuildFashionHeadInfo;
      reader.readMessage(value,Guild_pb.GuildFashionHeadInfo.deserializeBinaryFromReader);
      msg.setGuildfashionheadinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntHurtRank} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLv();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFap();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHurt();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getHurttimeunix();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getGuildfashionheadinfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      Guild_pb.GuildFashionHeadInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 Rank = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PlayerId = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 Lv = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getLv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setLv = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Fap = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getFap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setFap = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 Position = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 Hurt = 7;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getHurt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setHurt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 HurtTimeUnix = 8;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getHurttimeunix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setHurttimeunix = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional PbModel.Guild.GuildFashionHeadInfo GuildFashionHeadInfo = 9;
 * @return {?proto.PbModel.Guild.GuildFashionHeadInfo}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.getGuildfashionheadinfo = function() {
  return /** @type{?proto.PbModel.Guild.GuildFashionHeadInfo} */ (
    jspb.Message.getWrapperField(this, Guild_pb.GuildFashionHeadInfo, 9));
};


/**
 * @param {?proto.PbModel.Guild.GuildFashionHeadInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
*/
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.setGuildfashionheadinfo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntHurtRank} returns this
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.clearGuildfashionheadinfo = function() {
  return this.setGuildfashionheadinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntHurtRank.prototype.hasGuildfashionheadinfo = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntBoxInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoxInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    boxid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reward: jspb.Message.getFieldWithDefault(msg, 2, ""),
    playername: jspb.Message.getFieldWithDefault(msg, 3, ""),
    issurprisebox: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoxInfo}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntBoxInfo;
  return proto.PbModel.GuildHunt.GuildHuntBoxInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoxInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoxInfo}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBoxid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReward(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayername(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssurprisebox(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntBoxInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoxInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoxid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getReward();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIssurprisebox();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int32 BoxId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.getBoxid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoxInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.setBoxid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Reward = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.getReward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoxInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.setReward = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PlayerName = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.getPlayername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoxInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.setPlayername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool IsSurpriseBox = 4;
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.getIssurprisebox = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoxInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntBoxInfo.prototype.setIssurprisebox = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    guildid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    flag: jspb.Message.getFieldWithDefault(msg, 4, 0),
    killtime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    servergroupid: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntFirstKillInfo;
  return proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlag(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKilltime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServergroupid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFlag();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getKilltime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getServergroupid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 LevelID = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.getLevelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.setLevelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string GuildId = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Name = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 Flag = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.setFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 KillTime = 5;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.getKilltime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.setKilltime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 ServerGroupId = 6;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.getServergroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntFirstKillInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntFirstKillInfo.prototype.setServergroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    istop: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo;
  return proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstop(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIstop();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool IsTop = 3;
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.getIstop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.setIstop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string Name = 4;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntParticipateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo}
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntParticipateInfo;
  return proto.PbModel.GuildHunt.GuildHuntParticipateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo}
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntParticipateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 LevelID = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.prototype.getLevelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.prototype.setLevelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Rank = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntParticipateInfo} returns this
 */
proto.PbModel.GuildHunt.GuildHuntParticipateInfo.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntPullingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntPullingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingReq}
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntPullingReq;
  return proto.PbModel.GuildHunt.GuildHuntPullingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPullingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingReq}
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntPullingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPullingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 HuntId = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.prototype.getHuntid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPullingReq.prototype.setHuntid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.repeatedFields_ = [1,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntPullingRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntPullingRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildhuntboardlistList: jspb.Message.toObjectList(msg.getGuildhuntboardlistList(),
    proto.PbModel.GuildHunt.GuildHuntBoard.toObject, includeInstance),
    guildhuntinfo: (f = msg.getGuildhuntinfo()) && proto.PbModel.GuildHunt.GuildHuntInfo.toObject(includeInstance, f),
    guildhuntplayerinfo: (f = msg.getGuildhuntplayerinfo()) && proto.PbModel.GuildHunt.GuildHuntPlayerInfo.toObject(includeInstance, f),
    leavingmessagelistList: jspb.Message.toObjectList(msg.getLeavingmessagelistList(),
    proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntPullingRes;
  return proto.PbModel.GuildHunt.GuildHuntPullingRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPullingRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.GuildHuntBoard;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntBoard.deserializeBinaryFromReader);
      msg.addGuildhuntboardlist(value);
      break;
    case 2:
      var value = new proto.PbModel.GuildHunt.GuildHuntInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntInfo.deserializeBinaryFromReader);
      msg.setGuildhuntinfo(value);
      break;
    case 3:
      var value = new proto.PbModel.GuildHunt.GuildHuntPlayerInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntPlayerInfo.deserializeBinaryFromReader);
      msg.setGuildhuntplayerinfo(value);
      break;
    case 4:
      var value = new proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.deserializeBinaryFromReader);
      msg.addLeavingmessagelist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntPullingRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPullingRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildhuntboardlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GuildHunt.GuildHuntBoard.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PbModel.GuildHunt.GuildHuntInfo.serializeBinaryToWriter
    );
  }
  f = message.getGuildhuntplayerinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.PbModel.GuildHunt.GuildHuntPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getLeavingmessagelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GuildHuntBoard GuildHuntBoardList = 1;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.getGuildhuntboardlistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntBoard, 1));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntBoard>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.setGuildhuntboardlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntBoard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntBoard}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.addGuildhuntboardlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GuildHunt.GuildHuntBoard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.clearGuildhuntboardlistList = function() {
  return this.setGuildhuntboardlistList([]);
};


/**
 * optional GuildHuntInfo GuildHuntInfo = 2;
 * @return {?proto.PbModel.GuildHunt.GuildHuntInfo}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.getGuildhuntinfo = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntInfo, 2));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.setGuildhuntinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.clearGuildhuntinfo = function() {
  return this.setGuildhuntinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.hasGuildhuntinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GuildHuntPlayerInfo GuildHuntPlayerInfo = 3;
 * @return {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.getGuildhuntplayerinfo = function() {
  return /** @type{?proto.PbModel.GuildHunt.GuildHuntPlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.PbModel.GuildHunt.GuildHuntPlayerInfo, 3));
};


/**
 * @param {?proto.PbModel.GuildHunt.GuildHuntPlayerInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.setGuildhuntplayerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.clearGuildhuntplayerinfo = function() {
  return this.setGuildhuntplayerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.hasGuildhuntplayerinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated GuildHuntLeavingMessageInfo LeavingMessageList = 4;
 * @return {!Array<!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo>}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.getLeavingmessagelistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo, 4));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.setLeavingmessagelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo}
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.addLeavingmessagelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.PbModel.GuildHunt.GuildHuntLeavingMessageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPullingRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPullingRes.prototype.clearLeavingmessagelistList = function() {
  return this.setLeavingmessagelistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntSendEmailReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntSendEmailReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntSendEmailReq}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntSendEmailReq;
  return proto.PbModel.GuildHunt.GuildHuntSendEmailReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntSendEmailReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntSendEmailReq}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntSendEmailReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntSendEmailReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntSendEmailRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntSendEmailRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailRes.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntSendEmailRes}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntSendEmailRes;
  return proto.PbModel.GuildHunt.GuildHuntSendEmailRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntSendEmailRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntSendEmailRes}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntSendEmailRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntSendEmailRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntSendEmailRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstkilllist: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq;
  return proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstkilllist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstkilllist();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string FirstKillList = 1;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.prototype.getFirstkilllist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillReq.prototype.setFirstkilllist = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes;
  return proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferFirstKillRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntplayer: jspb.Message.getFieldWithDefault(msg, 1, ""),
    huntinfo: jspb.Message.getFieldWithDefault(msg, 2, ""),
    boardlist: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bossboxinfolist: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bossranklist: jspb.Message.getFieldWithDefault(msg, 5, ""),
    leavingmessagelist: jspb.Message.getFieldWithDefault(msg, 6, ""),
    guildhuntnewslist: jspb.Message.getFieldWithDefault(msg, 7, ""),
    guildhuntplayerinfolist: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq;
  return proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntplayer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntinfo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBoardlist(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBossboxinfolist(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBossranklist(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeavingmessagelist(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildhuntnewslist(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildhuntplayerinfolist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntplayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHuntinfo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBoardlist();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBossboxinfolist();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBossranklist();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLeavingmessagelist();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGuildhuntnewslist();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getGuildhuntplayerinfolist();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string HuntPlayer = 1;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getHuntplayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setHuntplayer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string HuntInfo = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getHuntinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setHuntinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BoardList = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getBoardlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setBoardlist = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string BossBoxInfoList = 4;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getBossboxinfolist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setBossboxinfolist = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string BossRankList = 5;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getBossranklist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setBossranklist = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string LeavingMessageList = 6;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getLeavingmessagelist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setLeavingmessagelist = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string GuildHuntNewsList = 7;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getGuildhuntnewslist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setGuildhuntnewslist = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string GuildHuntPlayerInfoList = 8;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.getGuildhuntplayerinfolist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoReq.prototype.setGuildhuntplayerinfolist = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes;
  return proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntTransferGuildHuntInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntViewShowIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntViewShowIdReq}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntViewShowIdReq;
  return proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntViewShowIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntViewShowIdReq}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntViewShowIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntViewShowIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntViewShowIdRes}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntViewShowIdRes;
  return proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntViewShowIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntViewShowIdRes}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntViewShowIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntViewShowIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFightLogReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFightLogReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetFightLogReq;
  return proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFightLogReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFightLogReq}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPositionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFightLogReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 PositionID = 1;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFightLogReq} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogReq.prototype.setPositionid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFightLogRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    fightloginfolistList: jspb.Message.toObjectList(msg.getFightloginfolistList(),
    proto.PbModel.GuildHunt.FightLogInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFightLogRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntGetFightLogRes;
  return proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFightLogRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFightLogRes}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GuildHunt.FightLogInfo;
      reader.readMessage(value,proto.PbModel.GuildHunt.FightLogInfo.deserializeBinaryFromReader);
      msg.addFightloginfolist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntGetFightLogRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFightloginfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GuildHunt.FightLogInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FightLogInfo FightLogInfoList = 1;
 * @return {!Array<!proto.PbModel.GuildHunt.FightLogInfo>}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.prototype.getFightloginfolistList = function() {
  return /** @type{!Array<!proto.PbModel.GuildHunt.FightLogInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GuildHunt.FightLogInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.GuildHunt.FightLogInfo>} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFightLogRes} returns this
*/
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.prototype.setFightloginfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GuildHunt.FightLogInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GuildHunt.FightLogInfo}
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.prototype.addFightloginfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GuildHunt.FightLogInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GuildHunt.GuildHuntGetFightLogRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntGetFightLogRes.prototype.clearFightloginfolistList = function() {
  return this.setFightloginfolistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.FightLogInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.FightLogInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.FightLogInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    guildfashionheadinfo: (f = msg.getGuildfashionheadinfo()) && Guild_pb.GuildFashionHeadInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.FightLogInfo}
 */
proto.PbModel.GuildHunt.FightLogInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.FightLogInfo;
  return proto.PbModel.GuildHunt.FightLogInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.FightLogInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.FightLogInfo}
 */
proto.PbModel.GuildHunt.FightLogInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatetime(value);
      break;
    case 5:
      var value = new Guild_pb.GuildFashionHeadInfo;
      reader.readMessage(value,Guild_pb.GuildFashionHeadInfo.deserializeBinaryFromReader);
      msg.setGuildfashionheadinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.FightLogInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.FightLogInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.FightLogInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getGuildfashionheadinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      Guild_pb.GuildFashionHeadInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.FightLogInfo} returns this
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PlayerId = 2;
 * @return {string}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.FightLogInfo} returns this
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Message = 3;
 * @return {string}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.FightLogInfo} returns this
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 CreateTime = 4;
 * @return {number}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.FightLogInfo} returns this
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional PbModel.Guild.GuildFashionHeadInfo GuildFashionHeadInfo = 5;
 * @return {?proto.PbModel.Guild.GuildFashionHeadInfo}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.getGuildfashionheadinfo = function() {
  return /** @type{?proto.PbModel.Guild.GuildFashionHeadInfo} */ (
    jspb.Message.getWrapperField(this, Guild_pb.GuildFashionHeadInfo, 5));
};


/**
 * @param {?proto.PbModel.Guild.GuildFashionHeadInfo|undefined} value
 * @return {!proto.PbModel.GuildHunt.FightLogInfo} returns this
*/
proto.PbModel.GuildHunt.FightLogInfo.prototype.setGuildfashionheadinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.GuildHunt.FightLogInfo} returns this
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.clearGuildfashionheadinfo = function() {
  return this.setGuildfashionheadinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.GuildHunt.FightLogInfo.prototype.hasGuildfashionheadinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    huntshowid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes}
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes;
  return proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes}
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHuntshowid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHuntshowid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string GuildId = 1;
 * @return {string}
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 HuntShowId = 2;
 * @return {number}
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.prototype.getHuntshowid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes} returns this
 */
proto.PbModel.GuildHunt.GuildHuntPushGuildHuntShowRes.prototype.setHuntshowid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.PbModel.GuildHunt);
