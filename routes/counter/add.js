const Counter = require('../../models/counter');

exports.post = function (req, res) {
    try {

        let newCounter = new Counter();
        newCounter.type = req.body.name;
        newCounter.place = req.body.place;
        newCounter.data = req.body.data;
        newCounter.date_completion = new Date();

        newCounter.save();
        res.status(200).send('');
    } catch (err) {
        res.status(403).send('');
        throw err;
    }
};