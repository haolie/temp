// source: Expedition/ExpeditionGetNpcStatusInfo.proto
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

var FightModel_RemainHp_pb = require('../FightModel/RemainHp_pb.js');
goog.object.extend(proto, FightModel_RemainHp_pb);
goog.exportSymbol('proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq', null, global);
goog.exportSymbol('proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes', null, global);
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
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.displayName = 'proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq';
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
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.displayName = 'proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes';
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
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq}
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq;
  return proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq}
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoReq.serializeBinaryToWriter = function(message, writer) {
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
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    infosMap: (f = msg.getInfosMap()) ? f.toObject(includeInstance, proto.PbModel.FightModel.RemainHp.toObject) : []
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
 * @return {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes}
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes;
  return proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes}
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getInfosMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.PbModel.FightModel.RemainHp.deserializeBinaryFromReader, "", new proto.PbModel.FightModel.RemainHp());
         });
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
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfosMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.PbModel.FightModel.RemainHp.serializeBinaryToWriter);
  }
};


/**
 * map<string, PbModel.FightModel.RemainHp> Infos = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.PbModel.FightModel.RemainHp>}
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.prototype.getInfosMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.PbModel.FightModel.RemainHp>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.PbModel.FightModel.RemainHp));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes} returns this
 */
proto.PbModel.Expedition.ExpeditionGetNpcStatusInfoRes.prototype.clearInfosMap = function() {
  this.getInfosMap().clear();
  return this;};


goog.object.extend(exports, proto.PbModel.Expedition);