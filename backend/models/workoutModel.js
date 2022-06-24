const mongoose = require("mongoose");

const Shema = mongoose.Schema;

const workoutShema = new Shema(
  {
    title: {
      type: String,
      required: true,
    },

    repetition: {
      type: Number,
      required: true,
    },

    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutShema);
