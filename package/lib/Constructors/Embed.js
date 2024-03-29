"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
var Color = require("color");
var Embed = /** @class */ (function () {
    /**
    * Creates a new embed
    * @class
    * @param {object} [data={}] - Embed data
    * @see {@link https://discord.com/developers/docs/resources/channel#embed-object} for further information
    * @returns {Embed}
    */
    function Embed(data) {
        if (data) {
            if ("title" in data) {
                this.title = data.title;
            }
            if ("type" in data) {
                this.type = data.type;
            }
            if ("description" in data) {
                this.description = data.description;
            }
            if ("url" in data) {
                this.url = data.url;
            }
            if ("timestamp" in data) {
                this.timestamp = data.timestamp;
            }
            if ("color" in data) {
                this.color = new Color(data.color).rgbNumber();
            }
            if ("footer" in data) {
                this.footer = {
                    text: data.footer.text,
                    icon_url: data.footer.icon_url
                };
            }
            if ("fields" in data) {
                this.fields = data.fields;
            }
            if ("image" in data) {
                this.image = {
                    url: data.image.url,
                    height: data.image.height,
                    width: data.image.width
                };
            }
            if ("thumbnail" in data) {
                this.thumbnail = {
                    url: data.thumbnail.url,
                    height: data.thumbnail.height,
                    width: data.thumbnail.width
                };
            }
            if ("video" in data) {
                this.video = {
                    url: data.video.url,
                    height: data.video.height,
                    width: data.video.width
                };
            }
            if ("provider" in data) {
                this.provider = {
                    name: data.provider.name,
                    url: data.provider.url
                };
            }
            if ("author" in data) {
                this.author = {
                    name: data.author.name,
                    url: data.author.url,
                    icon_url: data.author.icon_url
                };
            }
        }
    }
    /**
     * Set title of the embed
     * @param {string} title
     * @returns {Embed}
     */
    Embed.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    /**
     * Set type of the embed
     * @param {string} type
     * @returns {Embed}
     */
    Embed.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    /**
     * Set description of the embed
     * @param {string} description
     * @returns {Embed}
     */
    Embed.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    /**
     * Set url of the embed
     * @param {string} url
     * @returns {Embed}
     */
    Embed.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    /**
     * Set timestamp of the embed located in the footer
     * @param {string} timestamp
     * @returns {Embed}
     */
    Embed.prototype.setTimestamp = function (timestamp) {
        if (timestamp === void 0) { timestamp = new Date().toISOString(); }
        this.timestamp = timestamp;
        return this;
    };
    /**
     * Set color of the embed
     * @param {string} color
     * @returns {Embed}
     */
    Embed.prototype.setColor = function (color) {
        this.color = new Color(color).rgbNumber();
        return this;
    };
    /**
     * Set parameters of the embed footer
     * @param {string} text
     * @param {string} icon_url
     * @returns {Embed}
     */
    Embed.prototype.setFooter = function (text, icon_url) {
        this.footer = {
            text: text,
            icon_url: icon_url
        };
        return this;
    };
    ;
    /**
     * Add fields to the footer
     * @param {string} name
     * @param {string} value
     * @param {string} inline
     * @returns {Embed}
     */
    Embed.prototype.addField = function (name, value, inline) {
        var _a;
        if (inline === void 0) { inline = false; }
        this.fields = (_a = this.fields) !== null && _a !== void 0 ? _a : [];
        this.fields.push({
            name: name,
            value: value,
            inline: inline
        });
        return this;
    };
    /**
     * Set image of the embed
     * @param {string} url
     * @param {string} height
     * @param {string} width
     * @returns {Embed}
     */
    Embed.prototype.setImage = function (url, height, width) {
        this.image = {
            url: url,
            height: height,
            width: width
        };
        return this;
    };
    /**
     * Set thumbnail of the embed
     * @param {string} url
     * @param {string} height
     * @param {string} width
     * @returns {Embed}
     */
    Embed.prototype.setThumbnail = function (url, height, width) {
        this.thumbnail = {
            url: url,
            height: height,
            width: width
        };
        return this;
    };
    /**
     * Set video of the embed
     * @param {string} url
     * @param {string} height
     * @param {string} width
     * @returns {Embed}
     */
    Embed.prototype.setVideo = function (url, height, width) {
        this.video = {
            url: url,
            height: height,
            width: width
        };
        return this;
    };
    /**
     * Set the provider of the embed
     * @param {string} name
     * @param {string} url
     * @returns {Embed}
     */
    Embed.prototype.setProvider = function (name, url) {
        this.provider = {
            name: name,
            url: url
        };
        return this;
    };
    /**
     * Set the author of the embed
     * @param {string} name
     * @param {string} url
     * @param {string} icon_url
     * @returns {Embed}
     */
    Embed.prototype.setAuthor = function (name, url, icon_url) {
        this.author = {
            name: name,
            url: url,
            icon_url: icon_url
        };
        return this;
    };
    return Embed;
}());
exports.Embed = Embed;
