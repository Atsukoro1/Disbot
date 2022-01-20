import Color = require("color");

export class Embed {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: string | number;

    footer?: {
        text: string;
        icon_url: string;
    };

    fields?: [
        {
            name: string;
            value: string;
            inline: boolean;
        }
    ] | any;

    image?: {
        url: string;
        height: number;
        width: number;
    };

    thumbnail?: {
        url: string;
        height: number;
        width: number;
    };

    video?: {
        url: string;
        height: number;
        width: number;
    } ;

    provider?: {
        name: string;
        url: string;
    } ;

    author?: {
        name: string;
        url: string;
        icon_url: string;
    };

    /**
    * Creates a new embed
    * @class
    * @param {object} [data={}] - Embed data
    * @see {@link https://discord.com/developers/docs/resources/channel#embed-object} for further information
    * @returns {Embed}
    */
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

    /**
     * Set title of the embed
     * @param {string} title
     * @returns {Embed}
     */
    setTitle(title:string) : Embed {
        this.title = title;
        return this;
    }

    /**
     * Set type of the embed
     * @param {string} type
     * @returns {Embed}
     */
    setType(type:string) : Embed {
        this.type = type;
        return this;
    }

    /**
     * Set description of the embed
     * @param {string} description 
     * @returns {Embed}
     */
    setDescription(description:string) : Embed {
        this.description = description;
        return this;
    }

    /**
     * Set url of the embed
     * @param {string} url 
     * @returns {Embed}
     */
    setUrl(url:string) : Embed {
        this.url = url;
        return this;
    }

    /**
     * Set timestamp of the embed located in the footer
     * @param {string} timestamp 
     * @returns {Embed}
     */
    setTimestamp(timestamp:string = new Date().toISOString()) : Embed {
        this.timestamp = timestamp;
        return this;
    }

    /**
     * Set color of the embed
     * @param {string} color
     * @returns {Embed}
     */
    setColor(color:string) : Embed {
        this.color = new Color(color).rgbNumber();
        return this;
    }

    /**
     * Set parameters of the embed footer
     * @param {string} text 
     * @param {string} icon_url 
     * @returns {Embed}
     */
    setFooter(text:string, icon_url:string) : Embed {
        this.footer = {
            text: text,
            icon_url: icon_url
        };
        return this;
    };

    /**
     * Add fields to the footer
     * @param {string} name 
     * @param {string} value 
     * @param {string} inline 
     * @returns {Embed}
     */
    addField(name:string, value:string, inline:boolean = false) : Embed {
        this.fields = this.fields ?? [];
        this.fields.push({
            name: name,
            value: value,
            inline: inline
        });
        return this;
    }

    /**
     * Set image of the embed
     * @param {string} url 
     * @param {string} height 
     * @param {string} width 
     * @returns {Embed}
     */
    setImage(url:string, height:number, width:number) : Embed {
        this.image = {
            url: url,
            height: height,
            width: width
        };
        return this;
    }

    /**
     * Set thumbnail of the embed
     * @param {string} url 
     * @param {string} height 
     * @param {string} width 
     * @returns {Embed}
     */
    setThumbnail(url:string, height:number, width:number) : Embed {
        this.thumbnail = {
            url: url,
            height: height,
            width: width
        };
        return this;
    }

    /**
     * Set video of the embed
     * @param {string} url 
     * @param {string} height 
     * @param {string} width 
     * @returns {Embed}
     */
    setVideo(url:string, height:number, width:number) : Embed {
        this.video = {
            url: url,
            height: height,
            width: width
        };
        return this;
    }

    /**
     * Set the provider of the embed
     * @param {string} name 
     * @param {string} url 
     * @returns {Embed}
     */
    setProvider(name:string, url:string) : Embed {
        this.provider = {
            name: name,
            url: url
        };
        return this;
    }

    /**
     * Set the author of the embed
     * @param {string} name 
     * @param {string} url 
     * @param {string} icon_url 
     * @returns {Embed}
     */
    setAuthor(name:string, url:string, icon_url:string) : Embed {
        this.author = {
            name: name,
            url: url,
            icon_url: icon_url
        };
        return this;
    }
}