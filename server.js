const mongoose=require('mongoose');
const express=require('express');
const logger=require('morgan');
const mongojs=require('mongojs');

const PORT = process.env.PORT || 3000;
const app=express();

app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/workout',
{useNewUrlParser:true, useFindAndModify:false});

app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));

app.listen(PORT, ()=> {console.log('The app is starting on port ${PORT}!')});