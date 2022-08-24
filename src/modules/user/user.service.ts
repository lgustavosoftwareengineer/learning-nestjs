import { Injectable } from '@nestjs/common';
import { UserModelWithoutID } from 'src/models';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  private userRepository = new UserRepository();

  create(user: UserModelWithoutID) {
    const foundUser = this.userRepository.findByEmail(user.email);

    if (foundUser) {
      throw new Error('User already exist in database');
    }

    this.userRepository.create(user);
  }
}
