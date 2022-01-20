export declare class User {
    id: string | undefined;
    username: string | undefined;
    discriminator: string | undefined;
    avatar: string | undefined;
    bot: boolean | undefined;
    system: boolean | undefined;
    mfa_enabled: boolean | undefined;
    banner: string | undefined;
    accent_color: string | undefined;
    locale: string | undefined;
    verified: boolean | undefined;
    email: string | undefined;
    flags: number | undefined;
    premiumType: number | undefined;
    publicFlags: number | undefined;
    /**
    * Creates a new User
    * @class
    * @param {object} [data={}] - User data
    * @see {@link https://discord.com/developers/docs/resources/user#user-object} for further information
    * @returns {User}
    */
    constructor(data: any);
}
