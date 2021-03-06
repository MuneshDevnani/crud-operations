const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors =require ('cors');

const userRoutes = require('./api/routes/users');
const postRoutes = require('./api/routes/post');

mongoose.connect('mongodb://localhost:27017/task', {useNewUrlParser: true}, () => {
    console.log("data base connected");
    
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use ('/users', userRoutes);
app.use ('/posts', postRoutes)

app.use((req,res,next)=>{
    const error =new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({  
        error:{
            message:error.message
        }
    })
})

module.exports= app;