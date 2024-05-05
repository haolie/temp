// source: Collection/HeroTakeOffCollection.proto
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

var Collection_Collection_pb = require('../Collection/Collection_pb.js');
goog.object.extend(proto, Collection_Collection_pb);
goog.exportSymbol('proto.PbModel.Collection.HeroTakeOffCollectionReq', null, global);
goog.exportSymbol('proto.PbModel.Collection.HeroTakeOffCollectionRes', null, global);
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
proto.PbModel.Collection.HeroTakeOffCollectionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Collection.HeroTakeOffCollectionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Collection.HeroTakeOffCollectionReq.displayName = 'proto.PbModel.Collection.HeroTakeOffCollectionReq';
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
proto.PbModel.Collection.HeroTakeOffCollectionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Collection.HeroTakeOffCollectionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Collection.HeroTakeOffCollectionRes.displayName = 'proto.PbModel.Collection.HeroTakeOffCollectionRes';
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
proto.PbModel.Collection.HeroTakeOffCollectionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Collection.HeroTakeOffCollectionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Collection.HeroTakeOffCollectionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    heroid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    collectionid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionReq}
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Collection.HeroTakeOffCollectionReq;
  return proto.PbModel.Collection.HeroTakeOffCollectionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Collection.HeroTakeOffCollectionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionReq}
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeroid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionid(value);
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
proto.PbModel.Collection.HeroTakeOffCollectionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Collection.HeroTakeOffCollectionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Collection.HeroTakeOffCollectionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeroid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCollectionid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string HeroId = 1;
 * @return {string}
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.prototype.getHeroid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionReq} returns this
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.prototype.setHeroid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CollectionId = 2;
 * @return {string}
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.prototype.getCollectionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionReq} returns this
 */
proto.PbModel.Collection.HeroTakeOffCollectionReq.prototype.setCollectionid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.PbModel.Collection.HeroTakeOffCollectionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Collection.HeroTakeOffCollectionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Collection.HeroTakeOffCollectionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.HeroTakeOffCollectionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && Collection_Collection_pb.HeroWearCollectionInfo.toObject(includeInstance, f)
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
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionRes}
 */
proto.PbModel.Collection.HeroTakeOffCollectionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Collection.HeroTakeOffCollectionRes;
  return proto.PbModel.Collection.HeroTakeOffCollectionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Collection.HeroTakeOffCollectionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionRes}
 */
proto.PbModel.Collection.HeroTakeOffCollectionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Collection_Collection_pb.HeroWearCollectionInfo;
      reader.readMessage(value,Collection_Collection_pb.HeroWearCollectionInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
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
proto.PbModel.Collection.HeroTakeOffCollectionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Collection.HeroTakeOffCollectionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Collection.HeroTakeOffCollectionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.HeroTakeOffCollectionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Collection_Collection_pb.HeroWearCollectionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional HeroWearCollectionInfo Info = 1;
 * @return {?proto.PbModel.Collection.HeroWearCollectionInfo}
 */
proto.PbModel.Collection.HeroTakeOffCollectionRes.prototype.getInfo = function() {
  return /** @type{?proto.PbModel.Collection.HeroWearCollectionInfo} */ (
    jspb.Message.getWrapperField(this, Collection_Collection_pb.HeroWearCollectionInfo, 1));
};


/**
 * @param {?proto.PbModel.Collection.HeroWearCollectionInfo|undefined} value
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionRes} returns this
*/
proto.PbModel.Collection.HeroTakeOffCollectionRes.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PbModel.Collection.HeroTakeOffCollectionRes} returns this
 */
proto.PbModel.Collection.HeroTakeOffCollectionRes.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PbModel.Collection.HeroTakeOffCollectionRes.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.PbModel.Collection);
