// source: Tower/TowerTestJumpNodeId.proto
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
goog.exportSymbol('proto.PbModel.Tower.TowerTestJumpNodeIdReq', null, global);
goog.exportSymbol('proto.PbModel.Tower.TowerTestJumpNodeIdRes', null, global);
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
proto.PbModel.Tower.TowerTestJumpNodeIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Tower.TowerTestJumpNodeIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Tower.TowerTestJumpNodeIdReq.displayName = 'proto.PbModel.Tower.TowerTestJumpNodeIdReq';
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
proto.PbModel.Tower.TowerTestJumpNodeIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Tower.TowerTestJumpNodeIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Tower.TowerTestJumpNodeIdRes.displayName = 'proto.PbModel.Tower.TowerTestJumpNodeIdRes';
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
proto.PbModel.Tower.TowerTestJumpNodeIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Tower.TowerTestJumpNodeIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Tower.TowerTestJumpNodeIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerTestJumpNodeIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    neednodeid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.PbModel.Tower.TowerTestJumpNodeIdReq}
 */
proto.PbModel.Tower.TowerTestJumpNodeIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Tower.TowerTestJumpNodeIdReq;
  return proto.PbModel.Tower.TowerTestJumpNodeIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Tower.TowerTestJumpNodeIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Tower.TowerTestJumpNodeIdReq}
 */
proto.PbModel.Tower.TowerTestJumpNodeIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNeednodeid(value);
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
proto.PbModel.Tower.TowerTestJumpNodeIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Tower.TowerTestJumpNodeIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Tower.TowerTestJumpNodeIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerTestJumpNodeIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeednodeid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 NeedNodeId = 1;
 * @return {number}
 */
proto.PbModel.Tower.TowerTestJumpNodeIdReq.prototype.getNeednodeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Tower.TowerTestJumpNodeIdReq} returns this
 */
proto.PbModel.Tower.TowerTestJumpNodeIdReq.prototype.setNeednodeid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.PbModel.Tower.TowerTestJumpNodeIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Tower.TowerTestJumpNodeIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Tower.TowerTestJumpNodeIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerTestJumpNodeIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    towerinfo: (f = msg.getTowerinfo()) && Tower_Tower_pb.TowerObj.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.Tower.TowerTestJumpNodeIdRes}
 */
proto.PbModel.Tower.TowerTestJumpNodeIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Tower.TowerTestJumpNodeIdRes;
  return proto.PbModel.Tower.TowerTestJumpNodeIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Tower.TowerTestJumpNodeIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Tower.TowerTestJumpNodeIdRes}
 */
proto.PbModel.Tower.TowerTestJumpNodeIdRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Tower.TowerTestJumpNodeIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Tower.TowerTestJumpNodeIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Tower.TowerTestJumpNodeIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Tower.TowerTestJumpNodeIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTowerinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Tower_Tower_pb.TowerObj.serializeBinaryToWriter
    );
  }
};


/**
 * optional TowerObj TowerInfo = 1;
 * @return {?proto.PbModel.Tower.TowerObj}
 */
proto.PbModel.Tower.TowerTestJumpNodeIdRes.prototype.getTowerinfo = function() {
  return /** @type{?proto.PbModel.Tower.TowerObj} */ (
    jspb.Message.getWrapperField(this, Tower_Tower_pb.TowerObj, 1));
};


/**
 * @param {?proto.PbModel.Tower.TowerObj|undefined} value
 * @return {!proto.PbModel.Tower.TowerTestJumpNodeIdRes} returns this
*/
proto.PbModel.Tower.TowerTestJumpNodeIdRes.prototype.setTowerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Tower.TowerTestJumpNodeIdRes} returns this
 */
proto.PbModel.Tower.TowerTestJumpNodeIdRes.prototype.clearTowerinfo = function() {
  return this.setTowerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Tower.TowerTestJumpNodeIdRes.prototype.hasTowerinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.PbModel.Tower);
