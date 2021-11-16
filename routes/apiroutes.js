const router = require("express").Router();
let db = require("../models");
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
router.put("/api/workouts/:id", ({body,params},res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        console.log(dbWorkout);
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
   .then(dbTransaction => {
    //    console.log("workouts", dbTransaction);
    res.json(dbTransaction);
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
router.delete("/api/workouts", ({body},res) => {
    
})

module.exports = router;
