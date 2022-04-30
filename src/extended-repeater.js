const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = String(options.separator ?? '+');
  const addition = (options.addition === null) ? 'null' : String(options.addition ?? '');
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = String(options.additionSeparator ?? '|');
  const add = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return Array(repeatTimes).fill(str + add).join(separator);
}

module.exports = {
  repeater
};
