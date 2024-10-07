const decodeTheRing = function (s, p) {

    // write your code here
    let regexPattern = p
    .replace(/\*/g, '.*')  
    .replace(/\?/g, '.');  

// Add start (^) and end ($) anchors to ensure full string match
const regex = new RegExp(`^${regexPattern}$`);

// Test if the string matches the generated regex
return regex.test(s);

  };
  
  module.exports = decodeTheRing;