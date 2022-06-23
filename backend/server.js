require("dotenv").config();

const express = require("express");
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

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listeneing on port", process.env.PORT);
});
