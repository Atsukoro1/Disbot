"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = /** @class */ (function () {
    /**
    * Creates a new member
    * @class
    * @param {object} [data={}] - Member data
    * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object} for further information
    * @returns {Member}
    */
    function Member(data) {
        if (data) {
            if ("user" in data) {
                this.user = data.user;
            }
            if ("nick" in data) {
                this.nick = data.nick;
            }
            if ("avatar" in data) {
                this.avatar = data.avatar;
            }
            if ("roles" in data) {
                this.roles = data.roles;
            }
            if ("joined_at" in data) {
                this.joinedAt = new Date(data.joined_at).getTime();
            }
            if ("premium_since" in data) {
                this.premiumSince = new Date(data.premium_since).getTime();
            }
            if ("deaf" in data) {
                this.deaf = Boolean(data.deaf);
            }
            if ("mute" in data) {
                this.mute = Boolean(data.mute);
            }
            if ("pending" in data) {
                this.pending = data.pending;
            }
            if ("permissions" in data) {
                this.permissions = data.permissions;
            }
            if ("communication_disabled_until" in data) {
                this.communicationDisabledUntil = data.communication_disabled_until;
            }
        }
    }
    return Member;
}());
exports.Member = Member;
