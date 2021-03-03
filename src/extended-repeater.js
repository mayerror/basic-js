const CustomError = require("../extensions/custom-error");

module.exports = 
function repeater(str, options) {
  
  if (typeof str !== 'string') {
    str = String(str);
  }
  if (options.hasOwnProperty('addition') && typeof options.addition !== 'string' ) {
    options.addition = String(options.addition);
  }
  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 0;
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 0;
  }
  let repStrAdd = str+options.addition;

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    repStrAdd += options.additionSeparator + options.addition;
  }
  let repStr = repStrAdd;
  for (let i = 1; i < options.repeatTimes; i++) {
    repStr += options.separator + repStrAdd;
  }
  return repStr;
};
