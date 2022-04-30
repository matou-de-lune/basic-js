const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let a = Array(matrix[0].length).fill(true);
  let ans = 0;
  for (let line of matrix) {
    for (let i = 0; i < line.length; i++) {
      if (a[i]) {
        line[i] == 0 ? a[i] = false : ans += line[i];
      }
    }
  }
  return ans;
}

module.exports = {
  getMatrixElementsSum
};
