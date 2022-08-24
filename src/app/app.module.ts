import { Module } from '@nestjs/common';

import { AuthenticationController, AuthenticationService } from 'src/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AuthenticationController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
