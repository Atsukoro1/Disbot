import MessageHandler from "../Handlers/MessageHandler";

import MessageTypes from "./Types/MessageType";

import { Reaction } from "./Reaction";
import { Channel } from "./Channel";
import { Member } from "./Member";
import { User } from "./User";
import { Embed } from "./Embed";

export class Message {
    type?: number;
    guildId?: string;
    id?: string;
    createdAt?: Date;
    editedTimestamp?: Date;
    content?: string;
    pinned?: boolean;
    tts?: boolean;
    referencedMessage?: Message;
    mentionEveryone?: boolean;
    attachments?: object;
    embeds?: Array<Embed>;
    reactions?: Array<Reaction>;
    webhookId?: string;
    activity?: object;
    nonce?: number | string;
    interaction?: object;
    thread?: Channel;
    applicationId?: string;
    stickerItems?: Array<object>;
    member?:Member;
    application?: object;
    mentions?: object;
    mentionRoles?: object;
    mentionChannels?: Array<object>;
    author?: User;
    channel?: Channel;

    /**
    * Creates a new message
    * @class
    * @param {object} [data={}] - Message data
    * @see {@link https://discord.com/developers/docs/resources/channel#message-object} for further information
    * @returns {Message}
    */
    constructor(data:any) {
        if(data) {
            if("type" in data) {
                let type:any = MessageTypes.find(m => m[1] === data.type)
                this.type = type[0] ? type[0] : MessageTypes[0][0];
            }
    
            this.guildId = data.guild_id;
    
            if ("id" in data) {
                this.id = data.id;
            }

            if ("channel_id" in data) {
                this.channel = new Channel({ id:data.channel_id });
            }
    
            if ("timestamp" in data) {
                this.createdAt = new Date(data.timestamp)
            }
    
            if ("edited_timestamp" in data) {
                this.editedTimestamp = data.edited_timestamp
            }
    
            if ("content" in data) {
                this.content = data.content
            }
    
            if ("pinned" in data) {
                this.pinned = Boolean(data.pinned)
            }
    
            if ("tts" in data) {
                this.tts = Boolean(data.tts)
            }
    
            if ("referenced_message" in data) {
                this.referencedMessage = new Message(data.referenced_message)
            }
    
            if ("mention_everyone" in data) {
                this.mentionEveryone = data.mention_everyone;
            }
    
            if ("attachments" in data) {
                this.attachments = data.attachments;
            }
    
            if ("embeds" in data) {
                this.embeds = data.embeds.map((embed:object) => new Embed(embed));
            }
    
            if ("reactions" in data) {
                this.reactions = data.reactions.map((r:object) => new Reaction(r));
            }
    
            if ("webhook_id" in data) {
                this.webhookId = data.webhook_id;
            }
    
            if ("activity" in data) {
                this.activity = data.activity;
            }
    
            if ("application" in data) {
                this.application = data.application;
            }
    
            if ("application_id" in data) {
                this.applicationId = data.application_id;
            }
    
            if ("nonce" in data) {
                this.nonce = data.nonce;
            }
    
            if ("interaction" in data) {
                this.interaction = data.interaction;
            }
    
            if ("thread" in data) {
                this.thread = data.thread;
            }
    
            if ("sticker_items" in data) {
                this.stickerItems = data.sticker_items;
            }
    
            if ("member" in data) {
                this.member = new Member(data.member);
            }

            if ("author" in data) {
                this.author = new User(data.author);
            }

            if ("mentions" in data) {
                this.mentions = data.mentions;
            }

            if ("mention_roles" in data) {
                this.mentionRoles = data.mention_roles;
            }

            if ("mention_channels" in data) {
                this.mentionChannels = data.mention_channels;
            }

            if ("mention_everyone" in data) {
                this.mentionEveryone = data.mention_everyone;
            }
        }
    }

    /**
     * Reacts with an unicode emoji on a message
     * @type {string} emoji - Emoji to react with
     * @example
     * // React with a custom unicode emoji
     * message.react("💩")
     */
    react(params:string) {
        new MessageHandler(this).react(params);
    };

    /**
     * Delete a message from channel
     * @example
     * // Delete a message
     * message.delete()
     */
    delete() {
        new MessageHandler(this).delete();
    };

    /**
     * Bulk delete messages from channel
     * @type {Array<String>} messages - Array of message ids
     * @example
     * // Bulk delete messages
     * message.bulkDelete(["931960572449280020", "931960572449280021"])
     */
    bulkDelete(params:Array<String>) {
        new MessageHandler(this).bulkDelete(params);
    };

    /**
     * Remove all reactions from message
     * @example
     * // Remove all reactions from message
     * message.removeAllReactions()
     */
    removeAllReactions() {
        new MessageHandler(this).removeAllReactions();
    };

    /**
     * Remove own reaction from message
     * @type {string} emoji - Emoji to remove
     * @example
     * // Remove own reaction from message
     * message.removeOwnReaction("💩")
     */
    removeOwnReaction(params:string) {
        new MessageHandler(this).removeOwnReaction(params);
    };

    /**
     * Remove a reaction from another user from message
     * @type {string} emoji - Emoji to remove
     * @type {string} userId - User id to remove reaction from
     * @example
     * // Remove a reaction from another user from message
     * message.removeReaction({ emoji: "💩", userId: "1234" })
     */
    removeUserReaction(params:object) {
        new MessageHandler(this).removeUserReaction(params);
    };

    /**
     * Get reactions from message
     * @type {string} emoji - Emoji to get reactions from
     * @type {number|string} limit - Limit of reactions to get
     * @type {number|string} after - Get reactions after this id
     * @example
     * // Get reactions from message
     * message.getReactions({ emoji: "💩", limit: 10, after: "931960572449280020" })
     * @returns {Array<Object>}
     */
    async getReactions(params:object) {
        const handler = new MessageHandler(this)
        const response = await handler.getReactions({ ...params });
        return response;
    };

    /**
     * Delete all reactions for specific emoji
     * @type {string} emoji - Emoji to delete reactions from
     * @example
     * // Delete all reactions for specific emoji
     * message.deleteAllReactionsForEmoji("💩");
     */
    deleteAllReactionsForEmoji(params:string) {
        new MessageHandler(this).deleteAllReactionsForEmoji(params);
    };

    /**
     * Edit a message
     * @type {String} content - Message content
     * @type {Boolean} tts - Text to speech
     * @type {number|string|any} nonce - Nonce
     * @returns {Promise<Message>}
     * @example
     * // Edit message
     * message.edit("Hello!");
     * @example
     * // Send message with options
     * message.edit({
     *    content: "Hello!"
     * }); 
     */
    async edit(params:any) {
        const handler = new MessageHandler(this)
        const response = await handler.edit(params);
        if(!response) return false;
        return new Message(response);
    }
};

export default Message;
