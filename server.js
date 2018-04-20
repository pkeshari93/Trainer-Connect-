const express = require("express");
const mongoose = require("mongoose");

// initialize app to express
const app = express();

// db config
const db = require("./config/keys").mongoURI;

// connecting to MongoDB through Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// initial route to home page
app.get("/", (req, res) => res.send("Hello!!!"));

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
