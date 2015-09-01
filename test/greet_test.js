'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('greet', function() {
  it('should greet the name passed on the command line', function() {
    expect(greet('test')).eql('hello test');
  });
});
