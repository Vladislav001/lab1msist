const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {

        if(req.user._id)
        {
            let counters = await Counter.find({user_id: req.user._id});
        }
        else
        {
            // через токен
            let counters = await Counter.find({});
        }

        res.status(200).json(counters);
    } catch (err) {
        throw err;
    }
};