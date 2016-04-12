var should = require('should');
var emoji = require('../src/emoji');

describe("emoji", function() {
    it('should not change text without smileys', function(){
        emoji.format("Hello world").should.equal("Hello world");
    });
    it('should replace smiley with unicode symbol', function(){
        emoji.format("Hi! :)").should.equal("Hi! ☺");
    });
    it('should replace several smiles', function(){
        emoji.format("Hi! :) :)").should.equal("Hi! ☺ ☺");
    });
});