export declare class Embed {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: string | number;
    footer?: {
        text: string;
        icon_url: string;
    };
    fields?: [
        {
            name: string;
            value: string;
            inline: boolean;
        }
    ] | any;
    image?: {
        url: string;
        height: number;
        width: number;
    };
    thumbnail?: {
        url: string;
        height: number;
        width: number;
    };
    video?: {
        url: string;
        height: number;
        width: number;
    };
    provider?: {
        name: string;
        url: string;
    };
    author?: {
        name: string;
        url: string;
        icon_url: string;
    };
    /**
    * Creates a new embed
    * @class
    * @param {object} [data={}] - Embed data
    * @see {@link https://discord.com/developers/docs/resources/channel#embed-object} for further information
    * @returns {Embed}
    */
    constructor(data: any);
    /**
     * Set title of the embed
     * @param {string} title
     * @returns {Embed}
     */
    setTitle(title: string): Embed;
    /**
     * Set type of the embed
     * @param {string} type
     * @returns {Embed}
     */
    setType(type: string): Embed;
    /**
     * Set description of the embed
     * @param {string} description
     * @returns {Embed}
     */
    setDescription(description: string): Embed;
    /**
     * Set url of the embed
     * @param {string} url
     * @returns {Embed}
     */
    setUrl(url: string): Embed;
    /**
     * Set timestamp of the embed located in the footer
     * @param {string} timestamp
     * @returns {Embed}
     */
    setTimestamp(timestamp?: string): Embed;
    /**
     * Set color of the embed
     * @param {string} color
     * @returns {Embed}
     */
    setColor(color: string): Embed;
    /**
     * Set parameters of the embed footer
     * @param {string} text
     * @param {string} icon_url
     * @returns {Embed}
     */
    setFooter(text: string, icon_url: string): Embed;
    /**
     * Add fields to the footer
     * @param {string} name
     * @param {string} value
     * @param {string} inline
     * @returns {Embed}
     */
    addField(name: string, value: string, inline?: boolean): Embed;
    /**
     * Set image of the embed
     * @param {string} url
     * @param {string} height
     * @param {string} width
     * @returns {Embed}
     */
    setImage(url: string, height: number, width: number): Embed;
    /**
     * Set thumbnail of the embed
     * @param {string} url
     * @param {string} height
     * @param {string} width
     * @returns {Embed}
     */
    setThumbnail(url: string, height: number, width: number): Embed;
    /**
     * Set video of the embed
     * @param {string} url
     * @param {string} height
     * @param {string} width
     * @returns {Embed}
     */
    setVideo(url: string, height: number, width: number): Embed;
    /**
     * Set the provider of the embed
     * @param {string} name
     * @param {string} url
     * @returns {Embed}
     */
    setProvider(name: string, url: string): Embed;
    /**
     * Set the author of the embed
     * @param {string} name
     * @param {string} url
     * @param {string} icon_url
     * @returns {Embed}
     */
    setAuthor(name: string, url: string, icon_url: string): Embed;
}
