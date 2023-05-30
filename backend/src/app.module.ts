import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabasesController } from './database/databases.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'projecttwo',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, DatabasesController],
  providers: [AppService],
})
export class AppModule {}
