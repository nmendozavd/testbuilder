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
  
  // First Version - Ran into issues with tests
  // var cardNumberLen = cardNumber.length;

  // var amex = (cardNumberLen === 15) && (cardNumber.startsWith('34') || cardNumber.startsWith('37'));
  // var dinersClub = (cardNumberLen === 14) && (cardNumber.startsWith('38') || cardNumber.startsWith('39'));
  // var visa = (cardNumberLen === 13 || cardNumberLen === 16 || cardNumberLen === 19) && (cardNumber.startsWith('4'));
  // var master = (cardNumberLen === 16) && (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55'));
  // var discover = (cardNumberLen === 16 || cardNumberLen === 19 && (cardNumber.startsWith('65') || cardNumber.startsWith('6011') || cardNumber.startsWith('644') || cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647')));
  // var maestro = (cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('6304') && (cardNumberLen === 12 || cardNumberLen === 13 || cardNumberLen === 14 || cardNumberLen === 15 || cardNumberLen === 16 || cardNumberLen === 17 || cardNumberLen === 18 || cardNumberLen === 19));

  // if (amex) {
  //     return 'American Express';
  // } else if (dinersClub) {
  //     return 'Diner\'s Club';
  // } else if (visa) {
  //     return "Visa";
  // } else if (master) {
  //     return 'MasterCard'
  // } else if (discover) {
  //     return 'Discover';
  // } else if (maestro){
  //     return 'Maestro';
  //   }

  // variables for random china prefixes
  var ChinaUnionPayPrefixes = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  // for loop for extensive prefixes
  for (var i = 622126; i <= 622925; i++) {
    // push prefixes to array, which will include all china prefixes now (convert to strings)
    ChinaUnionPayPrefixes.push(i.toString());
  }

  // for loop through prefixes array, if prefix is present, change var match to true 
  var match = false;
  for (var i = 0; i < ChinaUnionPayPrefixes.length; i++) {
    if (ChinaUnionPayPrefixes.indexOf(ChinaUnionPayPrefixes[i]) !== -1) {
      match = true;
    }
  }

  if ((cardNumber.substring(0, 2) === '38' || cardNumber.substring(0, 2) === '39') && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if ((cardNumber.substring(0, 2) === '34' || cardNumber.substring(0, 2) === '37') && cardNumber.length === 15) {
    return 'American Express';
  } else if ((cardNumber.substring(0, 4) === '4903' || cardNumber.substring(0, 4) === '4905' || cardNumber.substring(0, 4) === '4911' || cardNumber.substring(0, 4) === '4936' || cardNumber.substring(0, 4) === '6333' || cardNumber.substring(0, 4) === '6759' || cardNumber.substring(0, 6) === '564182' || cardNumber.substring(0, 6) === '633110') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch';
  } else if (cardNumber.substring(0, 1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  } else if ((cardNumber.substring(0, 2) === '51' || cardNumber.substring(0, 2) === '52' || cardNumber.substring(0, 2) === '53' || cardNumber.substring(0, 2) === '54' || cardNumber.substring(0, 2) === '55') && cardNumber.length === 16) {
    return 'MasterCard';
  } else if ((cardNumber.substring(0, 4) === '6011' || cardNumber.substring(0, 3) === '644' || cardNumber.substring(0, 3) === '645' || cardNumber.substring(0, 3) === '646' || cardNumber.substring(0, 3) === '647' || cardNumber.substring(0, 3) === '648' || cardNumber.substring(0, 3) === '649' || cardNumber.substring(0, 2) === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  } else if ((cardNumber.substring(0, 4) === '5018' || cardNumber.substring(0, 4) === '5020' || cardNumber.substring(0, 4) === '5038' || cardNumber.substring(0, 4) === '6304') && (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Maestro';
  } else if (match && (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'China UnionPay';
  }

};
