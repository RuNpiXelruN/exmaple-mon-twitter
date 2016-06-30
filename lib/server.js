const express = require('express');
const app = express();
const userRoutes = require('../routes/user');
const tweetRoutes = require('../routes/tweets');


app.set('view engine', 'ejs');
app.use('/users', userRoutes);
app.use('/tweet', tweetRoutes);



module.exports = app;
