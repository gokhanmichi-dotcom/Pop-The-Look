const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDatabase = require("./src/config/database");

const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("POP THE LOOK API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
