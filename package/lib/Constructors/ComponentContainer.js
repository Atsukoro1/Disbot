"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentContainer = void 0;
var ComponentContainer = /** @class */ (function () {
    /**
    * Creates a new component container
    * @class
    * @param {Array<Button | SelectMenu>} [data] - Components
    * @see {@link https://discord.com/developers/docs/interactions/message-components#action-rows} for further information
    * @returns {ComponentContainer}
    */
    function ComponentContainer(components) {
        this.type = 1;
        if (typeof (components) == "object") {
            this.components = components;
        }
        else {
            this.components = [];
        }
    }
    /**
     * Add components to component container
     * @param {Array<SelectMenu | Button>} componentArray
     * @returns {ComponentContainer}
     */
    ComponentContainer.prototype.addComponent = function (component) {
        if (this.components.filter(function (comp) { return comp.constructor.name == "SelectMenu"; }).length > 0)
            throw new Error("Component container can't contain more components when it has a select menu inside it.");
        if (typeof (component) != "object")
            throw new Error("Component must be a button or a select menu.");
        this.components.push(component);
        return this;
    };
    return ComponentContainer;
}());
exports.ComponentContainer = ComponentContainer;
