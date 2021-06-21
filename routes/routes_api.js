const router = require('express').Router();
const Workout = require('../models');

router.get('/api/workouts',(req,res)=> 
    {Workout.find({})
    .sort({day:1})
        .then((data)=>{res.json(data);
            console.log(data);})
    .catch((err)=> {res.status(400).json(err);
            console.log(err);
});
});
router.post('/api/workouts',({body},res)=> 
    {Workout.create(body)
        .then((data)=>{res.json(data);
            console.log(data);})
    .catch((err)=> {res.status(400).json(err);
            console.log(err);
});
});
router.put('/api/workouts/:id',({body, params},res)=> 
    {Workout.findByIdAndAmend(params.id,
        {$push:{exercises: body}},
        {new:true, runValidators: true})
        .then((data)=>{res.json(data);
            console.log(data);})
    .catch((err)=> {res.status(400).json(err);
            console.log(err);
});
});
router.get('/api/workouts/range',(req,res)=> 
    {Workout.find()
        .then((data)=>{res.json(data);
            console.log(data);})
    .catch((err)=> {res.status(400).json(err);
            console.log(err);
});
});
router.post('/api/workouts/range',(req,res)=> 
    {Workout.create({})
        .then((data)=>{res.json(data);
            console.log(data);})
    .catch((err)=> {res.status(400).json(err);
            console.log(err);
});
});
module.exports = router;