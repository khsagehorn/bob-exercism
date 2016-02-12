//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function (input) {
  var response = "Whatever.";
  
    if (input.length === 0 || input !== input.trim()){
         return 'Fine. Be that way!'
    } else if ((/\d+/.test(input) === true || input !== input.toUpperCase()) && input.charAt(input.length - 1) === '?') {
        return 'Sure.'
    } else if  ((input.indexOf('!') !== -1 && input === input.toUpperCase()) || input.indexOf('?') !== -1 && input === input.toUpperCase() && input.replace()) {
        return 'Whoa, chill out!'
    } else if (input === input.toUpperCase() && input.indexOf('!') === -1 && /\d+/.test(input) === false){
        return "Whoa, chill out!"
    } 
        else {
        return 'Whatever.'
    }

};


module.exports = Bob;
