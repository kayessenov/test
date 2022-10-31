const express = require("express");
const app = express();



app.use('/login', require('./login'));
app.use('/registration', require('./registration'));
app.use('/home', require('./home'));


module.exports = app;