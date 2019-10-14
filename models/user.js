const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    account_number: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true // дом/квартира
    },
    token: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);