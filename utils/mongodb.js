// utils/mongodb.js

import { MongoClient } from 'mongodb';

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

if (process.env.NODE_ENV === 'development') {
  // I utvecklingsläge, använd en global variabel för att återanvända klienten över modulens omladdningar orsakade av HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // I produktionsläge är det bäst att inte använda en global variabel.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  if (!client) {
    client = await clientPromise;
  }
  return client.db();
}
