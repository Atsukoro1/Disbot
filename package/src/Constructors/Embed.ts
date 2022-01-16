import Color = require("color");

export default class Embed {
    title: string | undefined;
    type: string | undefined;
    description: string | undefined;
    url: string | undefined;
    timestamp: number | undefined;
    color: number | undefined;

    footer: {
        text: string | undefined;
        icon_url: string | undefined;
    } | undefined;

    fields: [
        {
            name: string | undefined;
            value: string | undefined;
            inline: boolean | undefined;
        }
    ] | undefined;

    image: {
        url: string | undefined;
        height: number | undefined;
        width: number | undefined;
    } | undefined;

    thumbnail: {
        url: string | undefined;
        height: number | undefined;
        width: number | undefined;
    } | undefined;

    video: {
        url: string | undefined;
        height: number | undefined;
        width: number | undefined;
    } | undefined;

    provider: {
        name: string | undefined;
        url: string | undefined;
    } | undefined;

    author: {
        name: string | undefined;
        url: string | undefined;
        icon_url: string | undefined;
    } | undefined;

    constructor(data:any) {
        if(data) {
            if(data.title) this.title = data.title;
            if(data.type) this.type = data.type;
            if(data.description) this.description = data.description;
            if(data.url) this.url = data.url;
            if(data.timestamp) this.timestamp = data.timestamp;
            if(data.color) this.color = data.color;
            if(data.footer) this.footer = data.footer;
            if(data.fields) this.fields = data.fields;
            if(data.image) this.image = data.image;
            if(data.thumbnail) this.thumbnail = data.thumbnail;
            if(data.video) this.video = data.video;
            if(data.provider) this.provider = data.provider;
            if(data.author) this.author = data.author;
        }
    }

    setTitle(title:string) {
        this.title = title;
        return this;
    }

    setType(type:string) {
        this.type = type;
        return this;
    }

    setDescription(description:string) {
        this.description = description;
        return this;
    }

    setUrl(url:string) {
        this.url = url;
        return this;
    }

    setTimestamp(timestamp:number = Date.now()) {
        this.timestamp = timestamp;
        return this;
    }

    setColor(color:number) {
        this.color = new Color(color).rgbNumber();;
        return this;
    }
}