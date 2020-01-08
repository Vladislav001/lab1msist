const expect = require('chai').expect;
const mytest = require('./mytest');
describe('Test counter', function () {
    it('test add counter', function* () {
        const result =  mytest.addCounterTest();

        expect(result).to.eql(true);
    })
});