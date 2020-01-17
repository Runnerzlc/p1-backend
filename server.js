'use strict';
const express    = require('express');        
const bodyParser = require('body-parser');

const app        = express();                 

const router = require('./router');

const mongoose   = require('mongoose');
mongoose.connect("mongodb+srv://cluster0-5dbqp.mongodb.net/test");
//mongodb+srv://admin:<password>@cluster0-5dbqp.mongodb.net/test?retryWrites=true&w=majority

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8888;    

app.use('/api', router);

app.get('/', (req, res) => {
                res.json({ message: 'hooray! welcome to server home' });   
});

app.listen(port, () => {
                console.log('hello' + port)}
);

