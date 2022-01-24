import { Member } from "./Member";
import { Channel } from "./Channel";
import {
    DefaultMessageNoficationLevelTypes,
    ExplicitContentFilterTypes,
    MFALevelTypes,
    VerificationLevelTypes,
    GuildNSFWLevelTypes,
    PremiumTierTypes
} from "./Types/GuildTypes";
import GuildHandler from "../Handlers/GuildHandler";

interface IModifyGuild {
    name?: string;
    region?: string;
    verificationLevel?: number;
    defaultMessageNotifications?: number;
    explicitContentFilter?: number;
    afkChannelId?: string;
    afkTimeout?: number;
    icon?: string,
    ownerId?: string;
    splash?: string,
    discoverySplash?: File,
    banner?: string,
    systemChannelId?: string;
    systemChannelFlags?: number;
    rulesChannelId?: string;
    publicUpdatesChannelId?: string;
    preferredLocale?: string;
    features?: Array<object>,
    description?: string;
    premiumProgressBarEnabled?: boolean;
}

export class Guild {
    id!: string;
    name!: string;
    icon?: string;
    icon_hash?: string;
    splash?: string;
    discovery_splash?: string;
    owner?: boolean;
    owner_id!: string;
    permissions?: string;
    region?: string;
    afk_channel_id!: string;
    afk_timeout!: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;
    verification_level!: number;
    default_message_notifications!: number;
    explicit_content_filter!: number;
    roles!: Array<object>;
    emojis!: Array<object>;
    features!: Array<object>;
    mfa_level!: number;
    application_id!: string;
    system_channel_id!: string;
    system_channel_flags!: number;
    rules_channel_id!: number;
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
    vanity_url_code!: string;
    description!: string;
    banner!: string;
    premium_tier!: number;
    premium_subscription_count?: number;
    preferred_locale!: string;
    public_updates_channel_id!: string;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: object;
    nsfw_level!: number;
    stage_instances?: Array<object>;
    stickers?: Array<object>;
    guild_scheduled_events?: Array<object>;
    premium_progress_bar_enabled!: boolean;

    constructor(data: any) {
        if("id" in data) {
            this.id = data.id;
        }

        if("name" in data) {
            this.name = data.name;
        }

        if("icon" in data) {
            this.icon = data.icon;
        }

        if("icon_hash" in data) {
            this.icon_hash = data.icon_hash;
        }

        if("splash" in data) {
            this.splash = data.splash;
        }

        if("discovery_splash" in data) {
            this.discovery_splash = data.discovery_splash;
        }

        if("owner" in data) {
            this.owner = data.owner;
        }

        if("owner_id" in data) {
            this.owner_id = data.owner_id;
        }

        if("permissions" in data) {
            this.permissions = data.permissions;
        }

        if("region" in data) {
            this.region = data.region;
        }

        if("afk_channel_id" in data) {
            this.afk_channel_id = data.afk_channel_id;
        }

        if("afk_timeout" in data) {
            this.afk_timeout = data.afk_timeout;
        }

        if("widget_enabled" in data) {
            this.widget_enabled = data.widget_enabled;
        }

        if("widget_channel_id" in data) {
            this.widget_channel_id = data.widget_channel_id;
        }

        if("verification_level" in data) {
            let type:any = VerificationLevelTypes.find(t => t[1] === data.verification_level)
            this.verification_level = type[0];
        }

        if("default_message_notifications" in data) {
            let type:any = DefaultMessageNoficationLevelTypes.find(t => t[1] === data.default_message_notifications)
            this.default_message_notifications = type[0];
        }

        if("explicit_content_filter" in data) {
            let type:any = ExplicitContentFilterTypes.find(t => t[1] === data.explicit_content_filter)
            this.explicit_content_filter = type[0];
        }

        if("roles" in data) {
            this.roles = data.roles;
        }

        if("emojis" in data) {
            this.emojis = data.emojis;
        }

        if("features" in data) {
            this.features = data.features;
        }

        if("mfa_level" in data) {
            let type:any = MFALevelTypes.find(t => t[1] === data.mfa_level)
            this.mfa_level = type[0];
        }

        if("application_id" in data) {
            this.application_id = data.application_id;
        }

        if("system_channel_id" in data) {
            this.system_channel_id = data.system_channel_id;
        }

        if("system_channel_flags" in data) {
            this.system_channel_flags = data.system_channel_flags;
        }

        if("rules_channel_id" in data) {
            this.rules_channel_id = data.rules_channel_id;
        }

        if("joined_at" in data) {
            this.joined_at = data.joined_at;
        }

        if("large" in data) {
            this.large = data.large;
        }

        if("unavailable" in data) {
            this.unavailable = data.unavailable;
        }

        if("member_count" in data) {
            this.member_count = data.member_count;
        }

        if("voice_states" in data) {
            this.voice_states = data.voice_states;
        }

        if("members" in data) {
            this.members = data.members?.map((m: object) => new Member(m));
        }

        if("channels" in data) {
            this.channels = data.channels?.map((c: object) => new Channel(c));
        }

        if("threads" in data) {
            this.threads = data.threads;
        }

        if("presences" in data) {
            this.presences = data.presences;
        }

        if("max_presences" in data) {
            this.max_presences = data.max_presences;
        }

        if("max_members" in data) {
            this.max_members = data.max_members;
        }

        if("vanity_url_code" in data) {
            this.vanity_url_code = data.vanity_url_code;
        }   

        if("description" in data) {
            this.description = data.description;
        }

        if("banner" in data) {
            this.banner = data.banner;
        }

        if("premium_tier" in data) {
            let type:any = PremiumTierTypes.find(t => t[1] === data.premium_tier)
            this.premium_tier = type[0];
        }

        if("premium_subscription_count" in data) {
            this.premium_subscription_count = data.premium_subscription_count;
        }

        if("preferred_locale" in data) {
            this.preferred_locale = data.preferred_locale;
        }

        if("public_updates_channel_id" in data) {
            this.public_updates_channel_id = data.public_updates_channel_id;
        }

        if("max_video_channel_users" in data) {
            this.max_video_channel_users = data.max_video_channel_users;
        }

        if("approximate_member_count" in data) {
            this.approximate_member_count = data.approximate_member_count;
        }

        if("approximate_presence_count" in data) {
            this.approximate_presence_count = data.approximate_presence_count;
        }

        if("welcome_screen" in data) {
            this.welcome_screen = data.welcome_screen;
        }

        if("nsfw_level" in data) {
            let type:any = GuildNSFWLevelTypes.find(t => t[1] === data.nsfw_level)
            this.nsfw_level = type[0];
        }

        if("stage_instances" in data) {
            this.stage_instances = data.stage_instances;
        }

        if("stickers" in data) {
            this.stickers = data.stickers;
        }

        if("guild_scheduled_events" in data) {
            this.guild_scheduled_events = data.guild_scheduled_events;
        }

        if("premium_progress_bar_enabled" in data) {
            this.premium_progress_bar_enabled = data.premium_progress_bar_enabled;
        }
    }

    /**
     * Fetch guild
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.get("482913781983712939");
     * @returns {Guild | boolean}
     */
    async get(params: string | undefined) : Promise<Guild | boolean> {
        const handler = new GuildHandler(this);
        const response = await handler.get(params);
        return response;
    }

    /**
     * Fetch guild previes
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.getGuildPreview("482913781983712939");
     * @returns {Guild | boolean}
     */
    async getGuildPreview(params: string | undefined) : Promise<Guild | boolean> {
        const handler = new GuildHandler(this);
        const response = await handler.getPreview(params);
        return response;
    }

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
    async modify(params: IModifyGuild) : Promise<Guild | boolean> {
        const handler = new GuildHandler(this);
        const response = await handler.modify(params);
        return response;
    }

    /**
     * Delete a guild
     * @param {string} [id] - id of the guild
     */
    delete(params: string) : void {
        new GuildHandler(this).delete(params);
    }

    /**
     * Fetch all guild channels
     * @param {string} [id] - id of the guild
     * @returns {Promise<Array<Channel> | boolean>}
     */
    async fetchChannels(params: string) : Promise<Array<Channel> | boolean> {
        const handler = new GuildHandler(this);
        const response = await handler.fetchChannels(params);
        return response;
    }
}