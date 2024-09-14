import { PartialType } from '@nestjs/mapped-types';
import { CreateDialogflowDto } from './create-dialogflow.dto';

export class UpdateDialogflowDto extends PartialType(CreateDialogflowDto) {}
