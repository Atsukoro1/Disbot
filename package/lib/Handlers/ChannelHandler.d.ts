import Channel from "../Constructors/Channel";
export default class ChannelHandler {
    channel: Channel;
    constructor(data: Channel);
    send(params: any): Promise<any>;
    delete(): Promise<void>;
    fetchMessages(params: object | any): Promise<any>;
    fetchMessage(params: string): Promise<any>;
    modifyPermissions(params: object | any): Promise<boolean>;
    removePermissions(params: string): void;
    fetchInvites(): Promise<any>;
    createInvite(params: object | any): Promise<any>;
    typing(): void;
    fetchPinnedMessages(): Promise<any>;
    pinMessage(params: string): void;
    unpinMessage(params: string): void;
}
