const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
} = require("../controllers/workoutConrtroller");

const router = express.Router();

//get all workouts
router.get("/", getAllWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

module.exports = router;
