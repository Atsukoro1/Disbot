import { Member } from "./Member";
import { Channel } from "./Channel";
interface IModifyGuild {
    name?: string;
    region?: string;
    verificationLevel?: number;
    defaultMessageNotifications?: number;
    explicitContentFilter?: number;
    afkChannelId?: string;
    afkTimeout?: number;
    icon?: string;
    ownerId?: string;
    splash?: string;
    discoverySplash?: File;
    banner?: string;
    systemChannelId?: string;
    systemChannelFlags?: number;
    rulesChannelId?: string;
    publicUpdatesChannelId?: string;
    preferredLocale?: string;
    features?: Array<object>;
    description?: string;
    premiumProgressBarEnabled?: boolean;
}
export declare class Guild {
    id: string;
    name: string;
    icon?: string;
    icon_hash?: string;
    splash?: string;
    discovery_splash?: string;
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    region?: string;
    afk_channel_id: string;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: Array<object>;
    emojis: Array<object>;
    features: Array<object>;
    mfa_level: number;
    application_id: string;
    system_channel_id: string;
    system_channel_flags: number;
    rules_channel_id: number;
    joined_at?: string;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    voice_states?: Array<object>;
    members?: Array<Member>;
    channels?: Array<Channel>;
    threads?: Array<object>;
    presences?: Array<object>;
    max_presences?: Array<object>;
    max_members?: number;
    vanity_url_code: string;
    description: string;
    banner: string;
    premium_tier: number;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id: string;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: object;
    nsfw_level: number;
    stage_instances?: Array<object>;
    stickers?: Array<object>;
    guild_scheduled_events?: Array<object>;
    premium_progress_bar_enabled: boolean;
    constructor(data: any);
    /**
     * Fetch guild
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.get("482913781983712939");
     * @returns {Guild | boolean}
     */
    get(params: string | undefined): Promise<Guild | boolean>;
    /**
     * Fetch guild previes
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.getGuildPreview("482913781983712939");
     * @returns {Guild | boolean}
     */
    getGuildPreview(params: string | undefined): Promise<Guild | boolean>;
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
    modify(params: IModifyGuild): Promise<Guild | boolean>;
    /**
     * Delete a guild
     * @param {string} [id] - id of the guild
     */
    delete(params: string): void;
    /**
     * Fetch all guild channels
     * @param {string} [id] - id of the guild
     * @returns {Promise<Array<Channel> | boolean>}
     */
    fetchChannels(params: string): Promise<Array<Channel> | boolean>;
}
export {};
