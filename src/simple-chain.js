const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    "use strict";
    this.chain.push(this.chain.length);
    return this;
  },
  addLink(value) {
    "use strict";
    if (typeof value === 'object'){
      if(value === null) {
        this.chain.push('null');
      } else {
        this.chain.push('[object Object]');
      }
    } else if (typeof value === 'function') {
      this.chain.push('function() {}');
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    "use strict";
    if (this.chain.length < position || position < 1 || !Number.isInteger(position)) {
      this.chain = [];
      throw "Error";
    } else {
      this.chain.splice(position-1,1);
    }
    return this;
  },
  reverseChain() {
    "use strict";
    if (this.chain.length > 1) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    "use strict";
    let str = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;