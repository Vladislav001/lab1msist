const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {
        let counters = await Counter.find({user_id: req.user._id});

        res.status(200).send(counters);
    } catch (err) {
        throw err;
    }
};