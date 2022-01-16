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
var RequestHandler_1 = require("./RequestHandler");
var ChannelHandler = /** @class */ (function () {
    function ChannelHandler(data) {
        this.channel = data;
    }
    ChannelHandler.prototype.send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {};
                        if (typeof (params) != "object") {
                            body.content = params;
                        }
                        else {
                            body = params;
                        }
                        return [4 /*yield*/, (0, RequestHandler_1.default)("POST", body, "/channels/".concat(this.channel.id, "/messages"), global.token)];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ChannelHandler.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, RequestHandler_1.default)("DELETE", undefined, "/channels/".concat(this.channel.id), global.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChannelHandler.prototype.fetchMessages = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "";
                        if (params.limit)
                            query += "?limit=".concat(params.limit);
                        if (params.before)
                            query += "&before=".concat(params.before);
                        if (params.after)
                            query += "&after=".concat(params.after);
                        if (params.around)
                            query += "&around=".concat(params.around);
                        return [4 /*yield*/, (0, RequestHandler_1.default)("GET", undefined, "/channels/".concat(this.channel.id, "/messages").concat(query), global.token)];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ChannelHandler.prototype.fetchMessage = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params)
                            throw new Error("You must provide a message id.");
                        return [4 /*yield*/, (0, RequestHandler_1.default)("GET", undefined, "/channels/".concat(this.channel.id, "/messages/").concat(params), global.token)];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ChannelHandler.prototype.modifyPermissions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            function countPermissions(permissionArray) {
                var permsArray = [
                    ['CREATE_INSTANT_INVITE', 1 << 0],
                    ['KICK_MEMBERS', 1 << 1],
                    ['BAN_MEMBERS', 1 << 2],
                    ['ADMINISTRATOR', 1 << 3],
                    ['MANAGE_CHANNELS', 1 << 4],
                    ['MANAGE_GUILD', 1 << 5],
                    ['ADD_REACTIONS', 1 << 6],
                    ['VIEW_AUDIT_LOG', 1 << 7],
                    ['PRIORITY_SPEAKER', 1 << 8],
                    ['STREAM', 1 << 9],
                    ['VIEW_CHANNEL', 1 << 10],
                    ['SEND_MESSAGES', 1 << 11],
                    ['SEND_TTS_MESSAGES', 1 << 12],
                    ['MANAGE_MESSAGES', 1 << 13],
                    ['EMBED_LINKS', 1 << 14],
                    ['ATTACH_FILES', 1 << 15],
                    ['READ_MESSAGE_HISTORY', 1 << 16],
                    ['MENTION_EVERYONE', 1 << 17],
                    ['USE_EXTERNAL_EMOJIS', 1 << 18],
                    ['VIEW_GUILD_INSIGHTS', 1 << 19],
                    ['CONNECT', 1 << 20],
                    ['SPEAK', 1 << 21],
                    ['MUTE_MEMBERS', 1 << 22],
                    ['DEAFEN_MEMBERS', 1 << 23],
                    ['MOVE_MEMBERS', 1 << 24],
                    ['USE_VAD', 1 << 25],
                    ['CHANGE_NICKNAME', 1 << 26],
                    ['MANAGE_NICKNAMES', 1 << 27],
                    ['MANAGE_ROLES', 1 << 28],
                    ['MANAGE_WEBHOOKS', 1 << 29],
                    ['MANAGE_EMOJIS_AND_STICKERS', 1 << 30],
                    ['USE_APPLICATION_COMMANDS', 1 << 31],
                    ['REQUEST_TO_SPEAK', 1 << 32],
                    ['MANAGE_EVENTS', 1 << 33],
                    ['MANAGE_THREADS', 1 << 34],
                    ['CREATE_PUBLIC_THREADS', 1 << 35],
                    ['CREATE_PRIVATE_THREADS', 1 << 36],
                    ['USE_EXTERNAL_STICKERS', 1 << 37],
                    ['SEND_MESSAGES_IN_THREADS', 1 << 38],
                    ['START_EMBEDDED_ACTIVITIES', 1 << 39],
                    ['MODERATE_MEMBERS', (1 << 4)]
                ];
                var finalPerms = 0;
                for (var i = 0; i < permissionArray.length; i++) {
                    for (var j = 0; j < permsArray.length; j++) {
                        if (permsArray[j][0] == permissionArray[i]) {
                            finalPerms += parseInt(permsArray[j][1].toString());
                        }
                    }
                }
                return finalPerms;
            }
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params.allow && !params.deny)
                            throw new Error("Please provide some permissions to allow or deny!");
                        if (typeof (params.allow) != "undefined" && typeof (params.allow) != "object")
                            throw new Error("Please provide a valid permissions to allow");
                        if (typeof (params.deny) != "undefined" && typeof (params.deny) != "object")
                            throw new Error("Please provide a valid permissions to allow");
                        if (typeof (params.user) == "undefined" || typeof (params.user) != "boolean")
                            throw new Error("Please provide a Boolean user value (if id is user or not)");
                        if (!params.id)
                            throw new Error("Please provide a user id or a role id");
                        body = {};
                        if (params.allow)
                            body.allow = countPermissions(params.allow);
                        if (params.deny)
                            body.deny = countPermissions(params.deny);
                        body.id = params.id;
                        body.type = params.user;
                        return [4 /*yield*/, (0, RequestHandler_1.default)("PUT", body, "/channels/".concat(this.channel.id, "/permissions/").concat(body.id), global.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ChannelHandler.prototype.removePermissions = function (params) {
        if (!params)
            throw new Error("You must provide a user id or a role id");
        (0, RequestHandler_1.default)("DELETE", undefined, "/channels/".concat(this.channel.id, "/permissions/").concat(params), global.token);
    };
    ;
    ChannelHandler.prototype.fetchInvites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, RequestHandler_1.default)("GET", undefined, "/channels/".concat(this.channel.id, "/invites"), global.token)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ChannelHandler.prototype.createInvite = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {};
                        if (params.maxAge)
                            body.max_age = params.maxAge;
                        if (params.maxUses)
                            body.max_uses = params.maxUses;
                        if (params.temporary)
                            body.temporary = params.temporary;
                        if (params.unique)
                            body.unique = params.unique;
                        if (params.targetType)
                            body.target_type = params.target_type;
                        if (params.targetUserId)
                            body.target_user_id = params.targetUserId;
                        if (params.targetApplicationId)
                            body.target_application_id = params.targetApplicationId;
                        return [4 /*yield*/, (0, RequestHandler_1.default)("POST", body, "/channels/".concat(this.channel.id, "/invites"), global.token)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ChannelHandler.prototype.typing = function () {
        (0, RequestHandler_1.default)("POST", {}, "/channels/".concat(this.channel.id, "/typing"), global.token);
    };
    ChannelHandler.prototype.fetchPinnedMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, RequestHandler_1.default)("GET", undefined, "/channels/".concat(this.channel.id, "/pins"), global.token)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ChannelHandler.prototype.pinMessage = function (params) {
        if (!params)
            throw new Error("You must provide a message id");
        (0, RequestHandler_1.default)("PUT", {}, "/channels/".concat(this.channel.id, "/pins/").concat(params), global.token);
    };
    ChannelHandler.prototype.unpinMessage = function (params) {
        if (!params)
            throw new Error("You must provide a message id");
        (0, RequestHandler_1.default)("DELETE", {}, "/channels/".concat(this.channel.id, "/pins/").concat(params), global.token);
    };
    return ChannelHandler;
}());
exports.default = ChannelHandler;
