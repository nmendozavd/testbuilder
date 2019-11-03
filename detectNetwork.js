// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardNumberLen = cardNumber.length;

  var amex = (cardNumberLen === 15) && (cardNumber.startsWith('34') || cardNumber.startsWith('37'));
  var dinersClub = (cardNumberLen === 14) && (cardNumber.startsWith('38') || cardNumber.startsWith('39'));
  var visa = (cardNumberLen === 13 || cardNumberLen === 16 || cardNumberLen === 19) && (cardNumber.startsWith('4'));
  var master = (cardNumberLen === 16) && (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55'));
  var discover = (cardNumberLen === 16 || cardNumberLen === 19 && (cardNumber.startsWith('65') || cardNumber.startsWith('6011') || cardNumber.startsWith('644') || cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647')));
  var maestro = (cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('6304') && (cardNumberLen === 12 || cardNumberLen === 13 || cardNumberLen === 14 || cardNumberLen === 15 || cardNumberLen === 16 || cardNumberLen === 17 || cardNumberLen === 18 || cardNumberLen === 19));

  if (amex) {
      return 'American Express';
  } else if (dinersClub) {
      return 'Diner\'s Club';
  } else if (visa) {
      return "Visa";
  } else if (master) {
      return 'MasterCard'
  } else if (discover) {
      return 'Discover';
  } else if (maestro){
      return 'Maestro';
    }

};
