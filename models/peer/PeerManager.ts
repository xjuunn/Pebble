import Peer from "peerjs";

export class PeerManager {
    private static peer: Peer | null = null;

    private constructor() {
    }

    public static initialize(id: string): Promise | null {
        if (PeerManager.peer) return;
        return new Promise((resolve) => {
            PeerManager.peer = new Peer(id);
            PeerManager.peer.on("open", () => {
                resolve();
            })
        })
    }

    public static getPeer(): Peer {
        if (!PeerManager.peer) {
            throw new Error("无法获取Peer实例，Peer 没有初始化。");
        }
        return PeerManager.peer;
    }

    public static getPeerId(): string {
        const id = PeerManager.getPeer().id;
        if (!id) throw new Error("无法获取Peer ID，因为ID尚未生成。")
        return id;
    }

    public static destroy(): void {
        if (PeerManager.peer) {
            PeerManager.peer.disconnect();
            PeerManager.peer.destroy();
            PeerManager.peer = null;
        }
    }
}