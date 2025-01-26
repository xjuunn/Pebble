import { MessageType } from "./Message";
import type Message from "./Message";

/**
 * 用来检测延迟和测试连通性
 */
export default class TestMessage implements Message {
    id: string;
    content: string;
    sender: string;
    receiver: string;
    type: MessageType;
    status: 'pending' | "sending" | "sent" | "read" | "failed";
    timestamp: number;
    step: number;
    constructor(content: string, receiver: string) {
        this.type = MessageType.test;
        this.sender = BasePeer.getInstance().id;
        this.receiver = receiver;
        this.content = content;
        this.timestamp = Date.now();
        this.status = 'sending';
        this.id = this.timestamp + '' + Math.floor(Math.random() * 10000);
        this.step = 1;
    }

}