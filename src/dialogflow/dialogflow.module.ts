import { Module } from '@nestjs/common';
import { DialogflowController } from './controller/dialogflow.controller';
import { DialogflowService } from './services/dialogflow.service';

@Module({
  controllers: [DialogflowController],
  providers: [DialogflowService],
})
export class DialogflowModule {}
