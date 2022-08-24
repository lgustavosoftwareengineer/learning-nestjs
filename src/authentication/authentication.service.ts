import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  doLogin() {
    return 'Devo fazer login';
  }
}
