const CustomError = require("../extensions/custom-error");

module.exports = 
class DepthCalculator {
  calculateDepth(arr) {
    let num = 1,
    max = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        num = this.calculateDepth(element) + 1;
        if (num> max) {
          max = num;
        }
      }
    });
    return max;
  }
};