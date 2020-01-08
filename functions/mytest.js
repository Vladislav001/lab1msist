const Counter = require('../routes/counter/counter');

function addCounterTest() {
    let data = {
        body: {
            number: 11,
            type: "Водяной",
            place: "Ванная",
            data: 33,
            date_completion: "08.01.2020"
        }
    };
    let res = {
        userId: "5da48e51d94a7520b2ecafe5"
    };


   return Counter.addData(data, res);
}

module.exports = {
    addCounterTest
};