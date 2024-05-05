// source: GVGCenter/GVGCenterPlayerRank.proto
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

goog.exportSymbol('proto.PbModel.GvGCenter.GetPlayerRankReq', null, global);
goog.exportSymbol('proto.PbModel.GvGCenter.GetPlayerRankRes', null, global);
goog.exportSymbol('proto.PbModel.GvGCenter.GetSelfPlayerRankReq', null, global);
goog.exportSymbol('proto.PbModel.GvGCenter.PlayerRankItem', null, global);
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
proto.PbModel.GvGCenter.GetPlayerRankReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGCenter.GetPlayerRankReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGCenter.GetPlayerRankReq.displayName = 'proto.PbModel.GvGCenter.GetPlayerRankReq';
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
proto.PbModel.GvGCenter.GetPlayerRankRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGCenter.GetPlayerRankRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGCenter.GetPlayerRankRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGCenter.GetPlayerRankRes.displayName = 'proto.PbModel.GvGCenter.GetPlayerRankRes';
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
proto.PbModel.GvGCenter.GetSelfPlayerRankReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGCenter.GetSelfPlayerRankReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGCenter.GetSelfPlayerRankReq.displayName = 'proto.PbModel.GvGCenter.GetSelfPlayerRankReq';
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
proto.PbModel.GvGCenter.PlayerRankItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGCenter.PlayerRankItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGCenter.PlayerRankItem.displayName = 'proto.PbModel.GvGCenter.PlayerRankItem';
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
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGCenter.GetPlayerRankReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGCenter.GetPlayerRankReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    servergroupid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    zoneid: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankReq}
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGCenter.GetPlayerRankReq;
  return proto.PbModel.GvGCenter.GetPlayerRankReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGCenter.GetPlayerRankReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankReq}
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServergroupid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneid(value);
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
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGCenter.GetPlayerRankReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGCenter.GetPlayerRankReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServergroupid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getZoneid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankReq} returns this
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 ServerGroupId = 2;
 * @return {number}
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.getServergroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankReq} returns this
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.setServergroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ZoneId = 3;
 * @return {string}
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.getZoneid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankReq} returns this
 */
proto.PbModel.GvGCenter.GetPlayerRankReq.prototype.setZoneid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.repeatedFields_ = [1];



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
proto.PbModel.GvGCenter.GetPlayerRankRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGCenter.GetPlayerRankRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGCenter.GetPlayerRankRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ranklistList: jspb.Message.toObjectList(msg.getRanklistList(),
    proto.PbModel.GvGCenter.PlayerRankItem.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankRes}
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGCenter.GetPlayerRankRes;
  return proto.PbModel.GvGCenter.GetPlayerRankRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGCenter.GetPlayerRankRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankRes}
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GvGCenter.PlayerRankItem;
      reader.readMessage(value,proto.PbModel.GvGCenter.PlayerRankItem.deserializeBinaryFromReader);
      msg.addRanklist(value);
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
proto.PbModel.GvGCenter.GetPlayerRankRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGCenter.GetPlayerRankRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGCenter.GetPlayerRankRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRanklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GvGCenter.PlayerRankItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PlayerRankItem RankList = 1;
 * @return {!Array<!proto.PbModel.GvGCenter.PlayerRankItem>}
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.prototype.getRanklistList = function() {
  return /** @type{!Array<!proto.PbModel.GvGCenter.PlayerRankItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GvGCenter.PlayerRankItem, 1));
};


/**
 * @param {!Array<!proto.PbModel.GvGCenter.PlayerRankItem>} value
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankRes} returns this
*/
proto.PbModel.GvGCenter.GetPlayerRankRes.prototype.setRanklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GvGCenter.PlayerRankItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem}
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.prototype.addRanklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GvGCenter.PlayerRankItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGCenter.GetPlayerRankRes} returns this
 */
proto.PbModel.GvGCenter.GetPlayerRankRes.prototype.clearRanklistList = function() {
  return this.setRanklistList([]);
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
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGCenter.GetSelfPlayerRankReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGCenter.GetSelfPlayerRankReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    servergroupid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.PbModel.GvGCenter.GetSelfPlayerRankReq}
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGCenter.GetSelfPlayerRankReq;
  return proto.PbModel.GvGCenter.GetSelfPlayerRankReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGCenter.GetSelfPlayerRankReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGCenter.GetSelfPlayerRankReq}
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServergroupid(value);
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
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGCenter.GetSelfPlayerRankReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGCenter.GetSelfPlayerRankReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServergroupid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.GetSelfPlayerRankReq} returns this
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 ServerGroupId = 2;
 * @return {number}
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.prototype.getServergroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGCenter.GetSelfPlayerRankReq} returns this
 */
proto.PbModel.GvGCenter.GetSelfPlayerRankReq.prototype.setServergroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.PbModel.GvGCenter.PlayerRankItem.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGCenter.PlayerRankItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGCenter.PlayerRankItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.PlayerRankItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    seasonscore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    killnum: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 5, 0),
    guildname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    guildmanornum: jspb.Message.getFieldWithDefault(msg, 7, 0),
    clientplayerstr: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bannerinfo: jspb.Message.getFieldWithDefault(msg, 9, ""),
    logo: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updatetime: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem}
 */
proto.PbModel.GvGCenter.PlayerRankItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGCenter.PlayerRankItem;
  return proto.PbModel.GvGCenter.PlayerRankItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGCenter.PlayerRankItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem}
 */
proto.PbModel.GvGCenter.PlayerRankItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayername(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeasonscore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKillnum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildname(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGuildmanornum(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientplayerstr(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBannerinfo(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogo(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatetime(value);
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
proto.PbModel.GvGCenter.PlayerRankItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGCenter.PlayerRankItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGCenter.PlayerRankItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGCenter.PlayerRankItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeasonscore();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getKillnum();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getGuildname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGuildmanornum();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getClientplayerstr();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBannerinfo();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLogo();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdatetime();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PlayerName = 2;
 * @return {string}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getPlayername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setPlayername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 SeasonScore = 3;
 * @return {number}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getSeasonscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setSeasonscore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 KillNum = 4;
 * @return {number}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getKillnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setKillnum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 Rank = 5;
 * @return {number}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string GuildName = 6;
 * @return {string}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getGuildname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setGuildname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 GuildManorNum = 7;
 * @return {number}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getGuildmanornum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setGuildmanornum = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string ClientPlayerStr = 8;
 * @return {string}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getClientplayerstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setClientplayerstr = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string BannerInfo = 9;
 * @return {string}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getBannerinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setBannerinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Logo = 10;
 * @return {string}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setLogo = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 UpdateTime = 11;
 * @return {number}
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.getUpdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGCenter.PlayerRankItem} returns this
 */
proto.PbModel.GvGCenter.PlayerRankItem.prototype.setUpdatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


goog.object.extend(exports, proto.PbModel.GvGCenter);