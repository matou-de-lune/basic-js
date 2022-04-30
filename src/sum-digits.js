const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nums = String(n).split('').map(el => Number(el));
  let ans = nums.reduce((acc, num) => acc + num, 0);
  console.log(nums, ans)
  return ans < 10 ? ans : getSumOfDigits(ans);
}

module.exports = {
  getSumOfDigits
};
