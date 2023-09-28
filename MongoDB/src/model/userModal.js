const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        // minLength:[4, "please pass correct value for firstName"]
        minLength: 4
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 10
    },
    occupation: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    characteristics: {
        type: Array
    },
    team: {
        type: String,
        enum: ["India", "IPL"]
    }
}, {versionKey: false})

const User = mongoose.model('users', UserSchema);

module.exports = User