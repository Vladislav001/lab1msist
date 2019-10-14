const Counter = require('../models/counter');

exports.get = async function (req, res) {
    try {
        let counters = await Counter.find({user_id: req.user._id});

        res.render('profile', {
            counters: counters,
            user: req.user
        });

    } catch (err) {
        throw err;
    }
};