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
var Guild_1 = require("../Constructors/Guild");
var RequestHandler_1 = require("./RequestHandler");
var axios_1 = require("axios");
var path_1 = require("path");
var Channel_1 = require("../Constructors/Channel");
var fs = require("fs").promises;
var GuildHandler = /** @class */ (function () {
    function GuildHandler(data) {
        this.guild = data;
    }
    GuildHandler.prototype.get = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params)
                            id = this.guild.id;
                        return [4 /*yield*/, (0, RequestHandler_1.default)("GET", {}, "/guilds/".concat(id), global.token)];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, new Guild_1.Guild(response)];
                }
            });
        });
    };
    GuildHandler.prototype.getPreview = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params)
                            id = this.guild.id;
                        return [4 /*yield*/, (0, RequestHandler_1.default)("GET", {}, "/guilds/".concat(id, "/preview"), global.token)];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, new Guild_1.Guild(response)];
                }
            });
        });
    };
    GuildHandler.prototype.modify = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            function getBase64Data(p) {
                return __awaiter(this, void 0, void 0, function () {
                    var urlRegexp, ArrayBuffImageData, database64, data, database64;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                urlRegexp = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i;
                                if (!p.match(urlRegexp)) return [3 /*break*/, 2];
                                return [4 /*yield*/, axios_1.default.get(p, { responseType: 'arraybuffer' })];
                            case 1:
                                ArrayBuffImageData = _a.sent();
                                database64 = "data:image/".concat((0, path_1.extname)(p).replace(".", ""), ";base64,").concat(Buffer.from(ArrayBuffImageData.data).toString("base64"));
                                return [2 /*return*/, database64];
                            case 2:
                                if (![".jpg", ".png", ".gif"].includes((0, path_1.extname)(p)))
                                    throw new Error("This file is not an image.");
                                return [4 /*yield*/, fs.readFile(p)];
                            case 3:
                                data = _a.sent();
                                database64 = "data:image/".concat((0, path_1.extname)(p).replace(".", ""), ";base64,").concat(data.toString("base64"));
                                return [2 /*return*/, database64];
                        }
                    });
                });
            }
            var body, b64d, b64d, b64d, b64d, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {};
                        if ("name" in params) {
                            body.name = params.name;
                        }
                        if ("region" in params) {
                            body.region = params.region;
                        }
                        if ("verificationLevel" in params) {
                            body.verification_level = params.verificationLevel;
                        }
                        if ("defaultMessageNotifications" in params) {
                            body.default_message_notifications = params.defaultMessageNotifications;
                        }
                        if ("explicitContentFilter" in params) {
                            body.explicit_content_filter = params.explicitContentFilter;
                        }
                        if ("afkChannelId" in params) {
                            body.afk_channel_id = params.afkChannelId;
                        }
                        if ("afkTimeout" in params) {
                            body.afk_timeout = params.afkTimeout;
                        }
                        if (!("icon" in params)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getBase64Data(params.icon)];
                    case 1:
                        b64d = _a.sent();
                        body.icon = b64d;
                        _a.label = 2;
                    case 2:
                        if ("ownerId" in params) {
                            body.owner_id = params.ownerId;
                        }
                        if (!("splash" in params)) return [3 /*break*/, 4];
                        return [4 /*yield*/, getBase64Data(params.splash)];
                    case 3:
                        b64d = _a.sent();
                        body.splash = b64d;
                        _a.label = 4;
                    case 4:
                        if (!("discoverySplash" in params)) return [3 /*break*/, 6];
                        return [4 /*yield*/, getBase64Data(params.discoverySplash)];
                    case 5:
                        b64d = _a.sent();
                        body.discovery_splash = b64d;
                        _a.label = 6;
                    case 6:
                        if (!("banner" in params)) return [3 /*break*/, 8];
                        return [4 /*yield*/, getBase64Data(params.banner)];
                    case 7:
                        b64d = _a.sent();
                        body.banner = b64d;
                        _a.label = 8;
                    case 8:
                        if ("systemChannelId" in params) {
                            body.system_channel_id = params.systemChannelId;
                        }
                        if ("systemChannelFlags" in params) {
                            body.system_channel_flags = params.systemChannelFlags;
                        }
                        if ("rulesChannelId" in params) {
                            body.rules_channel_id = params.rulesChannelId;
                        }
                        if ("publicUpdatesChannelId" in params) {
                            body.public_updates_channel_id = params.publicUpdatesChannelId;
                        }
                        if ("preferredLocale" in params) {
                            body.preferred_locale = params.preferredLocale;
                        }
                        if ("features" in params) {
                            body.features = params.features;
                        }
                        if ("description" in params) {
                            body.description = params.description;
                        }
                        if ("premiumProgressBarEnabled" in params) {
                            body.premium_progress_bar_enabled = params.premiumProgressBarEnabled;
                        }
                        return [4 /*yield*/, (0, RequestHandler_1.default)("PATCH", body, "/guilds/".concat(this.guild.id), global.token)];
                    case 9:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, new Guild_1.Guild(response)];
                }
            });
        });
    };
    GuildHandler.prototype.delete = function (params) {
        (0, RequestHandler_1.default)("DELETE", {}, "/guilds/".concat(params ? params : this.guild.id), global.token);
    };
    GuildHandler.prototype.fetchChannels = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, RequestHandler_1.default)("GET", {}, "/guilds/".concat(params ? params : this.guild.id, "/channels"), global.token)];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response.map(function (ch) { return new Channel_1.Channel(ch); })];
                }
            });
        });
    };
    return GuildHandler;
}());
exports.default = GuildHandler;
