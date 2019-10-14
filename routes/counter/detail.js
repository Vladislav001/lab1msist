const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {
        let counter = await Counter.findOne({ _id: req.params.id });

        res.render('counter/detail', {
            counter: counter,
            user: req.user
        });
    } catch (err) {
        throw err;
    }
};