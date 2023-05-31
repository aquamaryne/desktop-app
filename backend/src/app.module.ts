import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesController } from './database/databases.controller';
import { DbConnect } from './database/dto';
@Module({
  imports: [DbConnect],
  controllers: [AppController, DatabasesController],
  providers: [AppService],
})
export class AppModule {}
