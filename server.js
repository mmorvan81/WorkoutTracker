const mongoose=require('mongoose');
const express=require('express');
const logger=require('morgan');
const mongojs=require('mongojs');
  //const db=mongojs(connectionString, [collections])
const db=mongojs('mongodb://localhost/workout',['workoutdb']);

const PORT = process.env.PORT || 3001;
const app=express();

app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.mongodb_uri || 'mongodb://localhost/workoutdb',
{useNewUrlParser:true, useFindAndModify:false});

app.use(require('./routes/routes_api.js'));
app.use(require('./routes/routes_html.js'));

app.listen(PORT, ()=> {console.log('The app is starting on port ${PORT}!')});