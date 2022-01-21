interface IOption {
    label: string;
    value?: string;
    description?: string;
    emoji?: object;
    default?: boolean;
}
export declare class SelectMenu {
    type: number;
    custom_id?: string;
    options?: Array<IOption>;
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
    constructor(data?: any);
    /**
     * Set custom_id of the SelectMenu
     * @param {string} customId - Id that will be used to identify the component
     * @returns {SelectMenu}
     */
    setCustomId(data: string): SelectMenu;
    /**
     * Add an option to options array
     * @param {IOption} option
     * @returns {SelectMenu}
     */
    addOption(data: IOption): SelectMenu;
    /**
     * Set placeholder of the select menu
     * @param {string} placeholder
     * @returns {SelectMenu}
     */
    setPlaceholder(data: string): SelectMenu;
    /**
     * Set minimal values to be selected
     * @param {number} min_values
     * @returns {SelectMenu}
     */
    setMinValues(data: number): SelectMenu;
    /**
     * Set maximal values to be selected
     * @param {number} max_values
     * @returns {SelectMenu}
     */
    setMaxValues(data: number): SelectMenu;
    /**
     * Set disabled button state of the select menu
     * @param {boolean} disabled
     * @returns {SelectMenu}
     */
    setDisabled(data: boolean): SelectMenu;
}
export {};
