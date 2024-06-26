// source: Activity.proto
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

goog.exportSymbol('proto.PbModel.Activity.ActivityBaseInfo', null, global);
goog.exportSymbol('proto.PbModel.Activity.ActivityPushInfosRes', null, global);
goog.exportSymbol('proto.PbModel.Activity.ActivityPushReddotInfoRes', null, global);
goog.exportSymbol('proto.PbModel.Activity.ActivityRedModuleInfo', null, global);
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
proto.PbModel.Activity.ActivityBaseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Activity.ActivityBaseInfo.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Activity.ActivityBaseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Activity.ActivityBaseInfo.displayName = 'proto.PbModel.Activity.ActivityBaseInfo';
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
proto.PbModel.Activity.ActivityPushInfosRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Activity.ActivityPushInfosRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Activity.ActivityPushInfosRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Activity.ActivityPushInfosRes.displayName = 'proto.PbModel.Activity.ActivityPushInfosRes';
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
proto.PbModel.Activity.ActivityPushReddotInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PbModel.Activity.ActivityPushReddotInfoRes.repeatedFields_, null);
};
goog.inherits(proto.PbModel.Activity.ActivityPushReddotInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Activity.ActivityPushReddotInfoRes.displayName = 'proto.PbModel.Activity.ActivityPushReddotInfoRes';
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
proto.PbModel.Activity.ActivityRedModuleInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PbModel.Activity.ActivityRedModuleInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PbModel.Activity.ActivityRedModuleInfo.displayName = 'proto.PbModel.Activity.ActivityRedModuleInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Activity.ActivityBaseInfo.repeatedFields_ = [5];



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
proto.PbModel.Activity.ActivityBaseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Activity.ActivityBaseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Activity.ActivityBaseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityBaseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activityenum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    submodelid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    subactivityidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    isshowdesk: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    showdesktitle: jspb.Message.getFieldWithDefault(msg, 7, ""),
    showdeskicon: jspb.Message.getFieldWithDefault(msg, 8, ""),
    showstarttime: jspb.Message.getFieldWithDefault(msg, 9, 0),
    showendtime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 11, 0),
    endtime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    showdeskstarttime: jspb.Message.getFieldWithDefault(msg, 13, 0),
    showdeskendtime: jspb.Message.getFieldWithDefault(msg, 14, 0),
    showdeskmainimage: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.PbModel.Activity.ActivityBaseInfo}
 */
proto.PbModel.Activity.ActivityBaseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Activity.ActivityBaseInfo;
  return proto.PbModel.Activity.ActivityBaseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Activity.ActivityBaseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Activity.ActivityBaseInfo}
 */
proto.PbModel.Activity.ActivityBaseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActivityid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActivityenum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubmodelid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setSubactivityidsList(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsshowdesk(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowdesktitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowdeskicon(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShowstarttime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShowendtime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStarttime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtime(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShowdeskstarttime(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShowdeskendtime(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowdeskmainimage(value);
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
proto.PbModel.Activity.ActivityBaseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Activity.ActivityBaseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Activity.ActivityBaseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityBaseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getActivityenum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSubmodelid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSubactivityidsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      5,
      f
    );
  }
  f = message.getIsshowdesk();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getShowdesktitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getShowdeskicon();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getShowstarttime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getShowendtime();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getShowdeskstarttime();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getShowdeskendtime();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getShowdeskmainimage();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional int32 ActivityId = 1;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getActivityid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setActivityid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 ActivityEnum = 2;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getActivityenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setActivityenum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 SubModelId = 3;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getSubmodelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setSubmodelid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Name = 4;
 * @return {string}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated int32 SubActivityIds = 5;
 * @return {!Array<number>}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getSubactivityidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setSubactivityidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.addSubactivityids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.clearSubactivityidsList = function() {
  return this.setSubactivityidsList([]);
};


/**
 * optional bool IsShowDesk = 6;
 * @return {boolean}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getIsshowdesk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setIsshowdesk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string ShowDeskTitle = 7;
 * @return {string}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getShowdesktitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setShowdesktitle = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string ShowDeskIcon = 8;
 * @return {string}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getShowdeskicon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setShowdeskicon = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 ShowStartTime = 9;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getShowstarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setShowstarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 ShowEndTime = 10;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getShowendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setShowendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 StartTime = 11;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 EndTime = 12;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 ShowDeskStartTime = 13;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getShowdeskstarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setShowdeskstarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 ShowDeskEndTime = 14;
 * @return {number}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getShowdeskendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setShowdeskendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string ShowDeskMainImage = 15;
 * @return {string}
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.getShowdeskmainimage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.PbModel.Activity.ActivityBaseInfo} returns this
 */
proto.PbModel.Activity.ActivityBaseInfo.prototype.setShowdeskmainimage = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Activity.ActivityPushInfosRes.repeatedFields_ = [1];



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
proto.PbModel.Activity.ActivityPushInfosRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Activity.ActivityPushInfosRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Activity.ActivityPushInfosRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityPushInfosRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    activitybaseinfosList: jspb.Message.toObjectList(msg.getActivitybaseinfosList(),
    proto.PbModel.Activity.ActivityBaseInfo.toObject, includeInstance)
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
 * @return {!proto.PbModel.Activity.ActivityPushInfosRes}
 */
proto.PbModel.Activity.ActivityPushInfosRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Activity.ActivityPushInfosRes;
  return proto.PbModel.Activity.ActivityPushInfosRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Activity.ActivityPushInfosRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Activity.ActivityPushInfosRes}
 */
proto.PbModel.Activity.ActivityPushInfosRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.Activity.ActivityBaseInfo;
      reader.readMessage(value,proto.PbModel.Activity.ActivityBaseInfo.deserializeBinaryFromReader);
      msg.addActivitybaseinfos(value);
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
proto.PbModel.Activity.ActivityPushInfosRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Activity.ActivityPushInfosRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Activity.ActivityPushInfosRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityPushInfosRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivitybaseinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.Activity.ActivityBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ActivityBaseInfo ActivityBaseInfos = 1;
 * @return {!Array<!proto.PbModel.Activity.ActivityBaseInfo>}
 */
proto.PbModel.Activity.ActivityPushInfosRes.prototype.getActivitybaseinfosList = function() {
  return /** @type{!Array<!proto.PbModel.Activity.ActivityBaseInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.Activity.ActivityBaseInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.Activity.ActivityBaseInfo>} value
 * @return {!proto.PbModel.Activity.ActivityPushInfosRes} returns this
*/
proto.PbModel.Activity.ActivityPushInfosRes.prototype.setActivitybaseinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.Activity.ActivityBaseInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Activity.ActivityBaseInfo}
 */
proto.PbModel.Activity.ActivityPushInfosRes.prototype.addActivitybaseinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.Activity.ActivityBaseInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Activity.ActivityPushInfosRes} returns this
 */
proto.PbModel.Activity.ActivityPushInfosRes.prototype.clearActivitybaseinfosList = function() {
  return this.setActivitybaseinfosList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.repeatedFields_ = [1];



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
proto.PbModel.Activity.ActivityPushReddotInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Activity.ActivityPushReddotInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Activity.ActivityPushReddotInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.PbModel.Activity.ActivityRedModuleInfo.toObject, includeInstance)
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
 * @return {!proto.PbModel.Activity.ActivityPushReddotInfoRes}
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Activity.ActivityPushReddotInfoRes;
  return proto.PbModel.Activity.ActivityPushReddotInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Activity.ActivityPushReddotInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Activity.ActivityPushReddotInfoRes}
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PbModel.Activity.ActivityRedModuleInfo;
      reader.readMessage(value,proto.PbModel.Activity.ActivityRedModuleInfo.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.PbModel.Activity.ActivityPushReddotInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Activity.ActivityPushReddotInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Activity.ActivityPushReddotInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.PbModel.Activity.ActivityRedModuleInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ActivityRedModuleInfo Data = 1;
 * @return {!Array<!proto.PbModel.Activity.ActivityRedModuleInfo>}
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.prototype.getDataList = function() {
  return /** @type{!Array<!proto.PbModel.Activity.ActivityRedModuleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PbModel.Activity.ActivityRedModuleInfo, 1));
};


/**
 * @param {!Array<!proto.PbModel.Activity.ActivityRedModuleInfo>} value
 * @return {!proto.PbModel.Activity.ActivityPushReddotInfoRes} returns this
*/
proto.PbModel.Activity.ActivityPushReddotInfoRes.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.PbModel.Activity.ActivityRedModuleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PbModel.Activity.ActivityRedModuleInfo}
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.PbModel.Activity.ActivityRedModuleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PbModel.Activity.ActivityPushReddotInfoRes} returns this
 */
proto.PbModel.Activity.ActivityPushReddotInfoRes.prototype.clearDataList = function() {
  return this.setDataList([]);
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
proto.PbModel.Activity.ActivityRedModuleInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PbModel.Activity.ActivityRedModuleInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PbModel.Activity.ActivityRedModuleInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityRedModuleInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infoMap: (f = msg.getInfoMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.PbModel.Activity.ActivityRedModuleInfo}
 */
proto.PbModel.Activity.ActivityRedModuleInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PbModel.Activity.ActivityRedModuleInfo;
  return proto.PbModel.Activity.ActivityRedModuleInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PbModel.Activity.ActivityRedModuleInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PbModel.Activity.ActivityRedModuleInfo}
 */
proto.PbModel.Activity.ActivityRedModuleInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActivityid(value);
      break;
    case 2:
      var value = msg.getInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
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
proto.PbModel.Activity.ActivityRedModuleInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PbModel.Activity.ActivityRedModuleInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PbModel.Activity.ActivityRedModuleInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PbModel.Activity.ActivityRedModuleInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * optional int32 ActivityId = 1;
 * @return {number}
 */
proto.PbModel.Activity.ActivityRedModuleInfo.prototype.getActivityid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PbModel.Activity.ActivityRedModuleInfo} returns this
 */
proto.PbModel.Activity.ActivityRedModuleInfo.prototype.setActivityid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, bool> Info = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.PbModel.Activity.ActivityRedModuleInfo.prototype.getInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.PbModel.Activity.ActivityRedModuleInfo} returns this
 */
proto.PbModel.Activity.ActivityRedModuleInfo.prototype.clearInfoMap = function() {
  this.getInfoMap().clear();
  return this;};


goog.object.extend(exports, proto.PbModel.Activity);
