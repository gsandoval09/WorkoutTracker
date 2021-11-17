const router = require("express").Router();
let db = require("../models");


//POST route to create workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({})
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
    db.Workout.findByIdAndUpdate(params.id,{$push:{exercises:body}},{new:true,runValidators:true})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}),

router.get("/api/workouts", (req,res) => {
    // console.log(req);
    console.log("db", db.Workout);
    db.Workout.aggregate([
        {$addFields:{totalDuration:{$sum:"$exercises.duration"}}}
    ])
//    .sort({ date: -1})
   .then(dbWorkout => {
    //    console.log("workouts", dbTransaction);
    res.json(dbWorkout);
   })
   .catch(err => {
       res.status(400).json(err);
   });
}),
router.get("/api/workouts/range", (req,res) => {
    db.Workout.aggregate([
        {$addFields:{totalDuration:{$sum:"$exercises.duration"}}}
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
}),

// router.delete("/api/workouts", ({body},res) => {
    
// })

module.exports = router;
