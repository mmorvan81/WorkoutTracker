const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date, 
        default:()=>new Date()},
     exercises: [{
        name:{type: String,
        question: 'What is the new workout?'
        },
        type:{
            type: String,
        question: 'Type of new workout?'
        },
        weight:{
            type: Number,
        },
        sets:{
            type: Number,
        },
        reps:{
            type: Number,
        },
        duration:{
            type: Number,
        },
        distance:{
            type: Number,
        }}]
},
);
const Workout = mongoose.model('Workout', workoutSchema); 
module.exports = Workout;