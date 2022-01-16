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
    constructor(data: any);
    setTitle(title: string): this;
    setType(type: string): this;
    setDescription(description: string): this;
    setUrl(url: string): this;
    setTimestamp(timestamp?: string): this;
    setColor(color: number): this;
    setFooter(text: string, icon_url: string): this;
    addField(name: string, value: string, inline?: boolean): this;
    setImage(url: string, height: number, width: number): this;
    setThumbnail(url: string, height: number, width: number): this;
    setVideo(url: string, height: number, width: number): this;
    setProvider(name: string, url: string): this;
    setAuthor(name: string, url: string, icon_url: string): this;
}
