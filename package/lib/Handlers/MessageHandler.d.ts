import Message from "../Constructors/Message";
export default class MessageHandler {
    message: Message;
    constructor(data: Message);
    react(params: string): Promise<void>;
    delete(): Promise<void>;
    bulkDelete(params: Array<String>): Promise<void>;
    removeAllReactions(): Promise<void>;
    removeOwnReaction(params: string): Promise<void>;
    removeUserReaction(params: any): Promise<void>;
    getReactions(params: any): Promise<any>;
    deleteAllReactionsForEmoji(params: string): Promise<void>;
}
