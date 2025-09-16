const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

let db;

module.exports = {
	connectToServer: async () => {
		await client.connect();
		db = client.db("levesaRide");
	},
	getDB: () => {
		return db;
	},
};
