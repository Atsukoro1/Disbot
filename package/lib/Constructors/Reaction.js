"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reaction = void 0;
var Reaction = /** @class */ (function () {
    /**
    * Creates a new reaction
    * @class
    * @param {object} [data={}] - Reaction data
    * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object} for further information
    * @returns {Reaction}
    */
    function Reaction(data) {
        if ("count" in data) {
            this.count = data.count;
        }
        if ("me" in data) {
            this.me = data.me;
        }
        if ("emoji" in data) {
            this.emoji = data.emoji;
        }
    }
    return Reaction;
}());
exports.Reaction = Reaction;
