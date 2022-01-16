"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Message = void 0;
var MessageHandler_1 = require("../Handlers/MessageHandler");
var Channel_1 = require("./Channel");
var Message = /** @class */ (function () {
    /**
    * Creates a new Message object
    * @class
    * @param {object} data - Message data
    */
    function Message(data) {
        if (data) {
            if ("type" in data) {
                this.type = data.type;
            }
            this.guildId = data.guild_id;
            if ("id" in data) {
                this.id = data.id;
            }
            if ("channel_id" in data) {
                this.channel = new Channel_1.default({ id: data.channel_id });
            }
            if ("timestamp" in data) {
                this.createdAt = new Date(data.timestamp);
            }
            if ("edited_timestamp" in data) {
                this.editedTimestamp = data.edited_timestamp;
            }
            if ("content" in data) {
                this.content = data.content;
            }
            if ("pinned" in data) {
                this.pinned = Boolean(data.pinned);
            }
            if ("tts" in data) {
                this.tts = Boolean(data.tts);
            }
            if ("referenced_message" in data) {
                this.referencedMessage = new Message(data.referenced_message);
            }
            if ("mention_everyone" in data) {
                this.mentionEveryone = data.mention_everyone;
            }
            if ("attachments" in data) {
                this.attachments = data.attachments;
            }
            if ("embeds" in data) {
                this.embeds = data.embeds;
            }
            if ("reactions" in data) {
                this.reactions = data.reactions;
            }
            if ("webhook_id" in data) {
                this.webhookId = data.webhook_id;
            }
            if ("activity" in data) {
                this.activity = data.activity;
            }
            if ("application" in data) {
                this.application = data.application;
            }
            if ("application_id" in data) {
                this.applicationId = data.application_id;
            }
            if ("nonce" in data) {
                this.nonce = data.nonce;
            }
            if ("interaction" in data) {
                this.interaction = data.interaction;
            }
            if ("thread" in data) {
                this.thread = data.thread;
            }
            if ("sticker_items" in data) {
                this.stickerItems = data.sticker_items;
            }
            if ("member" in data) {
                this.member = data.member;
            }
            if ("author" in data) {
                this.author = data.author;
            }
        }
    }
    /**
     * Reacts with an unicode emoji on a message
     * @type {string} emoji - Emoji to react with
     * @example
     * // React with a custom unicode emoji
     * message.react("💩")
     */
    Message.prototype.react = function (params) {
        new MessageHandler_1.default(this).react(params);
    };
    ;
    /**
     * Delete a message from channel
     * @example
     * // Delete a message
     * message.delete()
     */
    Message.prototype.delete = function () {
        new MessageHandler_1.default(this).delete();
    };
    ;
    /**
     * Bulk delete messages from channel
     * @type {Array<String>} messages - Array of message ids
     * @example
     * // Bulk delete messages
     * message.bulkDelete(["931960572449280020", "931960572449280021"])
     */
    Message.prototype.bulkDelete = function (params) {
        new MessageHandler_1.default(this).bulkDelete(params);
    };
    ;
    /**
     * Remove all reactions from message
     * @example
     * // Remove all reactions from message
     * message.removeAllReactions()
     */
    Message.prototype.removeAllReactions = function () {
        new MessageHandler_1.default(this).removeAllReactions();
    };
    ;
    /**
     * Remove own reaction from message
     * @type {string} emoji - Emoji to remove
     * @example
     * // Remove own reaction from message
     * message.removeOwnReaction("💩")
     */
    Message.prototype.removeOwnReaction = function (params) {
        new MessageHandler_1.default(this).removeOwnReaction(params);
    };
    ;
    /**
     * Remove a reaction from another user from message
     * @type {string} emoji - Emoji to remove
     * @type {string} userId - User id to remove reaction from
     * @example
     * // Remove a reaction from another user from message
     * message.removeReaction({ emoji: "💩", userId: "1234" })
     */
    Message.prototype.removeUserReaction = function (params) {
        new MessageHandler_1.default(this).removeUserReaction(params);
    };
    ;
    /**
     * Get reactions from message
     * @type {string} emoji - Emoji to get reactions from
     * @type {number|string} limit - Limit of reactions to get
     * @type {number|string} after - Get reactions after this id
     * @example
     * // Get reactions from message
     * message.getReactions({ emoji: "💩", limit: 10, after: "931960572449280020" })
     * @returns {Array<Object>}
     */
    Message.prototype.getReactions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new MessageHandler_1.default(this);
                        return [4 /*yield*/, handler.getReactions(__assign({}, params))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ;
    /**
     * Delete all reactions for specific emoji
     * @type {string} emoji - Emoji to delete reactions from
     * @example
     * // Delete all reactions for specific emoji
     * message.deleteAllReactionsForEmoji("💩");
     */
    Message.prototype.deleteAllReactionsForEmoji = function (params) {
        new MessageHandler_1.default(this).deleteAllReactionsForEmoji(params);
    };
    ;
    return Message;
}());
exports.Message = Message;
;
exports.default = Message;
