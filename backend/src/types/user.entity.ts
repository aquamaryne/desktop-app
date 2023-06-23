import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from "typeorm";
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import  * as bcrypt from 'bcrypt';
import { ChatUser } from "./chat.entity";
import { Message } from "./message.entity";
import 'reflect-metadata';
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

    @BeforeInsert()
    async hashPassword(){
        if(this.password){
            const salt = await bcrypt.genSalt();
            this.password = await bcrypt.hash(this.password, salt);
        }
    }

    @OneToMany(() => ChatUser, chatUser => chatUser.user)
    chatRoom: ChatUser[];

    @OneToMany(() => Message, message => message.user)
    message: Message[];
}

