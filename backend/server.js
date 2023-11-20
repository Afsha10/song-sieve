require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//credentials for database
const db = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: true,
});

//Connecting to database
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database !");
});


app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});


app.listen(port, () => console.log(`Listening on port ${port}`));
