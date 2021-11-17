const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
exercises: [{
    type: {
        type:String,
        trim: true,
        required: "Enter the type of exercise"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter exercise name"
    },
    duration: {
        type: Number,
        required: "How long did you exercise?"
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    },
},

]}, {"collection": "workout"})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;