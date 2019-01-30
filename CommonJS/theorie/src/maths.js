// (function (exports, require, module, __filename, __dirname) { 

function convertToNumber(val) {
  return Number(val);
} 

function sum(a, b) {
  return convertToNumber(a) + convertToNumber(b);
}

function multiply(a, b) {
  return a * b;
}

exports.sum = sum;
exports.multiply = multiply;
// });