'use strict';

exports.myPush = function(elem) {
  this[this.length] = elem;
  return this.length;
};

exports.myPop = function() {
  var elem = this.length? this[this.length - 1] : undefined;
  if (this.length > 0) {
    delete this[this.length-1];
    this.length--;
  }
  return elem;
};

exports.myShift = function() {
  var elem = this[0];
  for (var ix = 1; ix < this.length; ix++) {
    this[ix - 1] = this[ix];
  }
  if (this.length > 0) {
    delete this[this.length-1];
    this.length--;
  }
  return elem;
};

exports.myUnshift = function(elem) {
  for (var ix = this.length; ix > 0; ix--) {
    this[ix] = this[ix-1];
  }
  this[0] = elem;
  return this.length;
};
