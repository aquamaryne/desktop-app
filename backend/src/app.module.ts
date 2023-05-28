import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './db/typeorm'; 
import { DbController } from './db/db.controller';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'projecttwo',
      entities,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, DbController],
  providers: [AppService],
})
export class AppModule {}
