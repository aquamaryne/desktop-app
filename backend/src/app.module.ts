import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabasesController } from './database/databases.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: '',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, DatabasesController],
  providers: [AppService],
})
export class AppModule {}
