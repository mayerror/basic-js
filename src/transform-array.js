const CustomError = require("../extensions/custom-error");

module.exports = 
function transform(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (!Array.isArray(arr)) {
    throw "Error";
  }
  let resultArr = [],
      statusPrevDeleted = 0;
  arr.forEach((element, index) => {
    if(element === '--discard-prev') {
      if (resultArr.length > 0 && statusPrevDeleted === 0) {
        resultArr.pop();
      }
      statusPrevDeleted = 0;
    } else if(element === '--double-prev') {
      if (resultArr.length > 0 && statusPrevDeleted === 0) {
        resultArr.push(arr[index-1]);
      }
      statusPrevDeleted = 0;
    } else if (element === '--double-next') {
      if (index !== (arr.length-1)) {
        resultArr.push(arr[index+1]);
      }
      statusPrevDeleted = 0;
    } else if (element === '--discard-next') {
      if (index !==(arr.length-1)) {
        statusPrevDeleted++;
      }
    } else {
      if (statusPrevDeleted === 0 || statusPrevDeleted === 2) {
        resultArr.push(element);
        statusPrevDeleted = 0;
      } else statusPrevDeleted++;
    }
  });
  return resultArr;
};

// console.log(transform(['sdasd', 1, 3, '--double-prev']));