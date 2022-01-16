export default class Embed {
    title: string | undefined;
    type: string | undefined;
    description: string | undefined;
    url: string | undefined;
    timestamp: Date | undefined;
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
    constructor(data: any);
    setTitle(title: string): void;
    setType(type: string): void;
    setDescription(description: string): void;
    setUrl(url: string): void;
    setTimestamp(timestamp: Date): void;
    setColor(color: number): void;
}
