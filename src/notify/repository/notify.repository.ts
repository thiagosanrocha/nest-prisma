import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotifyDto } from '../dto/create-notify.dto';

@Injectable()
export class NotifyRepository {
  constructor(private readonly prima: PrismaService) {}

  async create(createNotifyDto: CreateNotifyDto) {
    return this.prima.notifyGn.create({ data: createNotifyDto });
  }
  async findAll() {
    return this.prima.notifyGn.findMany();
  }
}
