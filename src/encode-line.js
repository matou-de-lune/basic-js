const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ans = '';
  let k = 0;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    k++;
    if (arr[i] != arr[i + 1] || i == arr.length - 1) {
      k == 1 ? ans += arr[i] : ans += k + arr[i];
      k = 0;
    }
  }
  return ans;
}

module.exports = {
  encodeLine
};
