import { NotifyGn } from '@prisma/client';

export class NotifyEntity implements NotifyGn {
  id: string;
  notification: string;
  createdAt: Date;
}
