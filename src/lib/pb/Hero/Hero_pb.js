// source: Hero/Hero.proto
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

goog.exportSymbol('proto.PbModel.Hero.HeroBaseInfo', null, global);
goog.exportSymbol('proto.PbModel.Hero.HeroHandBookInfo', null, global);
goog.exportSymbol('proto.PbModel.Hero.HeroInfo', null, global);
goog.exportSymbol('proto.PbModel.Hero.HeroMainForceInfo', null, global);
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
proto.PbModel.Hero.HeroInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Hero.HeroInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Hero.HeroInfo.displayName = 'proto.PbModel.Hero.HeroInfo';
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
proto.PbModel.Hero.HeroBaseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Hero.HeroBaseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Hero.HeroBaseInfo.displayName = 'proto.PbModel.Hero.HeroBaseInfo';
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
proto.PbModel.Hero.HeroMainForceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Hero.HeroMainForceInfo.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Hero.HeroMainForceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Hero.HeroMainForceInfo.displayName = 'proto.PbModel.Hero.HeroMainForceInfo';
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
proto.PbModel.Hero.HeroHandBookInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Hero.HeroHandBookInfo.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Hero.HeroHandBookInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Hero.HeroHandBookInfo.displayName = 'proto.PbModel.Hero.HeroHandBookInfo';
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
proto.PbModel.Hero.HeroInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Hero.HeroInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Hero.HeroInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    heroid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stars: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxstars: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lv: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxlv: jspb.Message.getFieldWithDefault(msg, 6, 0),
    fashionid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ifawakening: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    fap: jspb.Message.getFieldWithDefault(msg, 9, 0),
    attrcontent: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.PbModel.Hero.HeroInfo}
 */
proto.PbModel.Hero.HeroInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Hero.HeroInfo;
  return proto.PbModel.Hero.HeroInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Hero.HeroInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Hero.HeroInfo}
 */
proto.PbModel.Hero.HeroInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModelid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStars(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxstars(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLv(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxlv(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFashionid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfawakening(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFap(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttrcontent(value);
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
proto.PbModel.Hero.HeroInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Hero.HeroInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Hero.HeroInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeroid();
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
  f = message.getMaxstars();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLv();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMaxlv();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFashionid();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getIfawakening();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getFap();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getAttrcontent();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string HeroId = 1;
 * @return {string}
 */
proto.PbModel.Hero.HeroInfo.prototype.getHeroid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setHeroid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 ModelId = 2;
 * @return {number}
 */
proto.PbModel.Hero.HeroInfo.prototype.getModelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setModelid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Stars = 3;
 * @return {number}
 */
proto.PbModel.Hero.HeroInfo.prototype.getStars = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setStars = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 MaxStars = 4;
 * @return {number}
 */
proto.PbModel.Hero.HeroInfo.prototype.getMaxstars = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setMaxstars = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 Lv = 5;
 * @return {number}
 */
proto.PbModel.Hero.HeroInfo.prototype.getLv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setLv = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 MaxLv = 6;
 * @return {number}
 */
proto.PbModel.Hero.HeroInfo.prototype.getMaxlv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setMaxlv = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 FashionId = 7;
 * @return {number}
 */
proto.PbModel.Hero.HeroInfo.prototype.getFashionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setFashionid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool IfAwakening = 8;
 * @return {boolean}
 */
proto.PbModel.Hero.HeroInfo.prototype.getIfawakening = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setIfawakening = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int64 Fap = 9;
 * @return {number}
 */
proto.PbModel.Hero.HeroInfo.prototype.getFap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setFap = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string AttrContent = 10;
 * @return {string}
 */
proto.PbModel.Hero.HeroInfo.prototype.getAttrcontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Hero.HeroInfo} returns this
 */
proto.PbModel.Hero.HeroInfo.prototype.setAttrcontent = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.PbModel.Hero.HeroBaseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Hero.HeroBaseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Hero.HeroBaseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroBaseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    baglv: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reborncount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    autodecomposehero: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    addrholdheronum: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.PbModel.Hero.HeroBaseInfo}
 */
proto.PbModel.Hero.HeroBaseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Hero.HeroBaseInfo;
  return proto.PbModel.Hero.HeroBaseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Hero.HeroBaseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Hero.HeroBaseInfo}
 */
proto.PbModel.Hero.HeroBaseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaglv(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReborncount(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutodecomposehero(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAddrholdheronum(value);
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
proto.PbModel.Hero.HeroBaseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Hero.HeroBaseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Hero.HeroBaseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroBaseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaglv();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getReborncount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAutodecomposehero();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAddrholdheronum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 BagLv = 1;
 * @return {number}
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.getBaglv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroBaseInfo} returns this
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.setBaglv = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 RebornCount = 2;
 * @return {number}
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.getReborncount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroBaseInfo} returns this
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.setReborncount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool AutoDecomposeHero = 3;
 * @return {boolean}
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.getAutodecomposehero = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Hero.HeroBaseInfo} returns this
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.setAutodecomposehero = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 AddrHoldHeroNum = 4;
 * @return {number}
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.getAddrholdheronum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroBaseInfo} returns this
 */
proto.PbModel.Hero.HeroBaseInfo.prototype.setAddrholdheronum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Hero.HeroMainForceInfo.repeatedFields_ = [1];



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
proto.PbModel.Hero.HeroMainForceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Hero.HeroMainForceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Hero.HeroMainForceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroMainForceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    heroidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    minlv: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.PbModel.Hero.HeroMainForceInfo}
 */
proto.PbModel.Hero.HeroMainForceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Hero.HeroMainForceInfo;
  return proto.PbModel.Hero.HeroMainForceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Hero.HeroMainForceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Hero.HeroMainForceInfo}
 */
proto.PbModel.Hero.HeroMainForceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addHeroids(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinlv(value);
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
proto.PbModel.Hero.HeroMainForceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Hero.HeroMainForceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Hero.HeroMainForceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroMainForceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeroidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getMinlv();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated string HeroIds = 1;
 * @return {!Array<string>}
 */
proto.PbModel.Hero.HeroMainForceInfo.prototype.getHeroidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PbModel.Hero.HeroMainForceInfo} returns this
 */
proto.PbModel.Hero.HeroMainForceInfo.prototype.setHeroidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Hero.HeroMainForceInfo} returns this
 */
proto.PbModel.Hero.HeroMainForceInfo.prototype.addHeroids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Hero.HeroMainForceInfo} returns this
 */
proto.PbModel.Hero.HeroMainForceInfo.prototype.clearHeroidsList = function() {
  return this.setHeroidsList([]);
};


/**
 * optional int32 MinLv = 2;
 * @return {number}
 */
proto.PbModel.Hero.HeroMainForceInfo.prototype.getMinlv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Hero.HeroMainForceInfo} returns this
 */
proto.PbModel.Hero.HeroMainForceInfo.prototype.setMinlv = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Hero.HeroHandBookInfo.repeatedFields_ = [1];



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
proto.PbModel.Hero.HeroHandBookInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Hero.HeroHandBookInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Hero.HeroHandBookInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroHandBookInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.PbModel.Hero.HeroHandBookInfo}
 */
proto.PbModel.Hero.HeroHandBookInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Hero.HeroHandBookInfo;
  return proto.PbModel.Hero.HeroHandBookInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Hero.HeroHandBookInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Hero.HeroHandBookInfo}
 */
proto.PbModel.Hero.HeroHandBookInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setModelidsList(value);
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
proto.PbModel.Hero.HeroHandBookInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Hero.HeroHandBookInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Hero.HeroHandBookInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Hero.HeroHandBookInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelidsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 ModelIds = 1;
 * @return {!Array<number>}
 */
proto.PbModel.Hero.HeroHandBookInfo.prototype.getModelidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.PbModel.Hero.HeroHandBookInfo} returns this
 */
proto.PbModel.Hero.HeroHandBookInfo.prototype.setModelidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Hero.HeroHandBookInfo} returns this
 */
proto.PbModel.Hero.HeroHandBookInfo.prototype.addModelids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Hero.HeroHandBookInfo} returns this
 */
proto.PbModel.Hero.HeroHandBookInfo.prototype.clearModelidsList = function() {
  return this.setModelidsList([]);
};


goog.object.extend(exports, proto.PbModel.Hero);
