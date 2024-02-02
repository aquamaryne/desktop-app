import { Module } from "@nestjs/common"; 
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../types/user.entity";
import { ChatRoom } from "../types/chats.entity";
import { ChatUser } from "../types/chat.entity";
import { Message } from "../types/message.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: '',
            password: '',
            database: '',
            entities: [User, ChatRoom, ChatUser, Message],
            synchronize: true,
        }),
    ],
})

export class DbConnect{}
