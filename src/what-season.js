const CustomError = require("../extensions/custom-error");

module.exports = 
function getSeason(date) {
  if (!date || isNaN(date)) {
    return 'Unable to determine the time of year!';
  } else
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw "Error";
  } else {
    let season = '',
        month = date.getMonth();
    switch (true){
      case month < 2 || month >= 11:
        season = 'winter';
        break;
      case month < 5:
        season = 'spring';  
        break;
      case month < 8:
        season = 'summer';  
        break;
      case month < 11:
        season = 'autumn';  
        break;
    }
    return season;
  }
};


// console.log(getSeason(new Date(2017, 6, 11, 23, 45, 11, 500)));