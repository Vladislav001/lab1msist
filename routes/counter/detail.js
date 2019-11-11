const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {

        let counter = await Counter.findOne({ _id: req.params.id });

        if(req.user != undefined)
        {
            res.render('counter/detail', {
                counter: counter,
                user: req.user
            });
        }
        else
        {
            // через токен
            res.status(200).json(counter);
        }

    } catch (err) {
        throw err;
    }
};