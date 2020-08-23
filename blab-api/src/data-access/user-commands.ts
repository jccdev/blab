import { User } from "../shared/models/user";
import { DbFactory } from './db-factory';
import { v4 as uuidv4 } from 'uuid';

export class UserCommands {
  async saveUser(user: User): Promise<User> {
    const forSave = Object.assign({}, user, { id: uuidv4()});
    const db = await DbFactory.get();
    await db
      .collection<User>('users')
      .save(forSave);
    return user;
  }
}
