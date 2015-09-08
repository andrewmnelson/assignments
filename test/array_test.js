'use strict';

var expect = require('chai').expect;
var myAr = require('../myArray');
Array.prototype.myPush = myAr.myPush;
Array.prototype.myPop = myAr.myPop;
Array.prototype.myShift = myAr.myShift;
Array.prototype.myUnshift = myAr.myUnshift;
var unique = require('../unique');

describe('Array reimplementation test', function() {
  it('should return array length on push', function() {
    var ar = ["one"];
    expect(ar.myPush("two")).to.eql(ar.length);
    expect(ar.myPush("three")).to.eql(ar.length);
    expect(ar.length).to.eql(3);
    expect(ar).to.eql(["one", "two", "three"]);
  });
  it('should return last element on pop', function() {
    var ar = ["one", "two"];
    expect(ar.myPop()).to.eql("two");
    expect(ar.length).to.eql(1);
    expect(ar.myPop()).to.eql("one");
    expect(ar.length).to.eql(0);
    expect(ar.myPop()).to.eql(undefined);
    expect(ar.length).to.eql(0);
  });
  it('should return first element on shift', function() {
    var ar = ["one", "two"];
    expect(ar.myShift()).to.eql("one");
    expect(ar.length).to.eql(1);
    expect(ar.myShift()).to.eql("two");
    expect(ar.length).to.eql(0);
    expect(ar.myShift()).to.eql(undefined);
    expect(ar.length).to.eql(0);
  });
  it('should return array length on unshift', function() {
    var ar = ["three"];
    expect(ar.myUnshift("two")).to.eql(ar.length);
    expect(ar.myUnshift("one")).to.eql(ar.length);
    expect(ar.length).to.eql(3);
    expect(ar).to.eql(["one", "two", "three"]);
  });
});

describe('unique() test', function() {
  it('should handle null and empty arguments', function() {
    expect(unique(undefined)).to.eql(undefined);
    expect(unique(null)).to.eql(null);
    expect(unique([])).to.eql([]);
  });
  it('should leave an array without duplicates untouched', function() {
    var ar = [0, 1, '1', 2, 3];
    expect(unique(ar)).to.eql(ar);
  });
  it('should leave the first occurrence of a value in place', function() {
    var ar = ['A', 'B', 'A'];
    expect(unique(ar)).to.eql(['A', 'B']);
  });
  it('should remove all duplicates', function () {
    var ar = ['A', 'B', 'A', 'C', 'A'];
    expect(unique(ar)).to.eql(['A','B','C']);
  });
  it('should not conflate falsy entries', function() {
    var ar = [0, false, null, ""];
    expect(unique(ar)).to.eql([0, false, null, ""]);
  });
});
