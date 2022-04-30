const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let ans = {};
  for (let dom of domains) {
    let dompart = dom.split('.');
    dompart.reverse();
    let d = '';
    for (let i of dompart) {
      d += '.' + i;
      ans[d] = ans[d] == null ? 1 : ans[d] + 1;
    }
  }
  return ans;
}

module.exports = {
  getDNSStats
};
