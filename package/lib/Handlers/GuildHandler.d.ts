import { Guild } from "../Constructors/Guild";
interface IModifyGuild {
    name?: string;
    region?: string;
    verificationLevel?: number;
    defaultMessageNotifications?: number;
    explicitContentFilter?: number;
    afkChannelId?: string;
    afkTimeout?: number;
    icon?: File;
    ownerId?: string;
    splash?: File;
    discoverySplash?: File;
    banner?: File;
    systemChannelId?: string;
    systemChannelFlags?: number;
    rulesChannelId?: string;
    publicUpdatesChannelId?: string;
    preferredLocale?: string;
    features?: Array<object>;
    description?: string;
    premiumProgressBarEnabled?: boolean;
}
export default class GuildHandler {
    guild: Guild;
    constructor(data: Guild);
    get(params: string | undefined): Promise<Guild | boolean>;
    getPreview(params: string | undefined): Promise<Guild | boolean>;
    modify(params: IModifyGuild | any): Promise<void>;
}
export {};
