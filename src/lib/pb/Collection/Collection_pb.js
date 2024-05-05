// source: Collection/Collection.proto
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

goog.exportSymbol('proto.PbModel.Collection.CollectionInfo', null, global);
goog.exportSymbol('proto.PbModel.Collection.HeroWearCollectionInfo', null, global);
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
proto.PbModel.Collection.CollectionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Collection.CollectionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Collection.CollectionInfo.displayName = 'proto.PbModel.Collection.CollectionInfo';
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
proto.PbModel.Collection.HeroWearCollectionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Collection.HeroWearCollectionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Collection.HeroWearCollectionInfo.displayName = 'proto.PbModel.Collection.HeroWearCollectionInfo';
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
proto.PbModel.Collection.CollectionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Collection.CollectionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Collection.CollectionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.CollectionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stars: jspb.Message.getFieldWithDefault(msg, 3, 0),
    wearheroid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.PbModel.Collection.CollectionInfo}
 */
proto.PbModel.Collection.CollectionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Collection.CollectionInfo;
  return proto.PbModel.Collection.CollectionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Collection.CollectionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Collection.CollectionInfo}
 */
proto.PbModel.Collection.CollectionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModelid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStars(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWearheroid(value);
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
proto.PbModel.Collection.CollectionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Collection.CollectionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Collection.CollectionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.CollectionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStars();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWearheroid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string CollectionId = 1;
 * @return {string}
 */
proto.PbModel.Collection.CollectionInfo.prototype.getCollectionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Collection.CollectionInfo} returns this
 */
proto.PbModel.Collection.CollectionInfo.prototype.setCollectionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 ModelId = 2;
 * @return {number}
 */
proto.PbModel.Collection.CollectionInfo.prototype.getModelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Collection.CollectionInfo} returns this
 */
proto.PbModel.Collection.CollectionInfo.prototype.setModelid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Stars = 3;
 * @return {number}
 */
proto.PbModel.Collection.CollectionInfo.prototype.getStars = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Collection.CollectionInfo} returns this
 */
proto.PbModel.Collection.CollectionInfo.prototype.setStars = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string WearHeroId = 4;
 * @return {string}
 */
proto.PbModel.Collection.CollectionInfo.prototype.getWearheroid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Collection.CollectionInfo} returns this
 */
proto.PbModel.Collection.CollectionInfo.prototype.setWearheroid = function(value) {
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
proto.PbModel.Collection.HeroWearCollectionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Collection.HeroWearCollectionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Collection.HeroWearCollectionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.HeroWearCollectionInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.PbModel.Collection.HeroWearCollectionInfo}
 */
proto.PbModel.Collection.HeroWearCollectionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Collection.HeroWearCollectionInfo;
  return proto.PbModel.Collection.HeroWearCollectionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Collection.HeroWearCollectionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Collection.HeroWearCollectionInfo}
 */
proto.PbModel.Collection.HeroWearCollectionInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.PbModel.Collection.HeroWearCollectionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Collection.HeroWearCollectionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Collection.HeroWearCollectionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Collection.HeroWearCollectionInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.PbModel.Collection.HeroWearCollectionInfo.prototype.getHeroid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Collection.HeroWearCollectionInfo} returns this
 */
proto.PbModel.Collection.HeroWearCollectionInfo.prototype.setHeroid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CollectionId = 2;
 * @return {string}
 */
proto.PbModel.Collection.HeroWearCollectionInfo.prototype.getCollectionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Collection.HeroWearCollectionInfo} returns this
 */
proto.PbModel.Collection.HeroWearCollectionInfo.prototype.setCollectionid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.PbModel.Collection);
