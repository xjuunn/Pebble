import type BasePeerClient from "modules/connect/p2p/BasePeerClient";
import type { DataConnection, MediaConnection, StreamConnection } from "peerjs";

/** 基础的Peer连接管理器 */
export default class BasePeerConnectManager {
    basePeer: BasePeerClient;
    dataConnectList: DataConnection[] = [];
    /**
     * 创建一个Peer连接管理器
     * @param basePeer peer实例
     */
    constructor(basePeer: BasePeerClient) {
        this.basePeer = basePeer;
        this.initEvents();
    }

    private initEvents() {
        this.basePeer.on('connection', conn => {
            this.addConnect(conn)
        })
    }
    /**
     * 连接到对应的peer客户端
     * @param target 目标peerid
     */
    connect(target: string) {
        let conn = this.basePeer.connect(target);
        this.addConnect(conn);
    }

    private addConnect(conn: DataConnection) {
        this.dataConnectList.push(conn);
        console.log("添加连接对象", this.dataConnectList);

    }

    /**
     * 通过peerid，找到对应的连接对象
     * @param peerid 目标peerid
     * @returns peer连接对象
     */
    findConnectByPeerID(peerid: string): DataConnection | undefined {
        for (let index = 0; index < this.dataConnectList.length; index++) {
            const conn = this.dataConnectList[index];
            if (conn.peer === peerid) return conn;
        }
    }
}