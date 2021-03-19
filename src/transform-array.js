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
        statusPrevDeleted = 1;
      }
    } else {
      if (statusPrevDeleted === 0 || statusPrevDeleted === 2) {
        resultArr.push(element);
        statusPrevDeleted = 0;
      } else statusPrevDeleted = 2;
    }
  });
  return resultArr;
};
