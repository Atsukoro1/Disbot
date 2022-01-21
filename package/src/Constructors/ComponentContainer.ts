import { SelectMenu } from "./SelectMenu";
import { Button } from "./Button";

export class ComponentContainer {
    type!: number;
    components!: Array<Button | SelectMenu>;

    /**
    * Creates a new component container
    * @class
    * @param {Array<Button | SelectMenu>} [data] - Components
    * @see {@link https://discord.com/developers/docs/interactions/message-components#action-rows} for further information
    * @returns {ComponentContainer}
    */
    constructor(components: Array<Button | SelectMenu>) {
        this.type = 1;
        
        if(typeof(components) == "object") {
            this.components = components;
        } else {
            this.components = [];
        }
    }

    /**
     * Add components to component container
     * @param {Array<SelectMenu | Button>} componentArray
     * @returns {ComponentContainer}
     */
    addComponent(component: any) : ComponentContainer {
        if(this.components.filter(comp => comp.constructor.name == "SelectMenu")) throw new Error("Component container can't contain more components when it has a select menu inside it.");
        if(typeof(component) != "object" || (component.constructor.name != "Button" || component.constructor.name != "SelectMenu")) throw new Error("Component must be a button or a select menu.")
        this.components.push(component);
        return this;
    }
}