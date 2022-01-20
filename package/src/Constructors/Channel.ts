import ChannelHandler from "../Handlers/ChannelHandler";
import Message from "./Message";
import ChannelTypes from "./Types/ChannelType";

export class Channel {
    id!: string;
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
    constructor(data:any) {
        if(data) {
            if("id" in data) {
                this.id = data.id;
            }

            if("type" in data) {
                let type:any = ChannelTypes.find(m => m[1] === data.type)
                this.type = type[0] ? type[0] : ChannelTypes[0][0];
            }

            if("guild_id" in data) {
                this.guildId = data.guild_id;
            }

            if("position" in data) {
                this.position = data.position;
            }

            if("permission_overwrites" in data) {
                this.permissions_overwrites = data.permission_overwrites;
            }

            if("name" in data) {
                this.name = data.name;
            }

            if("topic" in data) {
                this.topic = data.topic;
            }

            if("nsfw" in data) {
                this.nsfw = data.nsfw;
            }

            if("last_message_id" in data) {
                this.lastMessageId = data.last_message_id;
            }

            if("bitrate" in data) {
                this.bitrate = data.bitrate;
            }

            if("user_limit" in data) {
                this.user_limit = data.user_limit;
            }

            if("rate_limit_per_user" in data) {
                this.rate_limit_per_user = data.rate_limit_per_user;
            }

            if("recipients" in data) {
                this.recipients = data.recipients;
            }

            if("icon" in data) {
                this.icon = data.icon;
            }

            if("owner_id" in data) {
                this.ownerId = data.owner_id;
            }

            if("application_id" in data) {
                this.applicationId = data.application_id;
            }

            if("parent_id" in data) {
                this.parentId = data.parent_id;
            }

            if("last_pin_timestamp" in data) {
                this.lastPinTimestamp = data.last_pin_timestamp;
            }

            if("rtc_region" in data) {
                this.rtcRegion = data.rtc_region;
            }

            if("video_quality_mode" in data) {
                this.videoQualityMode = data.video_quality_mode;
            }

            if("message_count" in data) {
                this.messageCount = data.message_count;
            }

            if("member_count" in data) {
                this.memberCount = data.member_count;
            }

            if("thread_metadata" in data) {
                this.threadMetadata = data.thread_metadata;
            }

            if("member" in data) {
                this.member = data.member;
            }

            if("default_auto_archive_duration" in data) {
                this.defaultAutoArchiveDuration = data.default_auto_archive_duration;
            }

            if("permissions" in data) {
                this.permissions = data.permissions;
            }
        }
    }

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
    async send(params:any) {
        const handler = new ChannelHandler(this)
        const response = await handler.send(params);
        return new Message(response);
    }

    /**
     * Delete channel
     * @returns {Promise<void>}
     * @example
     * // Delete channel
     * channel.delete();
     */
    async delete() {
        new ChannelHandler(this).delete();
    }

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
    async fetchMessages(params:any) {
        const handler = new ChannelHandler(this)
        const response = await handler.fetchMessages(params);
        if(!response) return false;
        return response.map((message:any) => new Message(message));
    }

    /**
     * Fetch specific message from a channel
     * @type {number} - Id of the message you want to fetch
     * @returns {Promise<Message>}
     * @example
     * // Fetch specific message
     * channel.fetchMessage("1234567890123456789");
     */
    async fetchMessage(params:string) {
        const handler = new ChannelHandler(this)
        const response = await handler.fetchMessage(params);
        return new Message(response);
    }     

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
    async modifyPermissions(params:object) {
        new ChannelHandler(this).modifyPermissions(params);
    }

    /**
     * Remove all permissions for specific role or user in channel
     * @type {string} id - Id of the user or role
     * @example
     * // Remove all permissions for specific role or user in channel
     * channel.removePermissions({ id: "1234567890123456789" });
     */
    async removePermissions(params:string) {
        new ChannelHandler(this).removePermissions(params);
    }

    /**
     * Fetch all invites from channel
     * @returns {Promise<Array<Object>>}
     * @example
     * // Fetch all invites from channel
     * channel.fetchInvites();
     */
    async fetchInvites() {
        const handler = new ChannelHandler(this);
        const response = await handler.fetchInvites();
        return response;
    }

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
    async createInvite(params:any) {
        const handler = new ChannelHandler(this);
        const response = await handler.createInvite(params);
        return response;
    }

    /**
     * Trigger a typing indicator in channel
     * @example
     * // Trigger a typing indicator in channel
     * channel.typing();
     */
    typing() {
        new ChannelHandler(this).typing();
    }

    /**
     * Fetch pinned messages from channel
     * @returns {Promise<Array<Message>>}
     * @example
     * // Fetch pinned messages from channel
     * channel.fetchPinnedMessages();
     */
    async fetchPinnedMessages() {
        const handler = new ChannelHandler(this);
        const response = await handler.fetchPinnedMessages();
        if(!response) return false;
        return response.map((message:any) => new Message(message));
    }

    /**
     * Pin a message in channel
     * @type {string} messageId - Id of the message you want to pin
     * @example
     * // Pin a message in channel
     * channel.pinMessage("1234567890123456789");
     */
    pinMessage(params:string) {
        const handler = new ChannelHandler(this).pinMessage(params);
    }

    /**
     * Unpin a message in channel
     * @type {string} messageId - Id of the message you want to unpin
     * @example
     * // Unpin a message in channel
     * channel.unpinMessage("1234567890123456789");
     */
    unpinMessage(params:string) {
        const handler = new ChannelHandler(this).unpinMessage(params);
    }

    /**
     * Follow news channel
     * @example
     * // Follow news channel
     * channel.followNewsChannel("1234567890123456789");
     */
    followNewsChannel(params:string) {
        new ChannelHandler(this).followNewsChannel(params);
    }
}