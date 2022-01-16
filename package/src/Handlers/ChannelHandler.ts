import Channel from "../Constructors/Channel";
import sendRequest from "./RequestHandler";

export default class ChannelHandler {
    channel:Channel;

    constructor(data:Channel) {
        this.channel = data;
    }

    async send(params:any) {
        var body:any = {};
        if(typeof(params) != "object") {
            body.content = params;
        } else {
            body = params;
        }

        const response = await sendRequest("POST", body, `/channels/${this.channel.id}/messages`, global.token);
        if(!response) return false;
        return response;
    }

    async delete() {
        await sendRequest("DELETE", undefined, `/channels/${this.channel.id}`, global.token);
    }

    async fetchMessages(params:object|any) {
        var query:string = "";

        if(params.limit) query += `?limit=${params.limit}`;
        if(params.before) query += `&before=${params.before}`;
        if(params.after) query += `&after=${params.after}`;
        if(params.around) query += `&around=${params.around}`;

        const response = await sendRequest("GET", undefined, `/channels/${this.channel.id}/messages${query}`, global.token);
        if(!response) return false;
        return response;
    }

    async fetchMessage(params:string) {
        if(!params) throw new Error("You must provide a message id.");
        const response = await sendRequest("GET", undefined, `/channels/${this.channel.id}/messages/${params}`, global.token);
        if(!response) return false;
        return response;
    }

    async modifyPermissions(params:object|any) {
        if(!params.allow && !params.deny) throw new Error("Please provide some permissions to allow or deny!");
        if(typeof(params.allow) != "undefined" && typeof(params.allow) != "object") throw new Error("Please provide a valid permissions to allow");
        if(typeof(params.deny) != "undefined" && typeof(params.deny) != "object") throw new Error("Please provide a valid permissions to allow");
        if(typeof(params.user) == "undefined" || typeof(params.user) != "boolean") throw new Error("Please provide a Boolean user value (if id is user or not)");
        if(!params.id) throw new Error("Please provide a user id or a role id");

        function countPermissions(permissionArray:Array<string>) {
            const permsArray = [
                ['CREATE_INSTANT_INVITE', 1 << 0],
                ['KICK_MEMBERS', 1 << 1],
                ['BAN_MEMBERS', 1 << 2],
                ['ADMINISTRATOR', 1 << 3],
                ['MANAGE_CHANNELS', 1 << 4],
                ['MANAGE_GUILD', 1 << 5],
                ['ADD_REACTIONS', 1 << 6],
                ['VIEW_AUDIT_LOG', 1 << 7],
                ['PRIORITY_SPEAKER', 1 << 8],
                ['STREAM', 1 << 9],
                ['VIEW_CHANNEL', 1 << 10],
                ['SEND_MESSAGES', 1 << 11],
                ['SEND_TTS_MESSAGES', 1 << 12],
                ['MANAGE_MESSAGES', 1 << 13],
                ['EMBED_LINKS', 1 << 14],
                ['ATTACH_FILES', 1 << 15],
                ['READ_MESSAGE_HISTORY', 1 << 16],
                ['MENTION_EVERYONE', 1 << 17],
                ['USE_EXTERNAL_EMOJIS', 1 << 18],
                ['VIEW_GUILD_INSIGHTS', 1 << 19],
                ['CONNECT', 1 << 20],
                ['SPEAK', 1 << 21],
                ['MUTE_MEMBERS', 1 << 22],
                ['DEAFEN_MEMBERS', 1 << 23],
                ['MOVE_MEMBERS', 1 << 24],
                ['USE_VAD', 1 << 25],
                ['CHANGE_NICKNAME', 1 << 26],
                ['MANAGE_NICKNAMES', 1 << 27],
                ['MANAGE_ROLES', 1 << 28],
                ['MANAGE_WEBHOOKS', 1 << 29],
                ['MANAGE_EMOJIS_AND_STICKERS', 1 << 30],
                ['USE_APPLICATION_COMMANDS', 1 << 31],
                ['REQUEST_TO_SPEAK', 1 << 32],
                ['MANAGE_EVENTS', 1 << 33],
                ['MANAGE_THREADS', 1 << 34],
                ['CREATE_PUBLIC_THREADS', 1 << 35],
                ['CREATE_PRIVATE_THREADS', 1 << 36],
                ['USE_EXTERNAL_STICKERS', 1 << 37],
                ['SEND_MESSAGES_IN_THREADS', 1 << 38],
                ['START_EMBEDDED_ACTIVITIES', 1 << 39],
                ['MODERATE_MEMBERS',(1 << 4)]
            ];
        
            var finalPerms = 0;
            for(var i = 0; i < permissionArray.length; i++) {
                for(var j = 0; j < permsArray.length; j++) {
                    if(permsArray[j][0] == permissionArray[i]) {
                        finalPerms += parseInt(permsArray[j][1].toString());
                    }
                }
            }
        
            return finalPerms;
        }

        var body:any = {};

        if(params.allow) body.allow = countPermissions(params.allow);
        if(params.deny) body.deny = countPermissions(params.deny);
        body.id = params.id;
        body.type = params.user;
 
        await sendRequest("PUT", body, `/channels/${this.channel.id}/permissions/${body.id}`, global.token);
        return true;
    }

    removePermissions(params:string) {
        if(!params) throw new Error("You must provide a user id or a role id");
        sendRequest("DELETE", undefined, `/channels/${this.channel.id}/permissions/${params}`, global.token);
    };

    async fetchInvites() {
        const response = await sendRequest("GET", undefined, `/channels/${this.channel.id}/invites`, global.token);
        return response;
    }

    async createInvite(params:object|any) {
        var body:any = {};

        if(params.maxAge) body.max_age = params.maxAge;
        if(params.maxUses) body.max_uses = params.maxUses;
        if(params.temporary) body.temporary = params.temporary;
        if(params.unique) body.unique = params.unique;
        if(params.targetType) body.target_type = params.target_type;
        if(params.targetUserId) body.target_user_id = params.targetUserId;
        if(params.targetApplicationId) body.target_application_id = params.targetApplicationId;


        const response = await sendRequest("POST", body, `/channels/${this.channel.id}/invites`, global.token);
        return response;
    }

    typing() {
        sendRequest("POST", {}, `/channels/${this.channel.id}/typing`, global.token);
    }

    async fetchPinnedMessages() {
        const response = await sendRequest("GET", undefined, `/channels/${this.channel.id}/pins`, global.token);
        return response;
    }

    pinMessage(params:string) {
        if(!params) throw new Error("You must provide a message id");
        sendRequest("PUT", {}, `/channels/${this.channel.id}/pins/${params}`, global.token);
    }

    unpinMessage(params:string) {
        if(!params) throw new Error("You must provide a message id");
        sendRequest("DELETE", {}, `/channels/${this.channel.id}/pins/${params}`, global.token);
    }

    followNewsChannel(params:string) {
        if(!params || typeof(params) != "string") throw new Error("You must provide a channel id");
        sendRequest("POST", { webhook_channel_id: params }, `/channels/${this.channel.id}/followers`, global.token);
    }
}