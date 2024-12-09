let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Solar').then(()=>{
    console.log('database connected');
})