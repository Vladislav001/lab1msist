const fs = require('fs');
const request = require('request');
const expect = require('chai').expect;
const mytest = require('./mytest');
describe('The webpage module', function () {
    it('saves the content', function* () {
        const data = '777'

        const result =  mytest.functionOne();

        expect(result).to.eql('777');
        // expect(result).to.eql('555');
    })
});