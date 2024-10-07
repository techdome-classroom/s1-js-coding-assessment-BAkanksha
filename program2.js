const decodeTheRing = function (s, p) {

    // write your code here
    let regexPattern = p
    .replace(/\*/g, '.*')  
    .replace(/\?/g, '.');  


const regex = new RegExp(`^${regexPattern}$`);

// Test if the string matches the generated regex
return regex.test(s);

  };
  
  module.exports = decodeTheRing;