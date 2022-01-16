import axios from "axios";
import { WebSocket } from "ws";
import { EventEmitter } from "events"
import Message from "../Constructors/Message";

class WebsocketConnection extends EventEmitter {
    heartbeat:number = 0;
    interval:any;
    sequence:number = 0;

    async connect(client:any) {
        const wsUrl = await axios.get("https://discord.com/api/gateway");
        const ws = new WebSocket(`${wsUrl.data.url}?v=9&encoding=json`);

        const token = client.token;
        if(!token) throw new Error("Please provide a token!");
        const selectedIntents = client.intents;

        var countedIntents = 0;
        if (selectedIntents) {
            const intents = [
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

            intents.forEach(intent => {
                if (selectedIntents.includes(intent[0])) {
                    const counted = parseInt(intent[1].toString());
                    countedIntents = countedIntents | counted;
                }
            });
        }

        ws.on("open", async() => {
            // Send identification data

            ws.send(JSON.stringify({
                op: 2,
                d: {
                    token,
                    intents: countedIntents,
                    properties: {
                        "$os": "Linux",
                        "$browser": "Chrome"
                    },
                    compress: false
                }
            }));
        })

        ws.on("message", (data:any) => {
            // Parse received data
            data = JSON.parse(data.toString("utf-8"));

            if (data.s) this.sequence = data.s;

            if(data.op == 10) {
                // Ping websocket to keep connection alive
                this.heartbeat = data.d.heartbeat_interval;
                this.interval = setInterval(() => {
                    ws.send(
                        JSON.stringify({
                            op: 1,
                            d: this.sequence,
                        })
                    );
                }, data.d.heartbeat_interval);
            }

            if(data.op == 11) {
                // Emit to websocket when client receives a heartbeat
                client.emit("heartbeat", {
                    sequence: this.sequence,
                    interval: this.heartbeat,
                });
            }

            switch(data.t) {
                case 'READY':
                    client.emit("ready");
                    break;

                case 'MESSAGE_CREATE':
                    client.emit("message", new Message(data.d));
                    break;
            }
        });
    }
}

export default WebsocketConnection;