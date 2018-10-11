
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    
});
module.exports = mongoose.model('User', UserSchema);
