"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Websocket_1 = require("./Websocket");
var events_1 = require("events");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    /**
    * Create a new instance of Discord client
    * @class
    * @param {Array} intents - Array of intents for Discord gateway
    */
    function Client(intents) {
        var _this = _super.call(this) || this;
        _this.intents = intents;
        return _this;
    }
    /**
     * Connect to Discord websocket with token and receive data
     * @param token
     */
    Client.prototype.login = function (token) {
        this.token = token;
        global.token = token;
        new Websocket_1.default().connect(this);
    };
    return Client;
}(events_1.EventEmitter));
exports.Client = Client;
