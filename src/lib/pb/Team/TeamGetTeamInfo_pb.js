// source: Team/TeamGetTeamInfo.proto
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

var Team_TeamModel_pb = require('../Team/TeamModel_pb.js');
goog.object.extend(proto, Team_TeamModel_pb);
goog.exportSymbol('proto.PbModel.Team.TeamGetTeamInfoReq', null, global);
goog.exportSymbol('proto.PbModel.Team.TeamGetTeamInfoRes', null, global);
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
proto.PbModel.Team.TeamGetTeamInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Team.TeamGetTeamInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Team.TeamGetTeamInfoReq.displayName = 'proto.PbModel.Team.TeamGetTeamInfoReq';
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
proto.PbModel.Team.TeamGetTeamInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Team.TeamGetTeamInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Team.TeamGetTeamInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Team.TeamGetTeamInfoRes.displayName = 'proto.PbModel.Team.TeamGetTeamInfoRes';
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
proto.PbModel.Team.TeamGetTeamInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Team.TeamGetTeamInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Team.TeamGetTeamInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Team.TeamGetTeamInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    submoduleid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.PbModel.Team.TeamGetTeamInfoReq}
 */
proto.PbModel.Team.TeamGetTeamInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Team.TeamGetTeamInfoReq;
  return proto.PbModel.Team.TeamGetTeamInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Team.TeamGetTeamInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Team.TeamGetTeamInfoReq}
 */
proto.PbModel.Team.TeamGetTeamInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubmoduleid(value);
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
proto.PbModel.Team.TeamGetTeamInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Team.TeamGetTeamInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Team.TeamGetTeamInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Team.TeamGetTeamInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubmoduleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 SubModuleId = 1;
 * @return {number}
 */
proto.PbModel.Team.TeamGetTeamInfoReq.prototype.getSubmoduleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Team.TeamGetTeamInfoReq} returns this
 */
proto.PbModel.Team.TeamGetTeamInfoReq.prototype.setSubmoduleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Team.TeamGetTeamInfoRes.repeatedFields_ = [1];



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
proto.PbModel.Team.TeamGetTeamInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Team.TeamGetTeamInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Team.TeamGetTeamInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Team.TeamGetTeamInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamlistList: jspb.Message.toObjectList(msg.getTeamlistList(),
    Team_TeamModel_pb.Team.toObject, includeInstance)
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
 * @return {!proto.PbModel.Team.TeamGetTeamInfoRes}
 */
proto.PbModel.Team.TeamGetTeamInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Team.TeamGetTeamInfoRes;
  return proto.PbModel.Team.TeamGetTeamInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Team.TeamGetTeamInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Team.TeamGetTeamInfoRes}
 */
proto.PbModel.Team.TeamGetTeamInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Team_TeamModel_pb.Team;
      reader.readMessage(value,Team_TeamModel_pb.Team.deserializeBinaryFromReader);
      msg.addTeamlist(value);
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
proto.PbModel.Team.TeamGetTeamInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Team.TeamGetTeamInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Team.TeamGetTeamInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Team.TeamGetTeamInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Team_TeamModel_pb.Team.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Team TeamList = 1;
 * @return {!Array<!proto.PbModel.Team.Team>}
 */
proto.PbModel.Team.TeamGetTeamInfoRes.prototype.getTeamlistList = function() {
  return /** @type{!Array<!proto.PbModel.Team.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, Team_TeamModel_pb.Team, 1));
};


/**
 * @param {!Array<!proto.PbModel.Team.Team>} value
 * @return {!proto.PbModel.Team.TeamGetTeamInfoRes} returns this
*/
proto.PbModel.Team.TeamGetTeamInfoRes.prototype.setTeamlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.Team.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Team.Team}
 */
proto.PbModel.Team.TeamGetTeamInfoRes.prototype.addTeamlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.Team.Team, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Team.TeamGetTeamInfoRes} returns this
 */
proto.PbModel.Team.TeamGetTeamInfoRes.prototype.clearTeamlistList = function() {
  return this.setTeamlistList([]);
};


goog.object.extend(exports, proto.PbModel.Team);
