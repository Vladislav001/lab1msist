const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true //
    },
    type: {
        type: String, // ванная, кухня, комната
    }
});

module.exports = mongoose.model('Counter', counterSchema);