const CustomError = require("../extensions/custom-error");

// module.exports = 
function transform(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (!Array.isArray(arr)) {
    throw "Error";
  }
  let resultArr = [],
      i = 0;
  arr.forEach((element, index) => {
    if(element !== ('--discard-next' || '--discard-prev' || '--double-next' || '--double-prev') && index === 0) {
      resultArr[i] = element;
    }
  };
  return resultArr;
};

console.log(transform(['sdasd', 1, 3]));