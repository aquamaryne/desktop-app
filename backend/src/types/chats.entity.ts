import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ChatUser } from "./chat.entity";
import { Message } from "./message.entity";

@Entity()
export class ChatRoom{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => ChatUser, chatUser => chatUser.chatRoom)
    members: ChatUser[];

    @OneToMany(() => Message, message => message.chatRoom)
    message: Message[];
}