export declare class Reaction {
    count?: number;
    me?: boolean;
    emoji?: object;
    /**
    * Creates a new reaction
    * @class
    * @param {object} [data={}] - Reaction data
    * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object} for further information
    * @returns {Reaction}
    */
    constructor(data: object | any);
}
