import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { ChatRoom } from "./chats.entity";

@Entity()
export class ChatUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, user => user.chatRoom)
    user: User;

    @ManyToOne(() => ChatRoom, chatRoom => chatRoom.members)
    chatRoom: ChatRoom;
}