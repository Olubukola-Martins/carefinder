import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://Jennifer:Jennifer@cluster24.sttnnki.mongodb.net/?retryWrites=true&w=majority`
  );
  return client;
}


// mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.sttnnki.mongodb.net/?retryWrites=true&w=majority