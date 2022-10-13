const express = require("express");
const app = express();

const genre = require("./genre");
const book = require("./book");
const user = require("./user");
const response = require("./Response")
const anketa = require('./anketa')
const booking = require("./Booking");
const comment = require("./Comment");
const news = require('./news')
const admin = require("./admin");

const { isAuth, isAdmin, isModer, isNotUser } = require("../middlewares/auth")

app.use('/genre', genre);
app.use('/book', book);
app.use('/user', user);
app.use('/response', isAuth, response);
app.use('/anketa', isAuth, anketa);
app.use("/booking", isAuth, booking);
app.use("/comment",isAuth, comment);
app.use('/news', news);
app.use("/admin", isAuth,isNotUser, admin)

module.exports = app;