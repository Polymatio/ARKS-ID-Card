const express = require('express');
const app = express();
const path = require('path')
const PORT = 6180;

/*Set view engine to read ejs files*/
app.set('view engine', 'ejs');

/*Get '/' to send the home.ejs file for homepage*/
app.get("/", (req, res) => {
    res.render('home');
})

/*Use css and js files*/
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

/*Assigning Routers*/
const cardRouter = require('./routes/card');
const arksRouter = require('./routes/arks');

app.use('/card', cardRouter);
app.use('/arks', arksRouter);

/*Listen function to connect to a PORT*/
app.listen(PORT, ()=>{
    console.log(`${PORT} WE ARE ARKS!!!`)
})