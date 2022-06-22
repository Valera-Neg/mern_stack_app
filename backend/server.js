require("dotenv").config();

const express = require("express");

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//rourtes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listeneing on port", process.env.PORT);
});
