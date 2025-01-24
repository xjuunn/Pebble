import Peer, { DataConnection, MediaConnection, StreamConnection } from 'peerjs';
export class ConnectManager {
    private static connectManager: ConnectManager | null = null;
    private static connList: Map<string, string[]> = new Map();
    private constructor() { }
    public static getInstance() {
        if (ConnectManager.connectManager === null) {
            ConnectManager.connectManager = new ConnectManager();
            ConnectManager.connectManager.init();
        }
        return ConnectManager.connectManager;
    }
    /**
     * 连接到目标peer
     * @param id 目标peer id
     */
    public connect(id: string) {
        let conn = BasePeer.getInstance().connect(id);
        conn.on('open', () => {
            this.addConnect(id, conn.connectionId);
            this.setConnListener(conn);
        })
    }

    /**
     * 遍历所有的peerid
     * @param callback 回调函数
     */
    public listPeer(callback: (peer_id: string) => void) {
        ConnectManager.connList.forEach((_, key) => {
            callback(key);
        })
    }

    /**
     * 设置连接对象监听器
     * @param conn 连接对象
     */
    private setConnListener(conn: DataConnection | StreamConnection) {
        conn.on('close', () => {
            console.log("连接关闭");
            this.delConnect(conn.peer, conn.connectionId)
        })
    }

    /**
     * 添加一个连接
     * @param peer_id Peerid
     * @param conn_id Connid
     */
    public addConnect(peer_id: string, conn_id: string) {
        if (!ConnectManager.connList.get(peer_id)) {
            ConnectManager.connList.set(peer_id, []);
        }
        let conns = ConnectManager.connList.get(peer_id);
        conns?.push(conn_id);
        console.log(ConnectManager.connList);
    }

    /**
     * 删除一个连接
     * @param peer_id Peerid
     * @param conn_id Connid
     */
    public delConnect(peer_id: string, conn_id: string) {
        let conns = ConnectManager.connList.get(peer_id);
        ConnectManager.connList.set(peer_id, conns?.filter(item => item !== conn_id) || [])
        if (ConnectManager.connList.get(peer_id)?.length == 0) {
            ConnectManager.connList.delete(peer_id);
        }
    }

    /**
     * 通过peerid和connid查找连接对象
     * @param peer_id Peerid
     * @param conn_id Connid
     */
    public findConnect(peer_id: string, conn_id: string): null | DataConnection | MediaConnection {
        return BasePeer.getInstance().getConnection(peer_id, conn_id);
    }

    /**
     * 遍历peerid对应的所有
     * @param peer_id peerid
     * @param callback 回调函数
     */
    public listConn(peer_id: string, callback: (conn_id: string) => void) {
        let conns = this.getConnectIds(peer_id);
        if (conns === undefined) return;
        for (const item of conns) {
            callback(item);
        }
    }

    /**
     * 获取第一个数据连接对象
     * @param peer_id peerid
     */
    public findFirstDataConn(peer_id: string): DataConnection | null {
        let conn: null | DataConnection | MediaConnection = null;
        this.listConn(peer_id, (conn_id) => {
            if (conn !== null) return;
            let item = this.findConnect(peer_id, conn_id);
            if (item?.type === 'data') conn = item;
        })
        return conn;
    }

    /**
     * 获取第一个媒体连接对象
     * @param peer_id peerid
     */
    public findFirstMediaConn(peer_id: string): MediaConnection | null {
        let conn: null | DataConnection | MediaConnection = null;
        this.listConn(peer_id, (conn_id) => {
            if (conn !== null) return;
            let item = this.findConnect(peer_id, conn_id);
            if (item?.type === 'media') conn = item;
        })
        return conn;
    }

    /**
     * 通过peerid查找这个对等端的所有conn id
     * @param peer_id peerid
     */
    public getConnectIds(peer_id: string): string[] | undefined {
        return ConnectManager.connList.get(peer_id);
    }

    /**
     * 初始化
     */
    private init() {
        BasePeer.getInstance().on('connection', (conn: DataConnection) => {
            this.addConnect(conn.peer, conn.connectionId);
            this.setConnListener(conn);
        })
    }
}
