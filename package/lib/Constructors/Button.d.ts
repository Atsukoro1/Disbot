export declare class Button {
    type?: number;
    style?: number | any;
    label?: string;
    emoji?: {
        name?: string;
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
    constructor(data?: any);
    /**
     * Set style of the button
     * @param {string} style
     * @returns {Button}
     */
    setStyle(data: string): Button;
    /**
     * Set label of the button
     * @param {string} label
     * @returns {Button}
     */
    setLabel(data: string): Button;
    /**
     * Set emoji of the button
     * @param {string} emoji - Unicode encoded emoji
     * @returns {Button}
     */
    setEmoji(data: string): Button;
    /**
     * Set custom id of the button, will be used to identify the button
     * @param {string} custom_id
     * @returns {Button}
     */
    setCustomId(data: string): Button;
    /**
     * Set url of the button
     * @param {string} url
     * @returns {Button}
     */
    setUrl(data: string): Button;
    /**
     * Set if button is disabled or not
     * @param {boolean} disabled
     * @returns {Button}
     */
    setDisabled(data: boolean): Button;
}
