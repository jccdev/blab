import { MongoClient, Db } from 'mongodb';

export class DbFactory {
  private static db: Db;
  private static client: MongoClient;

  static async get(): Promise<Db> {
    if (!this.db) {
      const url = "mongodb://localhost:27017/blab";
      this.client = await  MongoClient.connect(url);
      this.db = await this.client.db('blab');
    }
    return this.db;
  }

  static async destroy(): Promise<void> {
    await this.client.close();
    this.db = null;
    this.client = null;
  }
}
