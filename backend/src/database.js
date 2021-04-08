const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

let database = null;

async function startDatabase() {
  const mongo = new MongoMemoryServer();
  const mongoDbConnectionString = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDbConnectionString, {
    useNewUrlParser: true,
  });

  if (!database) {
    database = connection.db();
    await database.collection("events").insertMany([
      {
        id: 1,
        title: "Very Fun Event",
        description: "This will be so much fun!",
        date: "2021-04-08T17:34:25+00:00",
        attendants: [
          {
            id: 1,
            name: "Andreas",
            age: 35,
          },
          {
            id: 2,
            name: "Nils",
            age: 29,
          },
        ],
      },
      {
        id: 2,
        title: "Boring Event",
        description: "Don't go to this event, the other event is so much more fun!",
        date: "2021-04-08T17:34:25+00:00",
        attendants: [
          {
            id: 3,
            name: "Anna",
            age: null,
          },
        ],
      },
    ]);
  }

  return database;
}

module.exports = startDatabase;
