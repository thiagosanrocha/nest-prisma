import { Test, TestingModule } from '@nestjs/testing';
import { DialogflowService } from '../services/dialogflow.service';
import { DialogflowController } from './dialogflow.controller';

describe('DialogflowController', () => {
  let controller: DialogflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialogflowController],
      providers: [DialogflowService],
    }).compile();

    controller = module.get<DialogflowController>(DialogflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
