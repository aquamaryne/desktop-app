import { Module } from '@nestjs/common';
import { DbConnect } from './database/index';
import { UserRepositoryModule } from './user/user.module';


@Module({
  imports: [ DbConnect, UserRepositoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
