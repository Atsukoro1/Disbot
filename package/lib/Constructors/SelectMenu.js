"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMenu = void 0;
var SelectMenu = /** @class */ (function () {
    function SelectMenu(data) {
        if (data === void 0) { data = {}; }
        this.type = 3;
        if ("custom_id" in data) {
            this.custom_id = data.custom_id;
        }
        if ("options" in data) {
            this.options = data.options;
        }
        if ("placeholder" in data) {
            this.placeholder = data.placeholder;
        }
        if ("min_values" in data) {
            this.min_values = data.min_values;
        }
        if ("max_values" in data) {
            this.max_values = data.max_values;
        }
        if ("disabled" in data) {
            this.disabled = data.disabled;
        }
    }
    /**
     * Set custom_id of the SelectMenu
     * @param {string} customId - Id that will be used to identify the component
     * @returns {SelectMenu}
     */
    SelectMenu.prototype.setCustomId = function (data) {
        this.custom_id = data;
        return this;
    };
    ;
    /**
     * Add an option to options array
     * @param {IOption} option
     * @returns {SelectMenu}
     */
    SelectMenu.prototype.addOption = function (data) {
        if (typeof (this.options) != "object")
            this.options = [];
        if (data.emoji)
            data.emoji = { name: data.emoji };
        this.options.push(data);
        return this;
    };
    ;
    /**
     * Set placeholder of the select menu
     * @param {string} placeholder
     * @returns {SelectMenu}
     */
    SelectMenu.prototype.setPlaceholder = function (data) {
        this.placeholder = data;
        return this;
    };
    ;
    /**
     * Set minimal values to be selected
     * @param {number} min_values
     * @returns {SelectMenu}
     */
    SelectMenu.prototype.setMinValues = function (data) {
        this.min_values = data;
        return this;
    };
    /**
     * Set maximal values to be selected
     * @param {number} max_values
     * @returns {SelectMenu}
     */
    SelectMenu.prototype.setMaxValues = function (data) {
        this.max_values = data;
        return this;
    };
    /**
     * Set disabled button state of the select menu
     * @param {boolean} disabled
     * @returns {SelectMenu}
     */
    SelectMenu.prototype.setDisabled = function (data) {
        this.disabled = data;
        return this;
    };
    return SelectMenu;
}());
exports.SelectMenu = SelectMenu;
