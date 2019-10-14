const Counter = require('../models/counter');

exports.get = async function (req, res) {
    try {
        let counters = await Counter.find({});

        res.render('profile', {
            counters: counters,
            user: req.user
        });

    } catch (err) {
        throw err;
    }
};