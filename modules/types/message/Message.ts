export default interface Message {
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
}

export enum MessageType {
    /** 测试消息 */ 'test' = 'test',
    /** 系统消息 */ 'system' = 'system',
    /** 文本消息 */ 'text' = 'text',
    /** 图片消息 */ 'image' = 'image',
    /** 视频消息 */ 'video' = 'video',
    /** 文件消息 */ 'file' = 'file',
    /** 音频消息 */ 'audio' = 'audio',
}