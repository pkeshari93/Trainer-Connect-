const express = require("express");

// initialize app to express
const app = express();

// initial route to home page
app.get("/", (req, res) => res.send("Hello!!!"));

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
