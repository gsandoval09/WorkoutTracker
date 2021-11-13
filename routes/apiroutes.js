const router = require("express").Router();
const Workout = require("./../models/workout.js");

router.post("/api/workouts", (req,res) => {
    
}),
router.put("/api/workouts/:id", ({body,params},res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
}),
router.get("/api/workouts", (req,res) => {
   
}),
router.get("/api/workouts/range", (req,res) => {
    
}),
router.delete("/api/workouts", ({body},res) => {
    
})

module.exports = router;
