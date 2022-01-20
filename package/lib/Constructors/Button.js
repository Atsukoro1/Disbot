"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var ButtonStyleType_1 = require("./Types/ButtonStyleType");
var Button = /** @class */ (function () {
    /**
    * Creates a new button component
    * @class
    * @param {object} [data={}] - Button data
    * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object} for further information
    * @returns {Button}
    */
    function Button(data) {
        if (data === void 0) { data = {}; }
        this.type = 2;
        if ("style" in data) {
            var type = ButtonStyleType_1.default.find(function (el) { return el[0] == data.style; });
            if (!type)
                throw new Error("Button style " + data.style + " does not exist, see https://discord.com/developers/docs/interactions/message-components#button-object-button-styles");
            this.style = type[1];
        }
        if ("label" in data) {
            this.label = data.label;
        }
        if ("emoji" in data) {
            this.emoji = {};
            this.emoji.name = data.emoji;
        }
        if ("custom_id" in data) {
            this.custom_id = data.custom_id;
        }
        if ("url" in data) {
            this.url = data.url;
        }
        if ("disabled" in data) {
            this.disabled = data.disabled;
        }
    }
    /**
     * Set style of the button
     * @param {string} style
     * @returns {Button}
     */
    Button.prototype.setStyle = function (data) {
        var type = ButtonStyleType_1.default.find(function (el) { return el[0] == data; });
        if (!type)
            throw new Error("Button style " + data + " does not exist, see https://discord.com/developers/docs/interactions/message-components#button-object-button-styles");
        this.style = type[1];
        return this;
    };
    /**
     * Set label of the button
     * @param {string} label
     * @returns {Button}
     */
    Button.prototype.setLabel = function (data) {
        this.label = data;
        return this;
    };
    /**
     * Set emoji of the button
     * @param {string} emoji - Unicode encoded emoji
     * @returns {Button}
     */
    Button.prototype.setEmoji = function (data) {
        this.emoji = {};
        this.emoji.name = data;
        return this;
    };
    /**
     * Set custom id of the button, will be used to identify the button
     * @param {string} custom_id
     * @returns {Button}
     */
    Button.prototype.setCustomId = function (data) {
        this.custom_id = data;
        return this;
    };
    /**
     * Set url of the button
     * @param {string} url
     * @returns {Button}
     */
    Button.prototype.setUrl = function (data) {
        this.url = data;
        return this;
    };
    /**
     * Set if button is disabled or not
     * @param {boolean} disabled
     * @returns {Button}
     */
    Button.prototype.setDisabled = function (data) {
        this.disabled = data;
        return this;
    };
    return Button;
}());
exports.Button = Button;
;
