import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './db/user.entity';
//import { DbController } from './db/db.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: '',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
