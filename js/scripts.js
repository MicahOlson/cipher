// let userSentence = prompt("Please enter a sentence.");
// console.log(userSentence);

function getFirstLast(sentence) {
  let firstLast = sentence.slice(0, 1) + sentence.slice(-2, -1);
  return firstLast.toUpperCase();
}

function reverseLetters(firstLast) {
  return firstLast.slice(-1) + firstLast.slice(0, 1);
}

// console.log(getFirstLast(userSentence));
// console.log(reverseLetters(getFirstLast(userSentence)));


function getAndConvertSentence() {
  let userSentence = prompt("Please enter a sentence.");
  return userSentence.slice(0, -1) + reverseLetters(getFirstLast(userSentence)) + userSentence.slice(-1);
}

console.log(getAndConvertSentence());