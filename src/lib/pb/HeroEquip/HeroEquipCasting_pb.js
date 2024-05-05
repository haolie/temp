// source: HeroEquip/HeroEquipCasting.proto
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
goog.exportSymbol('proto.PbModel.HeroEquip.HeroEquipCastingReq', null, global);
goog.exportSymbol('proto.PbModel.HeroEquip.HeroEquipCastingRes', null, global);
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
proto.PbModel.HeroEquip.HeroEquipCastingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.HeroEquip.HeroEquipCastingReq.repeatedFields_, null);
};
goog.inherits(proto.PbModel.HeroEquip.HeroEquipCastingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.HeroEquip.HeroEquipCastingReq.displayName = 'proto.PbModel.HeroEquip.HeroEquipCastingReq';
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
proto.PbModel.HeroEquip.HeroEquipCastingRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.HeroEquip.HeroEquipCastingRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.HeroEquip.HeroEquipCastingRes.displayName = 'proto.PbModel.HeroEquip.HeroEquipCastingRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.repeatedFields_ = [1];



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
proto.PbModel.HeroEquip.HeroEquipCastingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.HeroEquip.HeroEquipCastingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.HeroEquip.HeroEquipCastingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingReq}
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.HeroEquip.HeroEquipCastingReq;
  return proto.PbModel.HeroEquip.HeroEquipCastingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.HeroEquip.HeroEquipCastingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingReq}
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.HeroEquip.HeroEquipCastingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.HeroEquip.HeroEquipCastingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.HeroEquip.HeroEquipCastingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.serializeBinaryToWriter = function(message, writer) {
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
proto.PbModel.HeroEquip.HeroEquipCastingReq.prototype.getHeroequipentityidlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingReq} returns this
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.prototype.setHeroequipentityidlistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingReq} returns this
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.prototype.addHeroequipentityidlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingReq} returns this
 */
proto.PbModel.HeroEquip.HeroEquipCastingReq.prototype.clearHeroequipentityidlistList = function() {
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
proto.PbModel.HeroEquip.HeroEquipCastingRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.HeroEquip.HeroEquipCastingRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.HeroEquip.HeroEquipCastingRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipCastingRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    basegetgameresourcelist: (f = msg.getBasegetgameresourcelist()) && Resource_ResourceToClientModel_pb.ResourceToClientModel.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingRes}
 */
proto.PbModel.HeroEquip.HeroEquipCastingRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.HeroEquip.HeroEquipCastingRes;
  return proto.PbModel.HeroEquip.HeroEquipCastingRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.HeroEquip.HeroEquipCastingRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingRes}
 */
proto.PbModel.HeroEquip.HeroEquipCastingRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Resource_ResourceToClientModel_pb.ResourceToClientModel;
      reader.readMessage(value,Resource_ResourceToClientModel_pb.ResourceToClientModel.deserializeBinaryFromReader);
      msg.setBasegetgameresourcelist(value);
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
proto.PbModel.HeroEquip.HeroEquipCastingRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.HeroEquip.HeroEquipCastingRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.HeroEquip.HeroEquipCastingRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.HeroEquip.HeroEquipCastingRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasegetgameresourcelist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Resource_ResourceToClientModel_pb.ResourceToClientModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional PbModel.Resource.ResourceToClientModel BaseGetGameResourceList = 1;
 * @return {?proto.PbModel.Resource.ResourceToClientModel}
 */
proto.PbModel.HeroEquip.HeroEquipCastingRes.prototype.getBasegetgameresourcelist = function() {
  return /** @type{?proto.PbModel.Resource.ResourceToClientModel} */ (
    jspb.Message.getWrapperField(this, Resource_ResourceToClientModel_pb.ResourceToClientModel, 1));
};


/**
 * @param {?proto.PbModel.Resource.ResourceToClientModel|undefined} value
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingRes} returns this
*/
proto.PbModel.HeroEquip.HeroEquipCastingRes.prototype.setBasegetgameresourcelist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.HeroEquip.HeroEquipCastingRes} returns this
 */
proto.PbModel.HeroEquip.HeroEquipCastingRes.prototype.clearBasegetgameresourcelist = function() {
  return this.setBasegetgameresourcelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.HeroEquip.HeroEquipCastingRes.prototype.hasBasegetgameresourcelist = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.PbModel.HeroEquip);