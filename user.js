
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName : String,
    LastName : String,
    Sex : String,
    Age : Number,
    Password : String,
})

module.exports = mongoose.model('User', userSchema);