var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/Projectlogin';
var mongodb = require('mongod')

mongoose.connect(url, {
    useNewUrlParser: true
});
// var regdata = mongoose.model('regdata', new Schema({
//     username: { type: String },
//     email: { type: String },
//     password: { type: String }
// }))
const userSchema = mongoose.Schema;
module.exports = mongoose.model('regdata', userSchema({
    username: { type: String },
    email: { type: String },
    password: { type: String }
}));