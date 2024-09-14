import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';

import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository],
})
export class UserModule {}
