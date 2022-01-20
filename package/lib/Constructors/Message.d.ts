import { Reaction } from "./Reaction";
import { Channel } from "./Channel";
import { Member } from "./Member";
import { User } from "./User";
import { Embed } from "./Embed";
export declare class Message {
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
    member?: Member;
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
    constructor(data: any);
    /**
     * Reacts with an unicode emoji on a message
     * @type {string} emoji - Emoji to react with
     * @example
     * // React with a custom unicode emoji
     * message.react("💩")
     */
    react(params: string): void;
    /**
     * Delete a message from channel
     * @example
     * // Delete a message
     * message.delete()
     */
    delete(): void;
    /**
     * Bulk delete messages from channel
     * @type {Array<String>} messages - Array of message ids
     * @example
     * // Bulk delete messages
     * message.bulkDelete(["931960572449280020", "931960572449280021"])
     */
    bulkDelete(params: Array<String>): void;
    /**
     * Remove all reactions from message
     * @example
     * // Remove all reactions from message
     * message.removeAllReactions()
     */
    removeAllReactions(): void;
    /**
     * Remove own reaction from message
     * @type {string} emoji - Emoji to remove
     * @example
     * // Remove own reaction from message
     * message.removeOwnReaction("💩")
     */
    removeOwnReaction(params: string): void;
    /**
     * Remove a reaction from another user from message
     * @type {string} emoji - Emoji to remove
     * @type {string} userId - User id to remove reaction from
     * @example
     * // Remove a reaction from another user from message
     * message.removeReaction({ emoji: "💩", userId: "1234" })
     */
    removeUserReaction(params: object): void;
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
    getReactions(params: object): Promise<any>;
    /**
     * Delete all reactions for specific emoji
     * @type {string} emoji - Emoji to delete reactions from
     * @example
     * // Delete all reactions for specific emoji
     * message.deleteAllReactionsForEmoji("💩");
     */
    deleteAllReactionsForEmoji(params: string): void;
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
    edit(params: any): Promise<false | Message>;
}
export default Message;
