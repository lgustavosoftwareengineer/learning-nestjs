import { Test, TestingModule } from '@nestjs/testing';
import { faker } from '@faker-js/faker';

import { UserModel } from 'src/models';
import { UserService } from 'src/modules/user';

import { AuthenticationController } from '../authentication.controller';

describe('AuthenticationController', () => {
  let app: TestingModule;

  const fakerUser: UserModel = {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    password: faker.internet.password(),
  };

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [AuthenticationController],
      providers: [UserService],
    }).compile();
  });

  it('should return a undefined response when user is sign up with success', () => {
    const sut = app.get<AuthenticationController>(AuthenticationController);

    expect(sut.doSignUp({ user: fakerUser })).toBeUndefined();
  });

  it('should return that user already exist when try to sign up the same user again', () => {
    const sut = app.get<AuthenticationController>(AuthenticationController);

    const signUpUser = () => sut.doSignUp({ user: fakerUser });
    signUpUser();

    expect(signUpUser).toThrowError('User already exist in database');
  });
});
