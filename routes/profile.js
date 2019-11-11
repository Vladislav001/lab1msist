const Counter = require('../models/counter');

exports.get = async function (req, res) {
    try {

        if(req.user != undefined)
        {
            let counters = await Counter.find({user_id: req.user._id});
            res.render('profile', {
                counters: counters,
                user: req.user
            });
        }
        else if(res.userId)
        {
            // через токен
            let counters = await Counter.find({user_id: res.userId});
            res.status(200).json(counters);
        }

    } catch (err) {
        throw err;
    }
};