import wsc from "./Websocket";
import { EventEmitter } from "events"
import Message from "../Constructors/Message";

export class Client extends EventEmitter {
    token: String | undefined;
    intents: Array<String>;

    /**
    * Create a new instance of Discord client
    * @class
    * @param {Array} intents - Array of intents for Discord gateway
    */
    constructor(intents:Array<String>) {
        super();
        this.intents = intents;
    }

    /**
     * Connect to Discord websocket with token and receive data
     * @param token 
     */
    login(token:string) {
        this.token = token;
        global.token = token;

        new wsc().connect(this);
    }
}

// extend types with on event
declare module "events" {
    interface EventEmitter {
        on(event: "message", listener: (message: Message) => void): this;
        on(event: "ready", listener: () => void): this;
    }
}

declare global {
    var token: string;
}