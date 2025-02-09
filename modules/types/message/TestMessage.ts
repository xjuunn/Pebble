import { MessageType } from "./Message";
import Message from "./Message";

/* 用来检测延迟和测试连通性 */
export default class TestMessage extends Message {

    /* 发送ping的时间 */
    pingTime: number = 0;
    constructor(content: 'ping' | 'pong', sender: string, receiver: string) {
        super(content, sender, receiver, MessageType.test);
        if (content = 'ping') this.pingTime = Date.now();
    }

}