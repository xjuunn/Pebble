export default class Message {
    id: string;
    /** 消息内容 */
    content: string;
    /** 发送者 */
    sender: string;
    /** 接收者 */
    receiver: string;
    /** 消息类型 */
    type: MessageType;
    /** 消息状态 */
    status: 'pending' | 'sending' | 'sent' | 'read' | 'failed';
    /** 时间戳 */
    timestamp: number;
    /** 回复给 */
    replyTo?: string | null;

    /**
     * 创建一条消息
     * @param content 消息内容
     * @param sender 发送者
     * @param receiver 接收者
     * @param type 消息类型
     */
    constructor(content: string, sender: string, receiver: string, type: MessageType) {
        this.content = content;
        this.sender = sender;
        this.receiver = receiver;
        this.type = type
        this.timestamp = Date.now();
        this.id = this.timestamp + '' + Math.floor(Math.random() * 10000);
        this.status = 'pending';
    }
}

/** 支持的消息类型 */
export enum MessageType {
    /** 测试消息 */ 'test' = 'test',
    /** 系统消息 */ 'system' = 'system',
    /** 文本消息 */ 'text' = 'text',
    /** 图片消息 */ 'image' = 'image',
    /** 视频消息 */ 'video' = 'video',
    /** 文件消息 */ 'file' = 'file',
    /** 音频消息 */ 'audio' = 'audio',
}