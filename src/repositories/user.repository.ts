import { UserModel } from 'src/models';
import { HashPassword } from 'src/services';
import { DatabaseService } from 'src/services/database.service';

export class UserRepository {
  users = new DatabaseService<UserModel>();

  create(user: UserModel) {
    const hashPassword = new HashPassword(user.password);
    user.password = hashPassword.execute();

    this.users.add(user);
  }

  findByEmail(email: string) {
    return this.users.getAll().find((element) => element.email === email);
  }
}
