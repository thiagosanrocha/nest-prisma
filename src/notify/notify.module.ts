import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { NotifyService } from './notify.service';
import { NotifyController } from './notify.controller';
import { NotifyRepository } from './repository/notify.repository';

@Module({
  controllers: [NotifyController],
  providers: [NotifyService, PrismaService, NotifyRepository],
})
export class NotifyModule {}
