import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConnect } from '.';
import { UserService } from './user/user.service';
import { UserRepositoryModule } from './user/user.module';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [UserRepository, DbConnect, UserRepositoryModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
