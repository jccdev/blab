import { DbFactory } from './db-factory';
import { User } from '../shared/models/user';

export class UserQueries {
  async getUser(userName: string): Promise<User> {
    const db = await DbFactory.get();
    const user = await db
      .collection<User>('users')
      .findOne({ userName: userName });
    return user;
  }
}


