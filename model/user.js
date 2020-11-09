var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/Projectlogin';
var mongodb = require('mongod')
    //Connect to mongodb
mongoose.connect(url, {
    useNewUrlParser: true
});
// Build Schema name userSchema
const userSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String }
});
// exports module name regdata  
module.exports = mongoose.model('regdata', userSchema);