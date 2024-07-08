const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 4000;

app.get("/", (_, res) => {
  res.send(`API URL : ${process.env.API_URL}`)
});

app.listen(80, () => {
  console.log(`Server is running on port ${port}`);
});
