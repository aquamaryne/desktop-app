import { Module } from '@nestjs/common';
import { DbConnect } from './database/index';
import { UserRepositoryModule } from './user/user.module';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { TerminusModule } from '@nestjs/terminus';
import { MeessagesController } from './meessages/meessages.controller';

@Module({
  imports: [ 
    DbConnect, 
    UserRepositoryModule, 
    HealthModule, 
    TerminusModule
  ],
  controllers: [HealthController, MeessagesController],
  providers: [],
})
export class AppModule {}
