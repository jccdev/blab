import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

export const up = async (): Promise<void> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db('blab');

  const collection = await db.createCollection('users');
  await collection.createIndex({ userName: 1 }, { unique: true });
  await collection.createIndex({ email: 1 }, { unique: true });

  await client.close();
};

export const down = async (): Promise<void> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = client.db('blab');

  await db.dropCollection('users');

  await client.close();
};
