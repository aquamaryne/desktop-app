import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/types/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SearchMiddleware } from './user.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserRepositoryModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(SearchMiddleware).forRoutes(UserController);
    }
}

