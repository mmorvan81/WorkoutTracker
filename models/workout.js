const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {day: 
        {type: Date, default:()=>new Date()},
    exercises: [{
        name:{type: String,
        question: 'What is the new workout?'
        },
        type:{
            type: String,
        question: 'What is the type of the new workout?'
        },
        weight:{
            type: Number,
        question: 'How much weight are you using?'
        },
        sets:{
            type: Number,
        question: 'How many sets are you doing?'
        },
        reps:{
            type: Number,
        question: 'How many reps must you do?'
        },
        duration:{
            type: Number,
        question: 'How long did the duration of the new exercises take you to do?'
        },
        distance:{
            type: Number,
        }
    }]
},
{toJson:{virtuals:true}}
);
const workout = mongoose.model('Workout', workoutSchema); 
module.exports = workout;