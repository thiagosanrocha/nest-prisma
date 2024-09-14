import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  age: number | null;

  name: string;
  email: string;
  createdAt: Date;
}
