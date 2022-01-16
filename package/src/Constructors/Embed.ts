import Color = require("color");

export default class Embed {
    title: string | undefined;
    type: string | undefined;
    description: string | undefined;
    url: string | undefined;
    timestamp: string | undefined;
    color: string | number | undefined;

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
    ] | any;

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
            if("title" in data) {
                this.title = data.title;
            }

            if("type" in data) {
                this.type = data.type;
            }

            if("description" in data) {
                this.description = data.description;
            }

            if("url" in data) {
                this.url = data.url;
            }

            if("timestamp" in data) {
                this.timestamp = data.timestamp;
            }

            if("color" in data) {
                this.color = new Color(data.color).rgbNumber();
            }

            if("footer" in data) {
                this.footer = {
                    text: data.footer.text,
                    icon_url: data.footer.icon_url
                };
            }

            if("fields" in data) {
                this.fields = data.fields;
            }

            if("image" in data) {
                this.image = {
                    url: data.image.url,
                    height: data.image.height,
                    width: data.image.width
                };
            }

            if("thumbnail" in data) {
                this.thumbnail = {
                    url: data.thumbnail.url,
                    height: data.thumbnail.height,
                    width: data.thumbnail.width
                };
            }

            if("video" in data) {
                this.video = {
                    url: data.video.url,
                    height: data.video.height,
                    width: data.video.width
                };
            }

            if("provider" in data) {
                this.provider = {
                    name: data.provider.name,
                    url: data.provider.url
                };
            }

            if("author" in data) {
                this.author = {
                    name: data.author.name,
                    url: data.author.url,
                    icon_url: data.author.icon_url
                };
            }
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

    setTimestamp(timestamp:string = new Date().toISOString()) {
        this.timestamp = timestamp;
        return this;
    }

    setColor(color:number) {
        this.color = new Color(color).rgbNumber();;
        return this;
    }

    setFooter(text:string, icon_url:string) {
        this.footer = {
            text: text,
            icon_url: icon_url
        };
        return this;
    };

    addField(name:string, value:string, inline:boolean = false) {
        this.fields = this.fields ?? [];
        this.fields.push({
            name: name,
            value: value,
            inline: inline
        });
        return this;
    }

    setImage(url:string, height:number, width:number) {
        this.image = {
            url: url,
            height: height,
            width: width
        };
        return this;
    }

    setThumbnail(url:string, height:number, width:number) {
        this.thumbnail = {
            url: url,
            height: height,
            width: width
        };
        return this;
    }

    setVideo(url:string, height:number, width:number) {
        this.video = {
            url: url,
            height: height,
            width: width
        };
        return this;
    }

    setProvider(name:string, url:string) {
        this.provider = {
            name: name,
            url: url
        };
        return this;
    }

    setAuthor(name:string, url:string, icon_url:string) {
        this.author = {
            name: name,
            url: url,
            icon_url: icon_url
        };
        return this;
    }
}