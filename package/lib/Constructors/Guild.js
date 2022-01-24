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
exports.Guild = void 0;
var Member_1 = require("./Member");
var Channel_1 = require("./Channel");
var GuildTypes_1 = require("./Types/GuildTypes");
var GuildHandler_1 = require("../Handlers/GuildHandler");
var Guild = /** @class */ (function () {
    function Guild(data) {
        var _a, _b;
        if ("id" in data) {
            this.id = data.id;
        }
        if ("name" in data) {
            this.name = data.name;
        }
        if ("icon" in data) {
            this.icon = data.icon;
        }
        if ("icon_hash" in data) {
            this.icon_hash = data.icon_hash;
        }
        if ("splash" in data) {
            this.splash = data.splash;
        }
        if ("discovery_splash" in data) {
            this.discovery_splash = data.discovery_splash;
        }
        if ("owner" in data) {
            this.owner = data.owner;
        }
        if ("owner_id" in data) {
            this.owner_id = data.owner_id;
        }
        if ("permissions" in data) {
            this.permissions = data.permissions;
        }
        if ("region" in data) {
            this.region = data.region;
        }
        if ("afk_channel_id" in data) {
            this.afk_channel_id = data.afk_channel_id;
        }
        if ("afk_timeout" in data) {
            this.afk_timeout = data.afk_timeout;
        }
        if ("widget_enabled" in data) {
            this.widget_enabled = data.widget_enabled;
        }
        if ("widget_channel_id" in data) {
            this.widget_channel_id = data.widget_channel_id;
        }
        if ("verification_level" in data) {
            var type = GuildTypes_1.VerificationLevelTypes.find(function (t) { return t[1] === data.verification_level; });
            this.verification_level = type[0];
        }
        if ("default_message_notifications" in data) {
            var type = GuildTypes_1.DefaultMessageNoficationLevelTypes.find(function (t) { return t[1] === data.default_message_notifications; });
            this.default_message_notifications = type[0];
        }
        if ("explicit_content_filter" in data) {
            var type = GuildTypes_1.ExplicitContentFilterTypes.find(function (t) { return t[1] === data.explicit_content_filter; });
            this.explicit_content_filter = type[0];
        }
        if ("roles" in data) {
            this.roles = data.roles;
        }
        if ("emojis" in data) {
            this.emojis = data.emojis;
        }
        if ("features" in data) {
            this.features = data.features;
        }
        if ("mfa_level" in data) {
            var type = GuildTypes_1.MFALevelTypes.find(function (t) { return t[1] === data.mfa_level; });
            this.mfa_level = type[0];
        }
        if ("application_id" in data) {
            this.application_id = data.application_id;
        }
        if ("system_channel_id" in data) {
            this.system_channel_id = data.system_channel_id;
        }
        if ("system_channel_flags" in data) {
            this.system_channel_flags = data.system_channel_flags;
        }
        if ("rules_channel_id" in data) {
            this.rules_channel_id = data.rules_channel_id;
        }
        if ("joined_at" in data) {
            this.joined_at = data.joined_at;
        }
        if ("large" in data) {
            this.large = data.large;
        }
        if ("unavailable" in data) {
            this.unavailable = data.unavailable;
        }
        if ("member_count" in data) {
            this.member_count = data.member_count;
        }
        if ("voice_states" in data) {
            this.voice_states = data.voice_states;
        }
        if ("members" in data) {
            this.members = (_a = data.members) === null || _a === void 0 ? void 0 : _a.map(function (m) { return new Member_1.Member(m); });
        }
        if ("channels" in data) {
            this.channels = (_b = data.channels) === null || _b === void 0 ? void 0 : _b.map(function (c) { return new Channel_1.Channel(c); });
        }
        if ("threads" in data) {
            this.threads = data.threads;
        }
        if ("presences" in data) {
            this.presences = data.presences;
        }
        if ("max_presences" in data) {
            this.max_presences = data.max_presences;
        }
        if ("max_members" in data) {
            this.max_members = data.max_members;
        }
        if ("vanity_url_code" in data) {
            this.vanity_url_code = data.vanity_url_code;
        }
        if ("description" in data) {
            this.description = data.description;
        }
        if ("banner" in data) {
            this.banner = data.banner;
        }
        if ("premium_tier" in data) {
            var type = GuildTypes_1.PremiumTierTypes.find(function (t) { return t[1] === data.premium_tier; });
            this.premium_tier = type[0];
        }
        if ("premium_subscription_count" in data) {
            this.premium_subscription_count = data.premium_subscription_count;
        }
        if ("preferred_locale" in data) {
            this.preferred_locale = data.preferred_locale;
        }
        if ("public_updates_channel_id" in data) {
            this.public_updates_channel_id = data.public_updates_channel_id;
        }
        if ("max_video_channel_users" in data) {
            this.max_video_channel_users = data.max_video_channel_users;
        }
        if ("approximate_member_count" in data) {
            this.approximate_member_count = data.approximate_member_count;
        }
        if ("approximate_presence_count" in data) {
            this.approximate_presence_count = data.approximate_presence_count;
        }
        if ("welcome_screen" in data) {
            this.welcome_screen = data.welcome_screen;
        }
        if ("nsfw_level" in data) {
            var type = GuildTypes_1.GuildNSFWLevelTypes.find(function (t) { return t[1] === data.nsfw_level; });
            this.nsfw_level = type[0];
        }
        if ("stage_instances" in data) {
            this.stage_instances = data.stage_instances;
        }
        if ("stickers" in data) {
            this.stickers = data.stickers;
        }
        if ("guild_scheduled_events" in data) {
            this.guild_scheduled_events = data.guild_scheduled_events;
        }
        if ("premium_progress_bar_enabled" in data) {
            this.premium_progress_bar_enabled = data.premium_progress_bar_enabled;
        }
    }
    /**
     * Fetch guild
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.get("482913781983712939");
     * @returns {Guild | boolean}
     */
    Guild.prototype.get = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new GuildHandler_1.default(this);
                        return [4 /*yield*/, handler.get(params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Fetch guild previes
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.getGuildPreview("482913781983712939");
     * @returns {Guild | boolean}
     */
    Guild.prototype.getGuildPreview = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new GuildHandler_1.default(this);
                        return [4 /*yield*/, handler.getPreview(params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Modify guild settings
     * @param {object} params - Params that you want to modify
     * @param {string} params.name - Guild name
     * @param {string} params.region - Guild region
     * @param {number} params.verificationLevel - Guild verification level
     * @param {number} params.defaultMessageNotifications - Guild default message notifications
     * @param {number} params.explicitContentFilter - Guild explicit content filter
     * @param {string} params.afkChannelId - Guild afk channel id
     * @param {number} params.afkTimeout - Guild afk timeout
     * @param {string} params.icon - Guild icon (Should be path full path to image or link to image including image extension like .png)
     * @param {string} params.ownerId - Guild owner id
     * @param {string} params.splash - Guild splash (Should be path full path to image or link to image including image extension like .png)
     * @param {string} params.banner - Guild banner (Should be path full path to image or link to image including image extension like .png)
     * @param {string} params.systemChannelId - Guild system channel id
     * @param {number} params.systemChannelFlags - Guild system channel flags
     * @param {string} params.rulesChannelId - Guild rules channel id
     * @param {string} params.publicUpdatesChannelId - Guild public updates channel id
     * @param {string} params.preferredLocale - Guild preferred locale
     * @param {Array<object>} params.features - Guild features
     * @param {string} params.description - Guild description
     * @param {boolean} params.premiumProgressBarEnabled - Guild premium progress bar enabled
     * @returns {Promise<Guild | boolean>} - Modified Guild object
     */
    Guild.prototype.modify = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new GuildHandler_1.default(this);
                        return [4 /*yield*/, handler.modify(params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Delete a guild
     * @param {string} [id] - id of the guild
     */
    Guild.prototype.delete = function (params) {
        new GuildHandler_1.default(this).delete(params);
    };
    /**
     * Fetch all guild channels
     * @param {string} [id] - id of the guild
     * @returns {Promise<Array<Channel> | boolean>}
     */
    Guild.prototype.fetchChannels = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = new GuildHandler_1.default(this);
                        return [4 /*yield*/, handler.fetchChannels(params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return Guild;
}());
exports.Guild = Guild;
