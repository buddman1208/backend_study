var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://localhost:27017/backend')

var UserSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String},
    password: {type: String},
    profile: {type: String},
    token: {type: String}
})

Users = mongoose.model('users', UserSchema)

exports.Users = Users
