import { Injectable } from '@nestjs/common';
import { UserModelWithoutID } from 'src/models';
import { UserService } from 'src/services/user.service';

@Injectable()
export class AuthenticationService {
  userService = new UserService();

  signUp(user: UserModelWithoutID) {
    return this.userService.create(user);
  }
}
