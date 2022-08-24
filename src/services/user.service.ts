import { UserModelWithoutID } from 'src/models';
import { UserRepository } from 'src/repositories/user.repository';

export class UserService {
  userRepository = new UserRepository();

  create(user: UserModelWithoutID) {
    const foundUser = this.userRepository.findByEmail(user.email);

    if (foundUser) {
      throw new Error('User already exist in database');
    }

    this.userRepository.create(user);
  }
}
