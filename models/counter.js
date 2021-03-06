const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true // номер счетчика
    },
    type: {
        type: String,
        required: true // водяной/газовый
    },
    place: {
        type: String, // ванная, кухня, комната
    },
    data: {
        type: Number // сумма
    },
    date_completion: {
        type: String,
    },
    user_id: {
        type: String,
        default: ''
    },
});

module.exports = mongoose.model('Counter', counterSchema);