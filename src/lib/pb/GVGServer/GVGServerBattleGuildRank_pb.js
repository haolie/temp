// source: GVGServer/GVGServerBattleGuildRank.proto
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

goog.exportSymbol('proto.PbModel.GvGServer.BattleGuildRankItem', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GetBattleGuildRankReq', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.GetBattleGuildRankRes', null, global);
goog.exportSymbol('proto.PbModel.GvGServer.RankChange', null, global);
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
proto.PbModel.GvGServer.GetBattleGuildRankReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.GetBattleGuildRankReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetBattleGuildRankReq.displayName = 'proto.PbModel.GvGServer.GetBattleGuildRankReq';
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
proto.PbModel.GvGServer.GetBattleGuildRankRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.GvGServer.GetBattleGuildRankRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.GvGServer.GetBattleGuildRankRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.GetBattleGuildRankRes.displayName = 'proto.PbModel.GvGServer.GetBattleGuildRankRes';
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
proto.PbModel.GvGServer.BattleGuildRankItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.GvGServer.BattleGuildRankItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.GvGServer.BattleGuildRankItem.displayName = 'proto.PbModel.GvGServer.BattleGuildRankItem';
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
proto.PbModel.GvGServer.GetBattleGuildRankReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetBattleGuildRankReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetBattleGuildRankReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    guildid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankReq}
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetBattleGuildRankReq;
  return proto.PbModel.GvGServer.GetBattleGuildRankReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetBattleGuildRankReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankReq}
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setGuildid(value);
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
proto.PbModel.GvGServer.GetBattleGuildRankReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetBattleGuildRankReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetBattleGuildRankReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string PlayerId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.prototype.getPlayerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankReq} returns this
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.prototype.setPlayerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string GuildId = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankReq} returns this
 */
proto.PbModel.GvGServer.GetBattleGuildRankReq.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.repeatedFields_ = [1];



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
proto.PbModel.GvGServer.GetBattleGuildRankRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.GetBattleGuildRankRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.GetBattleGuildRankRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ranklistList: jspb.Message.toObjectList(msg.getRanklistList(),
    proto.PbModel.GvGServer.BattleGuildRankItem.toObject, includeInstance)
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
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankRes}
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.GetBattleGuildRankRes;
  return proto.PbModel.GvGServer.GetBattleGuildRankRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.GetBattleGuildRankRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankRes}
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.GvGServer.BattleGuildRankItem;
      reader.readMessage(value,proto.PbModel.GvGServer.BattleGuildRankItem.deserializeBinaryFromReader);
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
proto.PbModel.GvGServer.GetBattleGuildRankRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.GetBattleGuildRankRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.GetBattleGuildRankRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRanklistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.GvGServer.BattleGuildRankItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BattleGuildRankItem RankList = 1;
 * @return {!Array<!proto.PbModel.GvGServer.BattleGuildRankItem>}
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.prototype.getRanklistList = function() {
  return /** @type{!Array<!proto.PbModel.GvGServer.BattleGuildRankItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.GvGServer.BattleGuildRankItem, 1));
};


/**
 * @param {!Array<!proto.PbModel.GvGServer.BattleGuildRankItem>} value
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankRes} returns this
*/
proto.PbModel.GvGServer.GetBattleGuildRankRes.prototype.setRanklistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.GvGServer.BattleGuildRankItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem}
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.prototype.addRanklist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.GvGServer.BattleGuildRankItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.GvGServer.GetBattleGuildRankRes} returns this
 */
proto.PbModel.GvGServer.GetBattleGuildRankRes.prototype.clearRanklistList = function() {
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
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.GvGServer.BattleGuildRankItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.GvGServer.BattleGuildRankItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.BattleGuildRankItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    guildname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rank: jspb.Message.getFieldWithDefault(msg, 3, 0),
    score: jspb.Message.getFieldWithDefault(msg, 4, 0),
    guildmanornum: jspb.Message.getFieldWithDefault(msg, 5, 0),
    battlenum: jspb.Message.getFieldWithDefault(msg, 6, 0),
    bannerinfo: jspb.Message.getFieldWithDefault(msg, 7, ""),
    logo: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rankscore: jspb.Message.getFieldWithDefault(msg, 9, 0),
    rankchange: jspb.Message.getFieldWithDefault(msg, 10, 0),
    rankid: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.GvGServer.BattleGuildRankItem;
  return proto.PbModel.GvGServer.BattleGuildRankItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.GvGServer.BattleGuildRankItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGuildmanornum(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBattlenum(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBannerinfo(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogo(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankscore(value);
      break;
    case 10:
      var value = /** @type {!proto.PbModel.GvGServer.RankChange} */ (reader.readEnum());
      msg.setRankchange(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankid(value);
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
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.GvGServer.BattleGuildRankItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.GvGServer.BattleGuildRankItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.GvGServer.BattleGuildRankItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGuildname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getGuildmanornum();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getBattlenum();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getBannerinfo();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLogo();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRankscore();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getRankchange();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getRankid();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string GuildId = 1;
 * @return {string}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getGuildid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setGuildid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string GuildName = 2;
 * @return {string}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getGuildname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setGuildname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Rank = 3;
 * @return {number}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 Score = 4;
 * @return {number}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 GuildManorNum = 5;
 * @return {number}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getGuildmanornum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setGuildmanornum = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 BattleNum = 6;
 * @return {number}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getBattlenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setBattlenum = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string BannerInfo = 7;
 * @return {string}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getBannerinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setBannerinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Logo = 8;
 * @return {string}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setLogo = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 RankScore = 9;
 * @return {number}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getRankscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setRankscore = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional RankChange RankChange = 10;
 * @return {!proto.PbModel.GvGServer.RankChange}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getRankchange = function() {
  return /** @type {!proto.PbModel.GvGServer.RankChange} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.PbModel.GvGServer.RankChange} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setRankchange = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional int32 RankId = 11;
 * @return {number}
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.getRankid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.GvGServer.BattleGuildRankItem} returns this
 */
proto.PbModel.GvGServer.BattleGuildRankItem.prototype.setRankid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * @enum {number}
 */
proto.PbModel.GvGServer.RankChange = {
  UP: 0,
  DOWN: 1,
  NOCHANGE: 2
};

goog.object.extend(exports, proto.PbModel.GvGServer);