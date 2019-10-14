const Counter = require('../../models/counter');

exports.post = function (req, res) {
    try {
        let newCounter = new Counter();
        newCounter.type = req.body.type;
        newCounter.place = req.body.place;
        newCounter.data = req.body.data;
        newCounter.date_completion = new Date();
        newCounter.user_id = req.user._id;

        newCounter.save();

        res.status(200).json({
            "message": 'Данные успешно добавлены'
        });
    } catch (err) {
        res.status(403).json({
            'error': 'Bad Request'
        });
        throw err;
    }
};