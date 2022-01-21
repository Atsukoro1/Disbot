import ButtonStyleTypes from "./Types/ButtonStyleType"

export class Button {
    type!: number;
    style?: number | any;
    label?: string;
    emoji?: {
        name?: string
    };
    custom_id?: string;
    url?: string;
    disabled?: boolean;

    /**
    * Creates a new button component
    * @class
    * @param {object} [data={}] - Button data
    * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object} for further information
    * @returns {Button}
    */
    constructor(data:any = {}) {
        this.type = 2;

        if("style" in data) {
            const type = ButtonStyleTypes.find(el => el[0] == data.style);
            if(!type) throw new Error(`Button style ${data.style} does not exist, see https://discord.com/developers/docs/interactions/message-components#button-object-button-styles`);
            this.style = type[1];
        }

        if("label" in data) {
            this.label = data.label;
        }

        if("emoji" in data) {
            this.emoji = {};
            this.emoji.name = data.emoji;
        }

        if("custom_id" in data) {
            this.custom_id = data.custom_id;
        }

        if("url" in data) {
            this.url = data.url;
        }

        if("disabled" in data) {
            this.disabled = data.disabled;
        }
    }

    /**
     * Set style of the button
     * @param {string} style
     * @returns {Button}
     */
    setStyle(data :string) : Button {
        const type = ButtonStyleTypes.find(el => el[0] == data);
        if(!type) throw new Error("Button style " + data + " does not exist, see https://discord.com/developers/docs/interactions/message-components#button-object-button-styles");
        this.style = type[1];
        return this;
    }

    /**
     * Set label of the button
     * @param {string} label
     * @returns {Button}
     */
    setLabel(data: string) : Button {
        this.label = data;
        return this;
    }

    /**
     * Set emoji of the button
     * @param {string} emoji - Unicode encoded emoji 
     * @returns {Button}
     */
    setEmoji(data: string) : Button {
        this.emoji = {};
        this.emoji.name = data;
        return this;
    }

    /**
     * Set custom id of the button, will be used to identify the button
     * @param {string} custom_id 
     * @returns {Button}
     */
    setCustomId(data: string) : Button {
        this.custom_id = data;
        return this;
    }

    /**
     * Set url of the button
     * @param {string} url
     * @returns {Button}
     */
    setUrl(data: string) : Button {
        this.url = data;
        return this;
    }

    /**
     * Set if button is disabled or not
     * @param {boolean} disabled
     * @returns {Button}
     */
    setDisabled(data: boolean) : Button {
        this.disabled = data;
        return this;
    }
};