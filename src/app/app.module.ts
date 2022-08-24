import { Module } from '@nestjs/common';

import { AuthenticationModule, UserModule } from 'src/modules';

@Module({
  imports: [AuthenticationModule, UserModule],
})
export class AppModule {}
