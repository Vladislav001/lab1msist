const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {

        let counters = '';

        if(req.user != undefined)
        {
            counters = await Counter.find({user_id: req.user._id});
        }
        else
        {
            // через токен
            counters = await Counter.find({});
        }

        res.status(200).json(counters);
    } catch (err) {
        throw err;
    }
};