const Counter = require('../models/counter');

exports.get = async function (req, res) {
    try {

        let statistics = {};

        if(req.user != undefined)
        {
            let counters = await Counter.find({user_id: req.user._id});

            // получим Сумма, Среднее, Минимальное, Максимальное
            if(counters.length > 0)
            {
                statistics = {
                    amount: 0,
                    average: 0,
                    min: counters[0].data,
                    max: counters[0].data
                };

                for (let i = 0; i < counters.length; i++)
                {
                    let value = Number (counters[i].data);
                    statistics['amount'] += value;

                    if(value > statistics['max'])
                    {
                        statistics['max'] = value;
                    }

                    if(value < statistics['min'])
                    {
                        statistics['min'] = value;
                    }
                }

                statistics['average'] = statistics['amount'] / counters.length;
            }


            res.render('profile', {
                counters: counters,
                user: req.user,
                statistics: statistics
            });
        }
        else if(res.userId)
        {
            // через токен
            let counters = await Counter.find({user_id: res.userId});
            res.status(200).json(counters);
        }
        else
        {
            // например под инкогнито в браузере
            let counters = await Counter.find({});
            res.status(200).json(counters);
        }

    } catch (err) {
        throw err;
    }
};