const expect = require('chai').expect;
const mytest = require('./mytest');
describe('The webpage module', function () {
    it('saves the content', function* () {
        const resMessage = 'Данные успешно добавлены';

        const result =  mytest.functionOne();

        expect(result).to.eql('777');
        // expect(result).to.eql('555');
    })
});