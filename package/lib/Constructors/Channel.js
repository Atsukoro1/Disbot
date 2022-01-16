"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChannelHandler_1 = require("../Handlers/ChannelHandler");
var Message_1 = require("./Message");
var Channel = /** @class */ (function () {
    function Channel(data) {
        if (data) {
            if ("id" in data) {
                this.id = data.id;
            }
            if ("type" in data) {
                this.type = data.type;
            }
            if ("guild_id" in data) {
                this.guildId = data.guild_id;
            }
            if ("position" in data) {
                this.position = data.position;
            }
            if ("permission_overwrites" in data) {
                this.permissions_overwrites = data.permission_overwrites;
            }
            if ("name" in data) {
                this.name = data.name;
            }
            if ("topic" in data) {
                this.topic = data.topic;
            }
            if ("nsfw" in data) {
                this.nsfw = data.nsfw;
            }
            if ("last_message_id" in data) {
                this.lastMessageId = data.last_message_id;
            }
            if ("bitrate" in data) {
                this.bitrate = data.bitrate;
            }
            if ("user_limit" in data) {
                this.user_limit = data.user_limit;
            }
            if ("rate_limit_per_user" in data) {
                this.rate_limit_per_user = data.rate_limit_per_user;
            }
            if ("recipients" in data) {
                this.recipients = data.recipients;
            }
            if ("icon" in data) {
                this.icon = data.icon;
            }
            if ("owner_id" in data) {
                this.ownerId = data.owner_id;
            }
            if ("application_id" in data) {
                this.applicationId = data.application_id;
            }
            if ("parent_id" in data) {
                this.parentId = data.parent_id;
            }
            if ("last_pin_timestamp" in data) {
                this.lastPinTimestamp = data.last_pin_timestamp;
            }
            if ("rtc_region" in data) {
                this.rtcRegion = data.rtc_region;
            }
            if ("video_quality_mode" in data) {
                this.videoQualityMode = data.video_quality_mode;
            }
            if ("message_count" in data) {
                this.messageCount = data.message_count;
            }
            if ("member_count" in data) {
                this.memberCount = data.member_count;
            }
            if ("thread_metadata" in data) {
                this.threadMetadata = data.thread_metadata;
            }
            if ("member" in data) {
                this.member = data.member;
            }
            if ("default_auto_archive_duration" in data) {
                this.defaultAutoArchiveDuration = data.default_auto_archive_duration;
            }
            if ("permissions" in data) {
                this.permissions = data.permissions;
            }
        }
    }
    /**
     * Send message to channel
     * @type {String} content - Message content
     * @type {Boolean} tts - Text to speech
     * @type {number|string|any} nonce - Nonce
     * @returns {Promise<Message>}
     * @example
     * // Send message
     * channel.send("Hello!");
     * @example
     * // Send message with options
     * channel.send({
     *    content: "Hello!"
     * });
     */
    Channel.prototype.send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new ChannelHandler_1.default(this);
                        return [4 /*yield*/, handler.send(params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new Message_1.default(response)];
                }
            });
        });
    };
    /**
     * Delete channel
     * @returns {Promise<void>}
     * @example
     * // Delete channel
     * channel.delete();
     */
    Channel.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new ChannelHandler_1.default(this).delete();
                return [2 /*return*/];
            });
        });
    };
    /**
     * Fetch channel messages
     * @type {number} limit - Limit
     * @type {number} before - Before
     * @type {number} after - After
     * @type {number} around - Around
     * @returns {Promise<Array<Message>>}
     * @example
     * // Fetch channel messages
     * channel.fetchMessages({ limit: 10, after: 1234567890123456789, before: 1234567890123456789 });
     */
    Channel.prototype.fetchMessages = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new ChannelHandler_1.default(this);
                        return [4 /*yield*/, handler.fetchMessages(params)];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response.map(function (message) { return new Message_1.default(message); })];
                }
            });
        });
    };
    /**
     * Fetch specific message from a channel
     * @type {number} - Id of the message you want to fetch
     * @returns {Promise<Message>}
     * @example
     * // Fetch specific message
     * channel.fetchMessage("1234567890123456789");
     */
    Channel.prototype.fetchMessage = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new ChannelHandler_1.default(this);
                        return [4 /*yield*/, handler.fetchMessage(params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new Message_1.default(response)];
                }
            });
        });
    };
    /**
     * Modify permissions of a channel for specific user or role
     * @type {string} id - Id of the user or role
     * @type {boolean} user - if id is a user or not
     * @type {Array<string>} allow - Permissions to allow
     * @type {Array<string>} deny - Permissions to deny
     * @returns {Promise<void>}
     * @example
     * // Modify permissions of a channel for specific user or role
     * channel.modifyPermissions({
     *   id: "1234567890123456789",
     *   user: true,
     *   allow: ["READ_MESSAGES", "SEND_MESSAGES"]
     * });
     */
    Channel.prototype.modifyPermissions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new ChannelHandler_1.default(this).modifyPermissions(params);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Remove all permissions for specific role or user in channel
     * @type {string} id - Id of the user or role
     * @example
     * // Remove all permissions for specific role or user in channel
     * channel.removePermissions({ id: "1234567890123456789" });
     */
    Channel.prototype.removePermissions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new ChannelHandler_1.default(this).removePermissions(params);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Fetch all invites from channel
     * @returns {Promise<Array<Object>>}
     * @example
     * // Fetch all invites from channel
     * channel.fetchInvites();
     */
    Channel.prototype.fetchInvites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new ChannelHandler_1.default(this);
                        return [4 /*yield*/, handler.fetchInvites()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Create an invite for channel
     * @type {number} maxAge - Max age of the invite
     * @type {number} maxUses - Max uses of the invite
     * @type {boolean} temporary - Temporary or not
     * @type {boolean} unique - Unique or not
     * @type {number} targetType - Type of the target
     * @type {string} targetUserId - Targer user id
     * @type {string} targetApplicationId - Target application id
     * @returns {Promise<Invite>}
     * @example
     * // Create an invite for channel
     * channel.createInvite({ unique: false, maxAge: 0, maxUses: 0, temporary: false });
     */
    Channel.prototype.createInvite = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new ChannelHandler_1.default(this);
                        return [4 /*yield*/, handler.createInvite(params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Trigger a typing indicator in channel
     * @example
     * // Trigger a typing indicator in channel
     * channel.typing();
     */
    Channel.prototype.typing = function () {
        new ChannelHandler_1.default(this).typing();
    };
    /**
     * Fetch pinned messages from channel
     * @returns {Promise<Array<Message>>}
     * @example
     * // Fetch pinned messages from channel
     * channel.fetchPinnedMessages();
     */
    Channel.prototype.fetchPinnedMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new ChannelHandler_1.default(this);
                        return [4 /*yield*/, handler.fetchPinnedMessages()];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response.map(function (message) { return new Message_1.default(message); })];
                }
            });
        });
    };
    /**
     * Pin a message in channel
     * @type {string} messageId - Id of the message you want to pin
     * @example
     * // Pin a message in channel
     * channel.pinMessage("1234567890123456789");
     */
    Channel.prototype.pinMessage = function (params) {
        var handler = new ChannelHandler_1.default(this).pinMessage(params);
    };
    /**
     * Unpin a message in channel
     * @type {string} messageId - Id of the message you want to unpin
     * @example
     * // Unpin a message in channel
     * channel.unpinMessage("1234567890123456789");
     */
    Channel.prototype.unpinMessage = function (params) {
        var handler = new ChannelHandler_1.default(this).unpinMessage(params);
    };
    return Channel;
}());
exports.default = Channel;
