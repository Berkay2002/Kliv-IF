const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Anslut till MongoDB Atlas
const uri = "mongodb+srv://berkayorhan:gkPmGvhrk93jtkqF@cluster0.7hfxiup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const collection = client.db("förening").collection("medlemmar");

    // Endpoint för att hantera medlemskapsansökningar
    app.post('/api/bli-medlem', async (req, res) => {
      const { name, email, phone } = req.body;

      try {
        const result = await collection.insertOne({ name, email, phone });
        res.status(200).send({ message: 'Ansökan mottagen', id: result.insertedId });
      } catch (error) {
        res.status(500).send({ error: 'Något gick fel. Försök igen.' });
      }
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);
