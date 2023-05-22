/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './db/typeorm'; 
//import { DbController } from './db/db.controller';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: '',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
