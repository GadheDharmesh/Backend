import { Module } from '@nestjs/common';
import { usersController } from './users.controller';
import { usersService } from './users.service';

@Module({
    imports: [],
      controllers: [usersController],
      providers: [usersService],
})
export class UsersModule {}
