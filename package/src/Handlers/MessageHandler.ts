import Message from "../Constructors/Message";
import sendRequest from "./RequestHandler"

export default class MessageHandler {
    message:Message;

    constructor(data:Message) {
        this.message = data;
    }

    async react(params:string) {
        if(!params) throw new Error("You must provide a emoji to react with.");
        await sendRequest("PUT", {}, encodeURI(`/channels/${this.message.channel?.id}/messages/${this.message.id}/reactions/${params}/@me`), global.token);
    }

    async delete() {
        await sendRequest("DELETE", "", `/channels/${this.message.channel?.id}/messages/${this.message.id}`, global.token);
    }

    async bulkDelete(params:Array<String>) {
        if(!params && typeof(params) != "object") throw new Error("Please specify messages array");
                
        await sendRequest("POST", { messages: params }, `/channels/${this.message.channel?.id}/messages/bulk-delete`, global.token)
    }

    async removeAllReactions() {
        await sendRequest("DELETE", undefined, `/channels/${this.message.channel?.id}/messages/${this.message.id}/reactions`, global.token);
    }

    async removeOwnReaction(params:string) {
        if(!params) throw new Error("You must provide a emoji to remove.");
        await sendRequest("DELETE", undefined, encodeURI(`/channels/${this.message.channel?.id}/messages/${this.message.id}/reactions/${params}/@me`), global.token);
    }

    async removeUserReaction(params:any) {
        if(!params.userId) throw new Error("You must provide a user id of the reaction author.");
        if(!params.emoji) throw new Error("You must provide a emoji to remove.");

        await sendRequest("DELETE", undefined, encodeURI(`/channels/${this.message.channel?.id}/messages/${this.message.id}/reactions/${params.emoji}/${params.userId}`), global.token);
    }

    async getReactions(params:any) {
        if(!params.emoji) throw new Error("You must provide a emoji to get.");

        var query:string = "";
        if(params.limit) query += `?limit=${params.limit}`;
        if(params.after) query += `&after=${params.after}`;

        const response = await sendRequest("GET", undefined, encodeURI(`/channels/${this.message.channel?.id}/messages/${this.message.id}/reactions/${params.emoji}${query}`), global.token);
        return response;
    }

    async deleteAllReactionsForEmoji(params:string) {
        if(!params) throw new Error("You must provide a emoji to delete.");
        await sendRequest("DELETE", undefined, encodeURI(`/channels/${this.message.channel?.id}/messages/${this.message.id}/reactions/${params}`), global.token);
    }

    async edit(params:any) {
        var body:any = {};
        if(typeof(params) != "object") {
            body.content = params;
        } else {
            body = params;
        }

        const response = await sendRequest("PATCH", body, `/channels/${this.message.channel?.id}/messages/${this.message.id}`, global.token);
        if(!response) return false;
        return response;
    }
}