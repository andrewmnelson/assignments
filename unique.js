'use strict';

var unique = module.exports = exports = function(ar) {
  if (!ar) return ar;
  var seen = {};
  var result = [];
  for (var ix = 0; ix < ar.length; ix++) {
    if (seen[ar[ix]] !== ar[ix]) {
      result.push(ar[ix]);
      seen[ar[ix]] = ar[ix];
    }
  }
  return result;
};

