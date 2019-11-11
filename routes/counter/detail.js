const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {
        let counter = await Counter.findOne({ _id: req.params.id });

        res.status(200).json(counter);
    } catch (err) {
        throw err;
    }
};