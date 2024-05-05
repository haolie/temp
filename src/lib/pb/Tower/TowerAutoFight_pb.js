// source: Tower/TowerAutoFight.proto
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

var Resource_ResourceToClientModel_pb = require('../Resource/ResourceToClientModel_pb.js');
goog.object.extend(proto, Resource_ResourceToClientModel_pb);
var Tower_Tower_pb = require('../Tower/Tower_pb.js');
goog.object.extend(proto, Tower_Tower_pb);
goog.exportSymbol('proto.PbModel.Tower.TowerAutoFightReq', null, global);
goog.exportSymbol('proto.PbModel.Tower.TowerAutoFightRes', null, global);
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
proto.PbModel.Tower.TowerAutoFightReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Tower.TowerAutoFightReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Tower.TowerAutoFightReq.displayName = 'proto.PbModel.Tower.TowerAutoFightReq';
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
proto.PbModel.Tower.TowerAutoFightRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Tower.TowerAutoFightRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Tower.TowerAutoFightRes.displayName = 'proto.PbModel.Tower.TowerAutoFightRes';
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
proto.PbModel.Tower.TowerAutoFightReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Tower.TowerAutoFightReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Tower.TowerAutoFightReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerAutoFightReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.Tower.TowerAutoFightReq}
 */
proto.PbModel.Tower.TowerAutoFightReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Tower.TowerAutoFightReq;
  return proto.PbModel.Tower.TowerAutoFightReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Tower.TowerAutoFightReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Tower.TowerAutoFightReq}
 */
proto.PbModel.Tower.TowerAutoFightReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Tower.TowerAutoFightReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Tower.TowerAutoFightReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Tower.TowerAutoFightReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerAutoFightReq.serializeBinaryToWriter = function(message, writer) {
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
proto.PbModel.Tower.TowerAutoFightRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Tower.TowerAutoFightRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Tower.TowerAutoFightRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerAutoFightRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    towerinfo: (f = msg.getTowerinfo()) && Tower_Tower_pb.TowerObj.toObject(includeInstance, f),
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_ResourceToClientModel_pb.ResourceToClientModel.toObject(includeInstance, f),
    fightnoteidstr: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.PbModel.Tower.TowerAutoFightRes}
 */
proto.PbModel.Tower.TowerAutoFightRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Tower.TowerAutoFightRes;
  return proto.PbModel.Tower.TowerAutoFightRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Tower.TowerAutoFightRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Tower.TowerAutoFightRes}
 */
proto.PbModel.Tower.TowerAutoFightRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Tower_Tower_pb.TowerObj;
      reader.readMessage(value,Tower_Tower_pb.TowerObj.deserializeBinaryFromReader);
      msg.setTowerinfo(value);
      break;
    case 2:
      var value = new Resource_ResourceToClientModel_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_ResourceToClientModel_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFightnoteidstr(value);
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
proto.PbModel.Tower.TowerAutoFightRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Tower.TowerAutoFightRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Tower.TowerAutoFightRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerAutoFightRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTowerinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Tower_Tower_pb.TowerObj.serializeBinaryToWriter
    );
  }
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Resource_ResourceToClientModel_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
  f = message.getFightnoteidstr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional TowerObj TowerInfo = 1;
 * @return {?proto.PbModel.Tower.TowerObj}
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.getTowerinfo = function() {
  return /** @type{?proto.PbModel.Tower.TowerObj} */ (
    jspb.Message.getWrapperField(this, Tower_Tower_pb.TowerObj, 1));
};


/**
 * @param {?proto.PbModel.Tower.TowerObj|undefined} value
 * @return {!proto.PbModel.Tower.TowerAutoFightRes} returns this
*/
proto.PbModel.Tower.TowerAutoFightRes.prototype.setTowerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Tower.TowerAutoFightRes} returns this
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.clearTowerinfo = function() {
  return this.setTowerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.hasTowerinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 2;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_ResourceToClientModel_pb.ResourceToClientModel, 2));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.Tower.TowerAutoFightRes} returns this
*/
proto.PbModel.Tower.TowerAutoFightRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Tower.TowerAutoFightRes} returns this
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string FightNoteIdStr = 3;
 * @return {string}
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.getFightnoteidstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Tower.TowerAutoFightRes} returns this
 */
proto.PbModel.Tower.TowerAutoFightRes.prototype.setFightnoteidstr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.PbModel.Tower);
