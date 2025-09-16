const express = require("express");
const cors = require("cors");
const { connectToServer } = require("./connect");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
	res.json({ message: "Backend running smoothly" });
});

app.listen(PORT, () => {
	connectToServer();
	console.log(`Server connected on Port: ${PORT}`);
});
