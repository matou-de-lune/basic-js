const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = String(n);
  let j = s.length - 1;
  for (let i = 0; i <= s.length - 2; i++) {
    if (s[i] < s[i + 1]) {
      j = i;
      break;
    }
  }
  return Number(s.slice(0, j) + s.slice(j + 1,))
}

module.exports = {
  deleteDigit
};
