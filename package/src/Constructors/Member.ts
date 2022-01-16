export default class Member {
    user: Object | undefined;
    nick: string | undefined;
    avatar: string | undefined;
    roles: Array<String> | undefined;
    joinedAt: any;
    premiumSince: any;
    deaf: boolean | undefined;
    mute: boolean | undefined;
    pending: boolean | undefined;
    permissions: string | undefined;
    communicationDisabledUntil: any;

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