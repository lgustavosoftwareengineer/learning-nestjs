import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from 'src/modules/user';
import { SignUpDTO } from './dtos/sign-up.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  doSignUp(@Body() signUpDTO: SignUpDTO) {
    const { user } = signUpDTO;

    try {
      this.userService.create(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
