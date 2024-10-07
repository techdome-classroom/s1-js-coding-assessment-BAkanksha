const decodeTheRing = function (s, p) {

    // write your code here
    let regexPattern = p
    .replace(/\*/g, '.*')  
    .replace(/\?/g, '.');  


const regex = new RegExp(`^${regexPattern}$`);


return regex.test(s);

  };
  
  module.exports = decodeTheRing;