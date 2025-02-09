import type { DataConnection } from "peerjs";
import type BasePeerConnectManager from "./BasePeerConnectManager";
import type Message from "../../types/message/Message";

/* 基础的peer消息发送器 */
export default class BasePeerMessageSender {

    // /**
    //  * 发送消息给目标
    //  * @param peerid 目标peerid
    //  * @param message 消息内容
    //  * @param connectManager peer连接管理器
    //  */
    // sendMessage(peerid: string, message: Message, connectManager: BasePeerConnectManager): void;
    // /**
    //  * 发送消息给目标
    //  * @param conn 连接对象
    //  * @param message 消息内容
    //  * @param connectManager peer连接管理器
    //  */
    // sendMessage(conn: DataConnection, message: Message, connectManager: BasePeerConnectManager): void;
    // sendMessage(peeridOrConn: string | DataConnection, message: Message, connectManager: BasePeerConnectManager): void {
    //     let conn: DataConnection | undefined;
    //     if (typeof peeridOrConn === 'string') conn = connectManager.findConnectByPeerID(peeridOrConn);
    //     else conn = peeridOrConn;
    //     if (conn === undefined) return;
    //     conn.send(message);
    // }

    /**
     * 发送一条消息
     * @param message 消息主体
     * @param connectManager peer连接管理器
     */
    sendMessage(message: Message, connectManager: BasePeerConnectManager): void {
        let conn = connectManager.findConnectByPeerID(message.receiver);
        if (conn === undefined) return;
        conn.send(message);
    }
}