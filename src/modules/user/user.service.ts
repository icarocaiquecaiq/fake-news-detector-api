import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findAll(): Promise<string> {
    return 'List of users';
  }
}
