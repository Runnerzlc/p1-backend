const mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/test',
    autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(DB_URL);

autoIncrement.initialize(connection);


mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});


mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = {
  mongoose:mongoose,
  connection:connection,
  autoIncrement:autoIncrement,
};