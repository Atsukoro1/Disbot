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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ws_1 = require("ws");
var events_1 = require("events");
var Message_1 = require("../Constructors/Message");
var WebsocketConnection = /** @class */ (function (_super) {
    __extends(WebsocketConnection, _super);
    function WebsocketConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.heartbeat = 0;
        _this.sequence = 0;
        return _this;
    }
    WebsocketConnection.prototype.connect = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var wsUrl, ws, token, selectedIntents, countedIntents, intents;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get("https://discord.com/api/gateway")];
                    case 1:
                        wsUrl = _a.sent();
                        ws = new ws_1.WebSocket("".concat(wsUrl.data.url, "?v=9&encoding=json"));
                        token = client.token;
                        if (!token)
                            throw new Error("Please provide a token!");
                        selectedIntents = client.intents;
                        countedIntents = 0;
                        if (selectedIntents) {
                            intents = [
                                ["GUILDS", 1 << 0],
                                ["GUILD_MEMBERS", 1 << 1],
                                ["GUILD_BANS", 1 << 2],
                                ["GUILD_EMOJIS_AND_STICKERS", 1 << 3],
                                ["GUILD_INTEGRATIONS", 1 << 4],
                                ["GUILD_WEBHOOKS", 1 << 5],
                                ["GUILD_INVITES", 1 << 6],
                                ["GUILD_VOICE_STATES", 1 << 7],
                                ["GUILD_PRESENCES", 1 << 8],
                                ["GUILD_MESSAGES", 1 << 9],
                                ["GUILD_MESSAGE_REACTIONS", 1 << 10],
                                ["GUILD_MESSAGE_TYPING", 1 << 11],
                                ["DIRECT_MESSAGES", 1 << 12],
                                ["DIRECT_MESSAGE_REACTIONS", 1 << 13],
                                ["DIRECT_MESSAGE_TYPING", 1 << 14],
                                ["GUILD_SCHEDULED_EVENTS", 1 << 16]
                            ];
                            intents.forEach(function (intent) {
                                if (selectedIntents.includes(intent[0])) {
                                    var counted = parseInt(intent[1].toString());
                                    countedIntents = countedIntents | counted;
                                }
                            });
                        }
                        ws.on("open", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // Send identification data
                                ws.send(JSON.stringify({
                                    op: 2,
                                    d: {
                                        token: token,
                                        intents: countedIntents,
                                        properties: {
                                            "$os": "Linux",
                                            "$browser": "Chrome"
                                        },
                                        compress: false
                                    }
                                }));
                                return [2 /*return*/];
                            });
                        }); });
                        ws.on("message", function (data) {
                            // Parse received data
                            data = JSON.parse(data.toString("utf-8"));
                            if (data.s)
                                _this.sequence = data.s;
                            if (data.op == 10) {
                                // Ping websocket to keep connection alive
                                _this.heartbeat = data.d.heartbeat_interval;
                                _this.interval = setInterval(function () {
                                    ws.send(JSON.stringify({
                                        op: 1,
                                        d: _this.sequence,
                                    }));
                                }, data.d.heartbeat_interval);
                            }
                            if (data.op == 11) {
                                // Emit to websocket when client receives a heartbeat
                                client.emit("heartbeat", {
                                    sequence: _this.sequence,
                                    interval: _this.heartbeat,
                                });
                            }
                            switch (data.t) {
                                case 'READY':
                                    client.emit("ready");
                                    break;
                                case 'MESSAGE_CREATE':
                                    client.emit("message", new Message_1.default(data.d));
                                    break;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return WebsocketConnection;
}(events_1.EventEmitter));
exports.default = WebsocketConnection;
