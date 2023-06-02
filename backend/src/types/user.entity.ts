import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ChatUser } from "./chat.entity";
import { Message } from "./message.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        nullable: true
    })
    name: string;

    @Column({ 
        nullable: true
    })
    email: string;
    
    @Column({ 
        nullable: true
    })
    password: string;

    @OneToMany(() => ChatUser, chatUser => chatUser.user)
    chatRoom: ChatUser[];

    @OneToMany(() => Message, message => message.user)
    message: Message[];
}