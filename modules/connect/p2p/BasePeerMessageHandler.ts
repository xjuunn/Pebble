import TestMessage from "../../types/message/TestMessage";
import type Message from "../../types/message/Message";
import { MessageType } from "../../types/message/Message";
import type BasePeerConnectManager from "./BasePeerConnectManager";
import TextMessage from '../../types/message/TextMessage';
/* 基础peer消息处理器 */
export default class BasePeerMessageHandler {

    handle(msg: unknown, connectManager: BasePeerConnectManager) {
        let message = msg as Message;
        switch (message.type) {
            case MessageType.test: this.handleTest(message as TestMessage, connectManager); break;
            case MessageType.system: break;
            case MessageType.text: this.handleText(message as TextMessage); break;
            case MessageType.image: break;
            case MessageType.audio: break;
            case MessageType.video: break;
            case MessageType.file: break;
            default: throw new Error("无法处理此类消息");
        }
    }

    handleTest(msg: TestMessage, connectManager: BasePeerConnectManager) {
        if (msg.content === 'ping') {
            let testMsg = new TestMessage('pong', msg.receiver, msg.sender);
            new BasePeerMessageSender().sendMessage(testMsg, connectManager);
        } else if (msg.content === 'pong') {
            let latency = (Date.now() - msg.pingTime) / 2;
            console.log("延迟：", latency);
        }
    }

    handleText(msg: TextMessage) {
        console.log(msg.content);

    }
}