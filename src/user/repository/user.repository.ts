import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prima: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prima.user.create({ data: createUserDto });
  }
  async findAll() {
    return this.prima.user.findMany();
  }
}
