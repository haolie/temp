// source: PlayerEquip/PlayerEquipWearGetInfo.proto
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

var PlayerEquip_PlayerEquipModel_pb = require('../PlayerEquip/PlayerEquipModel_pb.js');
goog.object.extend(proto, PlayerEquip_PlayerEquipModel_pb);
goog.exportSymbol('proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq', null, global);
goog.exportSymbol('proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes', null, global);
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
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.displayName = 'proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq';
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
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.displayName = 'proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes';
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
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq}
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq;
  return proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq}
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoReq.serializeBinaryToWriter = function(message, writer) {
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
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    wearinfo: (f = msg.getWearinfo()) && PlayerEquip_PlayerEquipModel_pb.PlayerEquipInfo.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes}
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes;
  return proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes}
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new PlayerEquip_PlayerEquipModel_pb.PlayerEquipInfo;
      reader.readMessage(value,PlayerEquip_PlayerEquipModel_pb.PlayerEquipInfo.deserializeBinaryFromReader);
      msg.setWearinfo(value);
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
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWearinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      PlayerEquip_PlayerEquipModel_pb.PlayerEquipInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayerEquipInfo WearInfo = 1;
 * @return {?proto.PbModel.PlayerEquip.PlayerEquipInfo}
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.prototype.getWearinfo = function() {
  return /** @type{?proto.PbModel.PlayerEquip.PlayerEquipInfo} */ (
    jspb.Message.getWrapperField(this, PlayerEquip_PlayerEquipModel_pb.PlayerEquipInfo, 1));
};


/**
 * @param {?proto.PbModel.PlayerEquip.PlayerEquipInfo|undefined} value
 * @return {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes} returns this
*/
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.prototype.setWearinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes} returns this
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.prototype.clearWearinfo = function() {
  return this.setWearinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.PlayerEquip.PlayerEquipWearGetInfoRes.prototype.hasWearinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.PbModel.PlayerEquip);