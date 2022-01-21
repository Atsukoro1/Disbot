"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guild = void 0;
var Member_1 = require("./Member");
var Channel_1 = require("./Channel");
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
            this.verification_level = data.verification_level;
        }
        if ("default_message_notifications" in data) {
            this.default_message_notifications = data.default_message_notifications;
        }
        if ("explicit_content_filter" in data) {
            this.explicit_content_filter = data.explicit_content_filter;
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
            this.mfa_level = data.mfa_level;
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
            this.premium_tier = data.premium_tier;
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
            this.nsfw_level = data.nsfw_level;
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
    return Guild;
}());
exports.Guild = Guild;
