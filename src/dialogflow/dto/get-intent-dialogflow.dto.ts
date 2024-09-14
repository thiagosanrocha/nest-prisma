import { IsNotEmpty, IsString } from 'class-validator';

export class GetIntentDialogflowDto {
  @IsString()
  @IsNotEmpty()
  userText: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
