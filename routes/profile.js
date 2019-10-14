const Counter = require('../models/counter');

exports.get = async function (req, res) {
    try {
        let counters = await Counter.find({});

        res.render('counters', {
            counters: counters
        });
    } catch (err) {
        throw err;
    }
};