import { Guild } from "../Constructors/Guild";
import sendRequest from "./RequestHandler";

interface IModifyGuild {
    name?: string;
    region?: string;
    verificationLevel?: number;
    defaultMessageNotifications?: number;
    explicitContentFilter?: number;
    afkChannelId?: string;
    afkTimeout?: number;
    icon?: File,
    ownerId?: string;
    splash?: File,
    discoverySplash?: File,
    banner?: File,
    systemChannelId?: string;
    systemChannelFlags?: number;
    rulesChannelId?: string;
    publicUpdatesChannelId?: string;
    preferredLocale?: string;
    features?: Array<object>,
    description?: string;
    premiumProgressBarEnabled?: boolean;
}

export default class GuildHandler {
    guild!: Guild;

    constructor(data: Guild) {
        this.guild = data;
    }

    async get(params: string | undefined) : Promise<Guild | boolean> {
        var id;
        if(!params) id = this.guild.id;

        const response = await sendRequest("GET", {}, `/guilds/${id}`, global.token);
        if(!response) return false;
        return new Guild(response);
    }

    async getPreview(params: string | undefined) : Promise<Guild | boolean> {
        var id;
        if(!params) id = this.guild.id;

        const response = await sendRequest("GET", {}, `/guilds/${id}/preview`, global.token);
        if(!response) return false;
        return new Guild(response);
    }

    async modify(params: IModifyGuild | any) {
        let body:any = {};

        if("name" in params) {
            body.name = params.name;
        }

        if("region" in params) {
            body.region = params.region;
        }

        if("verificationLevel" in params) {
            body.verification_level = params.verificationLevel;
        }

        if("defaultMessageNotifications" in params) {
            body.default_message_notifications = params.defaultMessageNotifications;
        }

        if("explicitContentFilter" in params) {
            body.explicit_content_filter = params.explicitContentFilter;
        }

        if("afkChannelId" in params) {
            body.afk_channel_id = params.afkChannelId;
        }

        if("afkTimeout" in params) {
            body.afk_timeout = params.afkTimeout;
        }

        console.log(body);
    }
}