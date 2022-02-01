// route: /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      //db connection
      const client = await MongoClient.connect(
        "mongodb+srv://javaMonk:javaMonkCluster0%40123@cluster0.u42sx.mongodb.net/Meetups?retryWrites=true&w=majority"
      );
      const collection = client.db("Meetups").collection("MeetupsCollection");
      //db operation
      const result = await collection.insertOne(data);
      console.log(result);
      //closing connection
      client.close();
      res.status(201).json({ response: "Meetup Inserted" });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  } else {
    //sending bad request
    res.status(400).json({ response: "Bad request" });
  }
}

export default handler;
