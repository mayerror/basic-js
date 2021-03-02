const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = 
function dateSample(sampleActivity) {
  "use strict"
  if (typeof sampleActivity !== 'string' || typeof +sampleActivity !== 'number' || isNaN(+sampleActivity) || +sampleActivity  <= 0 || +sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  let t = Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY/+sampleActivity));
  return Math.abs(t);
};
