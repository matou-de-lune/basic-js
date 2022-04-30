const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  function countTurns(disks) {
    if (disks == 1) { return 1 }
    else { return 2 * countTurns(disks - 1) + 1 }
  }
  let ans = {};
  ans.turns = countTurns(disksNumber);
  ans.seconds = Math.floor(ans.turns * 3600 / turnsSpeed);
  return ans;
}

module.exports = {
  calculateHanoi
};
