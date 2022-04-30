const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let ans = [];
  let i = 0;
  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  while (i < arr.length) {
    switch (arr[i]) {
      case '--discard-next': {
        if (i + 1 <= arr.length) arr[i + 1] = null;
        i++;
        break;
      }
      case '--discard-prev': {
        if (ans.length > 0 & (arr[i - 1] != null)) ans.pop();
        break;
      }
      case '--double-prev': {
        if (i - 1 > 0 & (arr[i - 1] != null)) ans.push(arr[i - 1]);
        break;
      }
      case '--double-next': {
        if (i + 1 <= arr.length & (arr[i + 1] != null)) ans.push(arr[i + 1]);
        break;
      }
      default: ans.push(arr[i]);
    }
    i++
  }
  return ans;
}

module.exports = {
  transform
};
