const expect = require('chai').expect;
const mytest = require('./mytest');
describe('The webpage module', function () {
    it('test add counter', function* () {
        const result =  mytest.addCounterTest();

        expect(result).to.eql(true);
    })
});