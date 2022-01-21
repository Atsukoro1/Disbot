interface IOption {
    label: string,
    value?: string,
    description?: string,
    emoji?: object,
    default?: boolean
}

export class SelectMenu {
    type!: number;
    custom_id?: string;
    options?: Array<IOption>
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;

    constructor(data:any = {}) {
        this.type = 3;

        if("custom_id" in data) {
            this.custom_id = data.custom_id;
        }

        if("options" in data) {
            this.options = data.options;
        }

        if("placeholder" in data) {
            this.placeholder = data.placeholder;
        }

        if("min_values" in data) {
            this.min_values = data.min_values;
        }

        if("max_values" in data) {
            this.max_values = data.max_values;
        }

        if("disabled" in data) {
            this.disabled = data.disabled;
        }
    }

    /**
     * Set custom_id of the SelectMenu
     * @param {string} customId - Id that will be used to identify the component
     * @returns {SelectMenu}
     */
    setCustomId(data: string) : SelectMenu {
        this.custom_id = data;
        return this;
    };

    /**
     * Add an option to options array
     * @param {IOption} option 
     * @returns {SelectMenu}
     */
    addOption(data: IOption) : SelectMenu {
        if(typeof(this.options) != "object") this.options = [];
        if(data.emoji) data.emoji = { name: data.emoji };
        this.options.push(data);
        return this;
    };

    /**
     * Set placeholder of the select menu
     * @param {string} placeholder
     * @returns {SelectMenu}
     */
    setPlaceholder(data: string) : SelectMenu {
        this.placeholder = data;
        return this;
    };

    /**
     * Set minimal values to be selected
     * @param {number} min_values
     * @returns {SelectMenu}
     */
    setMinValues(data: number) : SelectMenu {
        this.min_values = data;
        return this;
    }

    /**
     * Set maximal values to be selected
     * @param {number} max_values
     * @returns {SelectMenu}
     */
    setMaxValues(data: number) : SelectMenu {
        this.max_values = data;
        return this;
    }

    /**
     * Set disabled button state of the select menu
     * @param {boolean} disabled
     * @returns {SelectMenu}
     */
    setDisabled(data: boolean) : SelectMenu {
        this.disabled = data;
        return this;
    }
}