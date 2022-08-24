import { Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('sign-up')
  doSignUp(): string {
    return this.authenticationService.doLogin();
  }

  @Post('login')
  doLogin(): string {
    return this.authenticationService.doLogin();
  }
}
