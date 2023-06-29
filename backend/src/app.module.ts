import { Module } from '@nestjs/common';
import { DbConnect } from './database/index';
import { UserRepositoryModule } from './user/user.module';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [ 
    DbConnect, 
    UserRepositoryModule, 
    HealthModule, 
    TerminusModule
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
