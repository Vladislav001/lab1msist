const expect = require('chai').expect;
const mytest = require('./mytest');
describe('The webpage module', function () {
    it('saves the content', function* () {
        const resMessage = 'Данные успешно добавлены';

        const result =  mytest.addCounterTest();

        expect(result).to.eql(true);
        // expect(result).to.eql('555');
    })
});