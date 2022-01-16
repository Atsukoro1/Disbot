import Channel from "./Channel";
export declare class Message {
    type: number | any;
    guildId: string | any;
    id: string | any;
    createdAt: Date | any;
    editedTimestamp: Date | any;
    content: string | any;
    pinned: boolean | any;
    tts: boolean | any;
    referencedMessage: any;
    mentionEveryone: boolean | any;
    attachments: any;
    embeds: any;
    reactions: any;
    webhookId: string | any;
    activity: any;
    nonce: number | string | any;
    interaction: any;
    thread: any;
    applicationId: any;
    stickerItems: any;
    member: any;
    application: any;
    author: object | any;
    channel: Channel | undefined;
    /**
    * Creates a new Message object
    * @class
    * @param {object} data - Message data
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
}
export default Message;
