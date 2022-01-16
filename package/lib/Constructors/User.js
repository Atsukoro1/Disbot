"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(data) {
        if (data) {
            if ("id" in data) {
                this.id = data.id;
            }
            if ("username" in data) {
                this.username = data.username;
            }
            if ("discriminator" in data) {
                this.discriminator = data.discriminator;
            }
            if ("avatar" in data) {
                this.avatar = data.avatar;
            }
            if ("bot" in data) {
                this.bot = data.bot;
            }
            if ("system" in data) {
                this.system = data.system;
            }
            if ("mfa_enabled" in data) {
                this.mfa_enabled = data.mfa_enabled;
            }
            if ("banner" in data) {
                this.banner = data.banner;
            }
            if ("accent_color" in data) {
                this.accent_color = data.accent_color;
            }
            if ("locale" in data) {
                this.locale = data.locale;
            }
            if ("verified" in data) {
                this.verified = data.verified;
            }
            if ("email" in data) {
                this.email = data.email;
            }
            if ("flags" in data) {
                this.flags = data.flags;
            }
            if ("premium_type" in data) {
                this.premiumType = data.premium_type;
            }
            if ("public_flags" in data) {
                this.publicFlags = data.public_flags;
            }
        }
    }
    return User;
}());
exports.default = User;
