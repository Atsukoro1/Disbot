import { Guild } from "../Constructors/Guild";
import sendRequest from "./RequestHandler";
import axios from "axios";
import { extname } from "path";
import { Channel } from "../Constructors/Channel";
const fs = require("fs").promises;

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

    async modify(params: any) : Promise<Guild | boolean> {
        async function getBase64Data(p:string) {
            const urlRegexp = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i;

            if(p.match(urlRegexp)) {
                // String is url
                var ArrayBuffImageData = await axios.get(p, { responseType: 'arraybuffer' });
                const database64 = `data:image/${extname(p).replace(".", "")};base64,${Buffer.from(ArrayBuffImageData.data).toString("base64")}`;
    
                return database64;
            } else {
                if(![".jpg", ".png", ".gif"].includes(extname(p))) throw new Error("This file is not an image.");
                const data = await fs.readFile(p);
                const database64 = `data:image/${extname(p).replace(".", "")};base64,${data.toString("base64")}`;
                return database64;
            }
        }

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

        if("icon" in params) {
            const b64d = await getBase64Data(params.icon);
            body.icon = b64d;
        }

        if("ownerId" in params) {
            body.owner_id = params.ownerId;
        }

        if("splash" in params) {
            const b64d = await getBase64Data(params.splash);
            body.splash = b64d;
        }

        if("discoverySplash" in params) {
            const b64d = await getBase64Data(params.discoverySplash);
            body.discovery_splash = b64d;
        }

        if("banner" in params) {
            const b64d = await getBase64Data(params.banner);
            body.banner = b64d;
        }

        if("systemChannelId" in params) {
            body.system_channel_id = params.systemChannelId;
        }

        if("systemChannelFlags" in params) {
            body.system_channel_flags = params.systemChannelFlags;
        }

        if("rulesChannelId" in params) {
            body.rules_channel_id = params.rulesChannelId;
        }

        if("publicUpdatesChannelId" in params) {
            body.public_updates_channel_id = params.publicUpdatesChannelId;
        }

        if("preferredLocale" in params) {
            body.preferred_locale = params.preferredLocale;
        }

        if("features" in params) {
            body.features = params.features;
        }

        if("description" in params) {
            body.description = params.description;
        }

        if("premiumProgressBarEnabled" in params) {
            body.premium_progress_bar_enabled = params.premiumProgressBarEnabled;
        }

        const response = await sendRequest("PATCH", body, `/guilds/${this.guild.id}`, global.token);
        if(!response) return false;
        return new Guild(response);
    }

    delete(params: string) : void {
        sendRequest("DELETE", {}, `/guilds/${params ? params : this.guild.id}`, global.token);
    }

    async fetchChannels(params: string) : Promise<Array<Channel> | boolean> {
        const response = await sendRequest("GET", {}, `/guilds/${params ? params : this.guild.id}/channels`, global.token);
        if(!response) return false;
        return response.map((ch: object) => new Channel(ch));
    }
}