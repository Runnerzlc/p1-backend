
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    gender : String,
    age : Number,
    password : String,
})

module.exports = mongoose.model('User', userSchema);