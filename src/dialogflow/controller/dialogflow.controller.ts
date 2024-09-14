import { Controller, Post, Body } from '@nestjs/common';

import { GetIntentDialogflowDto } from '../dto/get-intent-dialogflow.dto';

import { DialogflowService } from '../services/dialogflow.service';

@Controller('dialogflow')
export class DialogflowController {
  constructor(private readonly dialogflowService: DialogflowService) {}

  @Post()
  getIntent(@Body() getIntentDialogflowDto: GetIntentDialogflowDto) {
    return this.dialogflowService.textQuery(getIntentDialogflowDto);
  }
}
