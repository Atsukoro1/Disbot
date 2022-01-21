export declare class User {
    id: string;
    username?: string;
    discriminator?: string;
    avatar?: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string;
    accent_color?: string;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: number;
    premiumType?: number;
    publicFlags?: number;
    /**
    * Creates a new User
    * @class
    * @param {object} [data={}] - User data
    * @see {@link https://discord.com/developers/docs/resources/user#user-object} for further information
    * @returns {User}
    */
    constructor(data: any);
}
