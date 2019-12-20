
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName : String,
    LastName : String,
    Sex : String,
    Age : Number,
    Password : String,
})

var User = mongoose.model('User', userSchema);// trans to model, model name is user

userSchema.plugin(db.autoIncrement.plugin, { model: User, field: 'id', startAt:1 });

module.exports = db.connection.model(User, userSchema);