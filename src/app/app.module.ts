import { Module } from '@nestjs/common';

import { AuthenticationModule, UserModule } from 'src/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthenticationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
