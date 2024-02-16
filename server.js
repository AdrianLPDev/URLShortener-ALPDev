
const { MongoClient, ServerApiVersion } = require('mongodb');
const password = encodeURIComponent('%40tB0E0Z0F7');
const uri = `mongodb+srv://AdrianLP:${password}@cluster0.c5x5l0p.mongodb.net/`;
// const uri = `mongodb://127.0.0.1:27017/URL-S`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
