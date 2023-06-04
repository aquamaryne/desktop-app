import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { ChatUser } from "./chat.entity";
import { Message } from "./message.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    @IsNotEmpty()
    name: string;

    @Column({ nullable: true })
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @Column({ nullable: true })
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @OneToMany(() => ChatUser, chatUser => chatUser.user)
    chatRoom: ChatUser[];

    @OneToMany(() => Message, message => message.user)
    message: Message[];
}