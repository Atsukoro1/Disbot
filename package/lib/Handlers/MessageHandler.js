"use strict";
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
var RequestHandler_1 = require("./RequestHandler");
var MessageHandler = /** @class */ (function () {
    function MessageHandler(data) {
        this.message = data;
    }
    MessageHandler.prototype.react = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!params)
                            throw new Error("You must provide a emoji to react with.");
                        return [4 /*yield*/, (0, RequestHandler_1.default)("PUT", {}, encodeURI("/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id, "/reactions/").concat(params, "/@me")), global.token)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageHandler.prototype.delete = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, RequestHandler_1.default)("DELETE", "", "/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id), global.token)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageHandler.prototype.bulkDelete = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!params && typeof (params) != "object")
                            throw new Error("Please specify messages array");
                        return [4 /*yield*/, (0, RequestHandler_1.default)("POST", { messages: params }, "/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/bulk-delete"), global.token)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageHandler.prototype.removeAllReactions = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, RequestHandler_1.default)("DELETE", undefined, "/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id, "/reactions"), global.token)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageHandler.prototype.removeOwnReaction = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!params)
                            throw new Error("You must provide a emoji to remove.");
                        return [4 /*yield*/, (0, RequestHandler_1.default)("DELETE", undefined, encodeURI("/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id, "/reactions/").concat(params, "/@me")), global.token)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageHandler.prototype.removeUserReaction = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!params.userId)
                            throw new Error("You must provide a user id of the reaction author.");
                        if (!params.emoji)
                            throw new Error("You must provide a emoji to remove.");
                        return [4 /*yield*/, (0, RequestHandler_1.default)("DELETE", undefined, encodeURI("/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id, "/reactions/").concat(params.emoji, "/").concat(params.userId)), global.token)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageHandler.prototype.getReactions = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var query, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!params.emoji)
                            throw new Error("You must provide a emoji to get.");
                        query = "";
                        if (params.limit)
                            query += "?limit=".concat(params.limit);
                        if (params.after)
                            query += "&after=".concat(params.after);
                        return [4 /*yield*/, (0, RequestHandler_1.default)("GET", undefined, encodeURI("/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id, "/reactions/").concat(params.emoji).concat(query)), global.token)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    MessageHandler.prototype.deleteAllReactionsForEmoji = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!params)
                            throw new Error("You must provide a emoji to delete.");
                        return [4 /*yield*/, (0, RequestHandler_1.default)("DELETE", undefined, encodeURI("/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id, "/reactions/").concat(params)), global.token)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageHandler.prototype.edit = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var body, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = {};
                        if (typeof (params) != "object") {
                            body.content = params;
                        }
                        else {
                            body = params;
                        }
                        return [4 /*yield*/, (0, RequestHandler_1.default)("PATCH", body, "/channels/".concat((_a = this.message.channel) === null || _a === void 0 ? void 0 : _a.id, "/messages/").concat(this.message.id), global.token)];
                    case 1:
                        response = _b.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return MessageHandler;
}());
exports.default = MessageHandler;
