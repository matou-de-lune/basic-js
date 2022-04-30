const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    try {
      this.chain[position - 1]
    } catch {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }
    if (this.chain[position - 1] == undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.slice(0, position - 1).concat(this.chain.slice(position,));
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let ans = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return ans;
  }
};

module.exports = {
  chainMaker
};
