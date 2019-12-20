'use strict';
const express    = require('express');        
const bodyParser = require('body-parser');

const app        = express();                 

const router = require('./router');

const mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds056789.mlab.com:56789/dev');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8888;    

app.use('/api', router);

app.get('/', (req, res) => {
                res.json({ message: 'hooray! welcome to our home!' });   
});

app.listen(port, () => {
                console.log('Magic happens on port ' + port)}
);

