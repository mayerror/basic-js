const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }
  let str = members.filter(element => {
    if (typeof element === 'string' && element !== '')
      return true;
  }).map(element => {
    let i = 0,
        desElement = element[0];
    while (desElement === ' ') {
      i++;
      desElement = element[i];
    }
    return desElement.toUpperCase();
  }).sort().join('');
  return str;
};
