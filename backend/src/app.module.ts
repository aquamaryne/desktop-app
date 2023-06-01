import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMessages, UsersController } from './database/databases.controller';
import { DbConnect } from './database/dto';
@Module({
  imports: [DbConnect],
  controllers: [AppController, UsersController, UserMessages],
  providers: [AppService],
})
export class AppModule {}
