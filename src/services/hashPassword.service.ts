import * as bcrypt from 'bcrypt';

export class HashPassword {
  constructor(
    private readonly password: string,
    private readonly salt: number = 10,
  ) {}

  execute() {
    return bcrypt.hashSync(this.password, this.salt);
  }
}
