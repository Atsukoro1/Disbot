export class Member {
    user?: Object;
    nick?: string;
    avatar?: string;
    roles?: Array<String>;
    joinedAt?: any;
    premiumSince?: any;
    deaf?: boolean;
    mute?: boolean;
    pending?: boolean;
    permissions?: string;
    communicationDisabledUntil?: string;

    /**
    * Creates a new member
    * @class
    * @param {object} [data={}] - Member data
    * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object} for further information
    * @returns {Member}
    */
    constructor(data:any) {
        if(data) {
            if("user" in data) {
                this.user = data.user;
            }

            if("nick" in data) {
                this.nick = data.nick;
            }
            
            if("avatar" in data) {
                this.avatar = data.avatar;
            }

            if("roles" in data) {
                this.roles = data.roles;
            }

            if("joined_at" in data) {
                this.joinedAt = new Date(data.joined_at).getTime();
            }

            if("premium_since" in data) {
                this.premiumSince = new Date(data.premium_since).getTime();
            }

            if("deaf" in data) {
                this.deaf = Boolean(data.deaf);
            }

            if("mute" in data) {
                this.mute = Boolean(data.mute);
            }

            if("pending" in data) {
                this.pending = data.pending;
            }

            if("permissions" in data) {
                this.permissions = data.permissions;
            }

            if("communication_disabled_until" in data) {
                this.communicationDisabledUntil = data.communication_disabled_until;
            }
        }
    }


}