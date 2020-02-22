import { MongoClient } from 'mongodb';

const url = "mongodb://localhost:27017";

export const up = async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("blab");

   await db.createCollection('users');
   await db.createCollection("channels");
   await db.createCollection("messages");
  
  await client.close();
}

export const down = async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = client.db("blab");
  
  await db.dropCollection('users');
  await db.dropCollection("channels");
  await db.dropCollection("messages");
  
  await client.close();
}
