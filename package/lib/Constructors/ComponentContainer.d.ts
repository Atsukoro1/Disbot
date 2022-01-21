import { SelectMenu } from "./SelectMenu";
import { Button } from "./Button";
export declare class ComponentContainer {
    type: number;
    components: Array<Button | SelectMenu>;
    /**
    * Creates a new component container
    * @class
    * @param {Array<Button | SelectMenu>} [data] - Components
    * @see {@link https://discord.com/developers/docs/interactions/message-components#action-rows} for further information
    * @returns {ComponentContainer}
    */
    constructor(components: Array<Button | SelectMenu>);
    /**
     * Add components to component container
     * @param {Array<SelectMenu | Button>} componentArray
     * @returns {ComponentContainer}
     */
    addComponent(component: any): ComponentContainer;
}
