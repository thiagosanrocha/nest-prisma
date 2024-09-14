import { Injectable } from '@nestjs/common';
import { CreateNotifyDto } from './dto/create-notify.dto';
import { UpdateNotifyDto } from './dto/update-notify.dto';
import { NotifyRepository } from './repository/notify.repository';

@Injectable()
export class NotifyService {
  constructor(private readonly notifyRepository: NotifyRepository) {}
  create(createNotifyDto: CreateNotifyDto) {
    return this.notifyRepository.create(createNotifyDto);
  }

  findAll() {
    return this.notifyRepository.findAll();
  }

  remove(id: number) {
    return `This action removes a #${id} notify`;
  }
}
