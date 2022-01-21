export declare class Member {
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
    constructor(data: any);
}
