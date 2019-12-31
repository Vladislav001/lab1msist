const Counter = require('./counter');

exports.post = function (req, res) {
    try {
        Counter.addData(req, res);
    } catch (err) {
        res.status(403).json({
            'error': 'Bad Request'
        });
        throw err;
    }
};