const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const todolist = require('./routes/todolist.route')
const user = require('./routes/user.route')
require('./models/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function (req, res, next) {
    console.log(req.path)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})

app.use('/api/todolist', todolist);
app.use('/api/user',user);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
