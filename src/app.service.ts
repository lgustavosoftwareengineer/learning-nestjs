import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BORA APRENDER ESSAS PORRA RAPAZ!!!';
  }
}
