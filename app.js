const express = require('express');
const res = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

//Middlewares
app.use(bodyParser.json());

// Listening to server
app.listen(3000);



//Routers
app.get( '/', (req, res) => {
    res.send('We are on home');
});

//Import Routers
const postsRoute = require('./routes/posts');
app.use('/posts' , postsRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB!'))