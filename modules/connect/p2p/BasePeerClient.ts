import Peer, { PeerOptions } from "peerjs";

export default class BasePeerClient extends Peer {

    constructor();
    constructor(options: PeerOptions);
    constructor(peerid: string, options?: PeerOptions);
    constructor(peerIdOrOptions?: string | PeerOptions, options?: PeerOptions) {
        if (typeof peerIdOrOptions === "string") super(peerIdOrOptions, options);
        else if (peerIdOrOptions) super(peerIdOrOptions);
        else super()
        this.initEvents();
    }

    private initEvents() {
        super.on('open', id => {
            console.log(id);
        })
        super.on('error', error => {
            console.error("Peer错误：", error);
        })
    }

}