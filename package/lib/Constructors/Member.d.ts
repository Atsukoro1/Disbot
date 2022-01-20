export declare class Member {
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
    /**
    * Creates a new member
    * @class
    * @param {object} [data={}] - Member data
    * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object} for further information
    * @returns {Member}
    */
    constructor(data: any);
}
