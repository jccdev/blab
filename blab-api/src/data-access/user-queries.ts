import { DbFactory } from './db-factory';
import { AuthForm } from '../../../blab-shared/src/models/auth-form';

export class UserQueries {
  async getUser(userName: string): Promise<User> {
    const db = await DbFactory.get();
    const user = await db
      .collection<User>('users')
      .findOne({ userName: userName });
    return user;
  }
}

export class User {
  id: string;
  userName: string;
  email: string;
  passwordHash: string;
  salt: string;
}
