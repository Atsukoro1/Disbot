import Message from "./Message";
export declare class Channel {
    id: string;
    type?: number;
    guildId?: string;
    position?: number;
    permissions_overwrites?: Array<Object>;
    name?: string;
    topic?: string;
    nsfw?: boolean;
    lastMessageId?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: Array<Object>;
    icon?: string;
    ownerId?: string;
    applicationId?: string;
    parentId?: string;
    lastPinTimestamp?: string;
    rtcRegion?: string;
    videoQualityMode?: number;
    messageCount?: number;
    memberCount?: number;
    threadMetadata?: Object;
    member?: Object;
    defaultAutoArchiveDuration?: number;
    permissions?: string;
    /**
    * Creates a new channel
    * @class
    * @param {object} [data={}] - Channel data
    * @see {@link https://discord.com/developers/docs/resources/channel#channel-object} for further information
    * @returns {Channel}
    */
    constructor(data: any);
    /**
     * Send message to channel
     * @type {String} content - Message content
     * @type {Boolean} tts - Text to speech
     * @type {number|string|any} nonce - Nonce
     * @returns {Promise<Message>}
     * @example
     * // Send message
     * channel.send("Hello!");
     * @example
     * // Send message with options
     * channel.send({
     *    content: "Hello!"
     * });
     */
    send(params: any): Promise<Message>;
    /**
     * Delete channel
     * @returns {Promise<void>}
     * @example
     * // Delete channel
     * channel.delete();
     */
    delete(): Promise<void>;
    /**
     * Fetch channel messages
     * @type {number} limit - Limit
     * @type {number} before - Before
     * @type {number} after - After
     * @type {number} around - Around
     * @returns {Promise<Array<Message>>}
     * @example
     * // Fetch channel messages
     * channel.fetchMessages({ limit: 10, after: 1234567890123456789, before: 1234567890123456789 });
     */
    fetchMessages(params: any): Promise<any>;
    /**
     * Fetch specific message from a channel
     * @type {number} - Id of the message you want to fetch
     * @returns {Promise<Message>}
     * @example
     * // Fetch specific message
     * channel.fetchMessage("1234567890123456789");
     */
    fetchMessage(params: string): Promise<Message>;
    /**
     * Modify permissions of a channel for specific user or role
     * @type {string} id - Id of the user or role
     * @type {boolean} user - if id is a user or not
     * @type {Array<string>} allow - Permissions to allow
     * @type {Array<string>} deny - Permissions to deny
     * @returns {Promise<void>}
     * @example
     * // Modify permissions of a channel for specific user or role
     * channel.modifyPermissions({
     *   id: "1234567890123456789",
     *   user: true,
     *   allow: ["READ_MESSAGES", "SEND_MESSAGES"]
     * });
     */
    modifyPermissions(params: object): Promise<void>;
    /**
     * Remove all permissions for specific role or user in channel
     * @type {string} id - Id of the user or role
     * @example
     * // Remove all permissions for specific role or user in channel
     * channel.removePermissions({ id: "1234567890123456789" });
     */
    removePermissions(params: string): Promise<void>;
    /**
     * Fetch all invites from channel
     * @returns {Promise<Array<Object>>}
     * @example
     * // Fetch all invites from channel
     * channel.fetchInvites();
     */
    fetchInvites(): Promise<any>;
    /**
     * Create an invite for channel
     * @type {number} maxAge - Max age of the invite
     * @type {number} maxUses - Max uses of the invite
     * @type {boolean} temporary - Temporary or not
     * @type {boolean} unique - Unique or not
     * @type {number} targetType - Type of the target
     * @type {string} targetUserId - Targer user id
     * @type {string} targetApplicationId - Target application id
     * @returns {Promise<Invite>}
     * @example
     * // Create an invite for channel
     * channel.createInvite({ unique: false, maxAge: 0, maxUses: 0, temporary: false });
     */
    createInvite(params: any): Promise<any>;
    /**
     * Trigger a typing indicator in channel
     * @example
     * // Trigger a typing indicator in channel
     * channel.typing();
     */
    typing(): void;
    /**
     * Fetch pinned messages from channel
     * @returns {Promise<Array<Message>>}
     * @example
     * // Fetch pinned messages from channel
     * channel.fetchPinnedMessages();
     */
    fetchPinnedMessages(): Promise<any>;
    /**
     * Pin a message in channel
     * @type {string} messageId - Id of the message you want to pin
     * @example
     * // Pin a message in channel
     * channel.pinMessage("1234567890123456789");
     */
    pinMessage(params: string): void;
    /**
     * Unpin a message in channel
     * @type {string} messageId - Id of the message you want to unpin
     * @example
     * // Unpin a message in channel
     * channel.unpinMessage("1234567890123456789");
     */
    unpinMessage(params: string): void;
    /**
     * Follow news channel
     * @example
     * // Follow news channel
     * channel.followNewsChannel("1234567890123456789");
     */
    followNewsChannel(params: string): void;
}
