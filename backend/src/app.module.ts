import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConnect } from './database/index';
import { UserRepositoryModule } from './user/user.module';


@Module({
  imports: [ DbConnect, UserRepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
