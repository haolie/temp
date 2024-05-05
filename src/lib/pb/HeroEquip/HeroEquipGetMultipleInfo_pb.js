// source: HeroEquip/HeroEquipGetMultipleInfo.proto
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

var HeroEquip_HeroEquipPBInfo_pb = require('../HeroEquip/HeroEquipPBInfo_pb.js');
goog.object.extend(proto, HeroEquip_HeroEquipPBInfo_pb);
goog.exportSymbol('proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq', null, global);
goog.exportSymbol('proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes', null, global);
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
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.repeatedFields_, null);
};
goog.inherits(proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.displayName = 'proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq';
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
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.displayName = 'proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.repeatedFields_ = [1];



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
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    heroequipentityidlistList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq}
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq;
  return proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq}
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addHeroequipentityidlist(value);
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
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeroequipentityidlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string HeroEquipEntityIdList = 1;
 * @return {!Array<string>}
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.prototype.getHeroequipentityidlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq} returns this
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.prototype.setHeroequipentityidlistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq} returns this
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.prototype.addHeroequipentityidlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq} returns this
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoReq.prototype.clearHeroequipentityidlistList = function() {
  return this.setHeroequipentityidlistList([]);
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
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    heroequipinfodicMap: (f = msg.getHeroequipinfodicMap()) ? f.toObject(includeInstance, proto.PbModel.HeroEquip.HeroEquipPBInfo.toObject) : []
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
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes}
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes;
  return proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes}
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getHeroequipinfodicMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.PbModel.HeroEquip.HeroEquipPBInfo.deserializeBinaryFromReader, "", new proto.PbModel.HeroEquip.HeroEquipPBInfo());
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
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeroequipinfodicMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.PbModel.HeroEquip.HeroEquipPBInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, HeroEquipPBInfo> HeroEquipInfoDic = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.PbModel.HeroEquip.HeroEquipPBInfo>}
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.prototype.getHeroequipinfodicMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.PbModel.HeroEquip.HeroEquipPBInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.PbModel.HeroEquip.HeroEquipPBInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes} returns this
 */
proto.PbModel.HeroEquip.HeroEquipGetMultipleInfoRes.prototype.clearHeroequipinfodicMap = function() {
  this.getHeroequipinfodicMap().clear();
  return this;};


goog.object.extend(exports, proto.PbModel.HeroEquip);
