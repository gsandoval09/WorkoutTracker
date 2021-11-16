const router = require("express").Router();
let db = require("../models");
var ObjectId = require('mongoose').Types.ObjectId; 
// const mongoose = requrie("mongoose");


//POST route to create workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
//Adds a new excercise
router.put("/api/workouts/:id", ({body,params},res) => {
    db.Workout.findOne({"_id":new ObjectId(params.id)})
    .then(dbWorkout => {
        console.log(dbWorkout);
        //TO-DO: add code below to add new excercise
    db.Workout.insertOne(
        {
            type: "resistance",
            name: "Bicep Curl",
            duration: 20,
            weight: 100,
            reps: 10,
            sets: 4
          }
    )
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
}),
router.get("/api/workouts", (req,res) => {
    // console.log(req);
    console.log("db", db.Workout);
    db.Workout.find({})
   .populate("workouts")
   .sort({ date: -1})
   .then(dbWorkout => {
    //    console.log("workouts", dbTransaction);
    res.json(dbWorkout);
   })
   .catch(err => {
       res.status(400).json(err);
   });
}),
router.get("/api/workouts/range", (req,res) => {
    db.Workout.find({}).
    then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
}),

// router.delete("/api/workouts", ({body},res) => {
    
// })

module.exports = router;
