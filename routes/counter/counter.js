const CounterDB = require('../../models/counter');
const format = require('date-format');

class Counter {

    static addData(req, res) {
        let newCounter = new CounterDB();
        newCounter.number = req.body.number;
        newCounter.type = req.body.type;
        newCounter.place = req.body.place;
        newCounter.data = req.body.data;
        newCounter.date_completion = format('dd.MM.yyyy', new Date());

        if (req.user != undefined) {
            newCounter.user_id = req.user._id;
        } else if (res.userId) {
            // через токен
            newCounter.user_id = res.userId;
        }

        newCounter.save();

        res.status(201).json({
            "message": 'Данные успешно добавлены',
            "data": req.body
        });

    }

}

module.exports = Counter;