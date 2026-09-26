let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
    salary: Number

});

let users = mongoose.model('users', userSchema);

module.exports = users;