// Didn't understand the solution
let deckRevealedIncreasing = function (deck = []) {
  deck = deck.sort((a, b) => a - b); // Sort in ascending order
  let finalArray = [];

  // In js number 0 (zero) is a falsy value
  while (deck.length) {
    finalArray.unshift(deck.pop());
    finalArray.unshift(finalArray.pop());
  }

  finalArray.push(finalArray.shift());
};
console.log(deckRevealedIncreasing());
