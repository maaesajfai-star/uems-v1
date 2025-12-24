// apps/api/src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Feature modules will be added here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
