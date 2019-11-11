const Counter = require('../../models/counter');

exports.get = async function (req, res) {
    try {

        console.log(req.params.id);
        console.log(res.userId);

        let counter = await Counter.findOne({ _id: req.params.id });

        if(req.user != undefined)
        {
            res.render('counter/detail', {
                counter: counter,
                user: req.user
            });
        }
        else if(res.userId)
        {
            // через токен
            res.status(200).json(counter);
        }
        else
        {
            // например под инкогнито в браузере
            res.status(200).json(counter);
        }

    } catch (err) {
        throw err;
    }
};