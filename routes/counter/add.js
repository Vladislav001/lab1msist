const Counter = require('../../models/counter');
const format = require('date-format');

exports.post = function (req, res) {
    try {
        let newCounter = new Counter();
        newCounter.number = req.body.number;
        newCounter.type = req.body.type;
        newCounter.place = req.body.place;
        newCounter.data = req.body.data;
        newCounter.date_completion = format('dd.MM.yyyy', new Date());
        newCounter.user_id = req.user._id;

        newCounter.save();

        res.status(201).json({
            "message": 'Данные успешно добавлены'
        });
    } catch (err) {
        res.status(403).json({
            'error': 'Bad Request'
        });
        throw err;
    }
};