'use strict';

var fs = require('fs');

var words = fs.readFileSync('2of12.txt').toString().split("\n");
console.log(words.length + " words in 2of12.txt");

var frequency = function (ar) {
  var mostFound = { count: 0, letters: "" };
  var found = {};
  for (var ix = 0; ix < ar.length; ix++) {
    if (ar[ix].length > 0) {
      var key = ar[ix][0].toUpperCase();
      found[key] = (found[key] || 0) + 1;
      if (found[key] > mostFound.count) {
        mostFound.count = found[key];
        mostFound.letters = key;  // return all winners of a tie
      }
      else if (found[key] === mostFound.count) {
        mostFound.letters += key; // a new champeen
      }
    }
  }
  return mostFound.letters + ": " + mostFound.count;
};

var frequency2 = function (ar) {
  var found = {};
  for (var ix = 0; ix < ar.length; ix++) {
    var keyword = ar[ix].toUpperCase();
    for (var jx = 0; jx < keyword.length; jx++) {
      var key = keyword[jx];
      found[key] = (found[key] || 0) + 1;
    }
  }
  var mostFound = { count: 0, letters: "" };
  for (var lx = 'A'; lx <= 'Z'; lx = String.fromCharCode(lx.charCodeAt() + 1)) {
    if (found[lx] > mostFound.count) {
      mostFound.count = found[lx];
      mostFound.letters = lx;  // return all winners of a tie
    }
    else if (found[lx] === mostFound.count) {
      mostFound.letters += "," + lx; // a new champeen
    }
  }
  return mostFound.letters + ": " + mostFound.count;
};

/*
var words = [
  "apple"
  ,"azimuth"
  ,"banana"
  ,"boat"
  ,"broke"
  ,"cat"
  ,"chuff"
  ,"daddy"
  ,"doo-wop"
  ,"dove"
  ,"duck"
  ,"ear"
  ,"eel"
  ,"elephant"
  ,"fan"
  ,"flop"
  ,"fluffy"
  ,"frequency"
  ,"fur"
  ,"whiff"
  ,"zyther"
];
*/

console.log("Words starting with " + frequency(words));
console.log("Total occurrence of " + frequency2(words));
