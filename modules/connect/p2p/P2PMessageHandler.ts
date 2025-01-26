import type Message from '../../types/message/Message';
import { MessageType } from '../../types/message/Message';
import TestMessage from '../../types/message/TestMessage';
export default class P2PMessageHandler {

    /**
     * 处理接收到的消息
     * @param msg 消息
     */
    public static handler(m: unknown) {
        let msg = m as Message;
        switch (msg.type) {
            case MessageType.test: this.handleTest(msg as TestMessage); break;
            case MessageType.system: break;
            case MessageType.text: break;
            case MessageType.image: break;
            case MessageType.file: break;
            case MessageType.audio: break;
            case MessageType.video: break;

        }
        console.log('接收了消息', msg);
    }

    public static handleTest(msg: TestMessage) {
        if (msg.step === 1) {
            const msg1 = new TestMessage(msg.timestamp + '', msg.sender);
            msg1.step = 0;
            P2PMessageSender.sendMessageByPeerId(msg.sender, msg1);
        } else if (msg.step === 0) {
            const RTT = Date.now() - Number(msg.content);
            console.log("延迟测试：", RTT / 2);
        }
    }
}