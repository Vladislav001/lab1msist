const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {
        res.render('counter/detail', {
            user: req.user
        });
    } catch (err) {
        throw err;
    }
};