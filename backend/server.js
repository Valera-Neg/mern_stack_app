require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routs/workouts.js");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//rourtes
app.use("/api/workouts", workoutRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listeneing on port", process.env.PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
