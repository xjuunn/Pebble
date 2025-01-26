import type { DataConnection } from "peerjs";
import type Message from '../../types/message/Message';
export default class P2PMessageSender {

    /**
     * 发送消息
     * @param conn 连接对象
     * @param message 消息字符串
     */
    public static sendMessageByConnection(conn: DataConnection, message: Message) {
        message.status = 'sending';
        conn.send(message)
    }

    /**
     * 通过peerid发送消息
     * @param peer_id peerid
     * @param message 消息字符串
     */
    public static sendMessageByPeerId(peer_id: string, message: Message) {
        const conn = P2PConnectManager.getInstance().findFirstDataConn(peer_id);
        if (conn !== null) {
            P2PMessageSender.sendMessageByConnection(conn, message)
        } else {
            throw new Error(`未找到peer_id为${peer_id}的连接对象`);
        }
    }
}