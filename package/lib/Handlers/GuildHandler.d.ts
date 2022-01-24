import { Guild } from "../Constructors/Guild";
import { Channel } from "../Constructors/Channel";
export default class GuildHandler {
    guild: Guild;
    constructor(data: Guild);
    get(params: string | undefined): Promise<Guild | boolean>;
    getPreview(params: string | undefined): Promise<Guild | boolean>;
    modify(params: any): Promise<Guild | boolean>;
    delete(params: string): void;
    fetchChannels(params: string): Promise<Array<Channel> | boolean>;
}
