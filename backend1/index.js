const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileRoutes');  // Import file routes
let dotenv = require('dotenv')
const app = express();
let cors =require('cors')

let path = require('path');
const { access } = require('fs');

dotenv.config()

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],    
}))



app.use('/uploads',express.static(path.join(__dirname,'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error: ", err));

// API routes
app.use('/api', fileRoutes);


// Start the server

app.listen(process.env.PORT || 5000);
