import axios from "axios";

export default async function sendRequest(method:string, data:string | any, path:string, token:string) {
    try {
        var config:any;

        if(method == "GET") {
            config = {
                method: method,
                url: `https://discord.com/api/v9/${path}`,
                headers: {
                    "Authorization": `Bot ${token}`
                }
            };
        } else {
            config = {
                method: method,
                url: `https://discord.com/api/v9/${path}`,
                headers: {
                    "Authorization": `Bot ${token}`,
                    "Content-Type": "application/json"
                },
                data: data
            };
        };

        const res = await axios(config);
        return res.data;
    } catch (err:object|any) {
        console.log(err.response.data.errors.embed.timestamp);
        if (err.response.data.retry_after) {
            setTimeout(() => {
                sendRequest(method, data, path, token);
            }, err.response.data.retry_after * 1000)
        }
    }
}