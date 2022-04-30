const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(str, key) {
    if (str == undefined || key == undefined) throw new Error('Incorrect arguments!');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let encrypted = '';
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (j == key.length) j = 0;
      if (chars.indexOf(str[i]) != -1) {
        encrypted += chars[(chars.indexOf(str[i]) + chars.indexOf(key[j])) % chars.length];
      } else {
        encrypted += str[i];
        j--;
      }
    }
    return this.direct ? encrypted : encrypted.split('').reverse().join('');
  }
  decrypt(str, key) {
    if (str == undefined || key == undefined) throw new Error('Incorrect arguments!');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let decrypted = '';
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (j == key.length) j = 0;
      if (chars.indexOf(str[i]) != -1) {
        decrypted += chars[(26 + chars.indexOf(str[i]) - chars.indexOf(key[j])) % chars.length];
      } else {
        decrypted += str[i];
        j--;
      }
    }
    return this.direct ? decrypted : decrypted.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
