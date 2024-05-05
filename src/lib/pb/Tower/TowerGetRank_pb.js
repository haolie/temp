// source: Tower/TowerGetRank.proto
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

var Tower_Tower_pb = require('../Tower/Tower_pb.js');
goog.object.extend(proto, Tower_Tower_pb);
goog.exportSymbol('proto.PbModel.Tower.TowerGetRankReq', null, global);
goog.exportSymbol('proto.PbModel.Tower.TowerGetRankRes', null, global);
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
proto.PbModel.Tower.TowerGetRankReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Tower.TowerGetRankReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Tower.TowerGetRankReq.displayName = 'proto.PbModel.Tower.TowerGetRankReq';
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
proto.PbModel.Tower.TowerGetRankRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Tower.TowerGetRankRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Tower.TowerGetRankRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Tower.TowerGetRankRes.displayName = 'proto.PbModel.Tower.TowerGetRankRes';
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
proto.PbModel.Tower.TowerGetRankReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Tower.TowerGetRankReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Tower.TowerGetRankReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerGetRankReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.PbModel.Tower.TowerGetRankReq}
 */
proto.PbModel.Tower.TowerGetRankReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Tower.TowerGetRankReq;
  return proto.PbModel.Tower.TowerGetRankReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Tower.TowerGetRankReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Tower.TowerGetRankReq}
 */
proto.PbModel.Tower.TowerGetRankReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
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
proto.PbModel.Tower.TowerGetRankReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Tower.TowerGetRankReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Tower.TowerGetRankReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerGetRankReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.Tower.TowerGetRankReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Tower.TowerGetRankReq} returns this
 */
proto.PbModel.Tower.TowerGetRankReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Tower.TowerGetRankRes.repeatedFields_ = [1];



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
proto.PbModel.Tower.TowerGetRankRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Tower.TowerGetRankRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Tower.TowerGetRankRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerGetRankRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ranklistList: jspb.Message.toObjectList(msg.getRanklistList(),
    Tower_Tower_pb.RankInfo.toObject, includeInstance),
    myrank: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nodeid: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.PbModel.Tower.TowerGetRankRes}
 */
proto.PbModel.Tower.TowerGetRankRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Tower.TowerGetRankRes;
  return proto.PbModel.Tower.TowerGetRankRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Tower.TowerGetRankRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Tower.TowerGetRankRes}
 */
proto.PbModel.Tower.TowerGetRankRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Tower_Tower_pb.RankInfo;
      reader.readMessage(value,Tower_Tower_pb.RankInfo.deserializeBinaryFromReader);
      msg.addRanklist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMyrank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodeid(value);
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
proto.PbModel.Tower.TowerGetRankRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Tower.TowerGetRankRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Tower.TowerGetRankRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerGetRankRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRanklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Tower_Tower_pb.RankInfo.serializeBinaryToWriter
    );
  }
  f = message.getMyrank();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNodeid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated RankInfo RankList = 1;
 * @return {!Array<!proto.PbModel.Tower.RankInfo>}
 */
proto.PbModel.Tower.TowerGetRankRes.prototype.getRanklistList = function() {
  return /** @type{!Array<!proto.PbModel.Tower.RankInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, Tower_Tower_pb.RankInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.Tower.RankInfo>} value
 * @return {!proto.PbModel.Tower.TowerGetRankRes} returns this
*/
proto.PbModel.Tower.TowerGetRankRes.prototype.setRanklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.Tower.RankInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Tower.RankInfo}
 */
proto.PbModel.Tower.TowerGetRankRes.prototype.addRanklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.Tower.RankInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Tower.TowerGetRankRes} returns this
 */
proto.PbModel.Tower.TowerGetRankRes.prototype.clearRanklistList = function() {
  return this.setRanklistList([]);
};


/**
 * optional int32 MyRank = 2;
 * @return {number}
 */
proto.PbModel.Tower.TowerGetRankRes.prototype.getMyrank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Tower.TowerGetRankRes} returns this
 */
proto.PbModel.Tower.TowerGetRankRes.prototype.setMyrank = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 NodeId = 3;
 * @return {number}
 */
proto.PbModel.Tower.TowerGetRankRes.prototype.getNodeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Tower.TowerGetRankRes} returns this
 */
proto.PbModel.Tower.TowerGetRankRes.prototype.setNodeid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.PbModel.Tower);
