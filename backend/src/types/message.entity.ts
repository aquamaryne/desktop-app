import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { ChatRoom } from "./chats.entity";

@Entity()
export class Message{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    image: string;

    @ManyToOne(() => User, user => user.message)
    user: User;

    @ManyToOne(() => ChatRoom, chatRoom => chatRoom.message)
    chatRoom: ChatRoom;
}