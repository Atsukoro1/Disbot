"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Embed = /** @class */ (function () {
    function Embed(data) {
        if (data) {
            if (data.title)
                this.title = data.title;
            if (data.type)
                this.type = data.type;
            if (data.description)
                this.description = data.description;
            if (data.url)
                this.url = data.url;
            if (data.timestamp)
                this.timestamp = data.timestamp;
            if (data.color)
                this.color = data.color;
            if (data.footer)
                this.footer = data.footer;
            if (data.fields)
                this.fields = data.fields;
            if (data.image)
                this.image = data.image;
            if (data.thumbnail)
                this.thumbnail = data.thumbnail;
            if (data.video)
                this.video = data.video;
            if (data.provider)
                this.provider = data.provider;
            if (data.author)
                this.author = data.author;
        }
    }
    Embed.prototype.setTitle = function (title) {
        this.title = title;
    };
    Embed.prototype.setType = function (type) {
        this.type = type;
    };
    Embed.prototype.setDescription = function (description) {
        this.description = description;
    };
    Embed.prototype.setUrl = function (url) {
        this.url = url;
    };
    Embed.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
    };
    Embed.prototype.setColor = function (color) {
        this.color = color;
    };
    return Embed;
}());
exports.default = Embed;
