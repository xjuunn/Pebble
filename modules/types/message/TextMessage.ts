import { MessageType } from "./Message";

export default class TextMessage extends Message {
    constructor(content: string, sender: string, receiver: string) {
        super(content, sender, receiver, MessageType.text);
    }
}