import { EventEmitter } from "events";
declare class WebsocketConnection extends EventEmitter {
    heartbeat: number;
    interval: any;
    sequence: number;
    connect(client: any): Promise<void>;
}
export default WebsocketConnection;
