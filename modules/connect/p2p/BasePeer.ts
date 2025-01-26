import Peer, { type PeerJSOption } from 'peerjs'
export default class BasePeer {
    private static peer: Peer | null = null;
    private constructor() { }

    /**
     * 获取`Peer`对象，返回值可能为`null`，为了避免使用异步，可以使用`onOpen`来避免获取`null`
     * @param id 初始化`Peer id`
     * @param options 参数
     * @returns `Peer`对象
     */
    static getInstance(id?: string, options?: PeerJSOption): Peer {
        if (!BasePeer.peer) {
            if (id && options) BasePeer.peer = new Peer(id, options);
            else if (id) BasePeer.peer = new Peer(id);
            else BasePeer.peer = new Peer();
            BasePeer.peer.on("error", (error) => { throw error });
            P2PConnectManager.getInstance();
        }
        return BasePeer.peer;
    }

}