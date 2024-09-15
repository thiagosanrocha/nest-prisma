import { Injectable } from '@nestjs/common';
import { CreateNotifyDto } from '../dto/create-notify.dto';
import { PrismaService } from '../../prisma/prisma.service';

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
