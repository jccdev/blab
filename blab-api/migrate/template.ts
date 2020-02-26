import { MongoClient } from 'mongodb';
import { assert } from 'console';

const url = "mongodb://localhost:27017/test";

export const up = (next: Function) => {
  MongoClient.connect(url, null, (err: any, client: any) => {
    assert.equal(null, err);   
    const db = client.db("blab");
    
  });
}

export const down = (next: Function) => {
  next()
}