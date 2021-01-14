function getFirstLast(sentence) {
  return sentence.slice(0, 1).toUpperCase() + sentence.slice(-2, -1).toUpperCase();
}

function reverseLetters(twoLetters) {
  return twoLetters.slice(-1) + twoLetters.slice(0, 1);
}

function getAndConvertSentence(sentence) {
  return sentence.slice(0, -1) + reverseLetters(getFirstLast(sentence)) + sentence.slice(-1);
}

function prependMidPoint(sentence) {
  return sentence.charAt(Math.floor(sentence.length / 2)) + sentence;
}

function reverseSentence(sentence) {
  return sentence.split("").reverse().join("");
}

const userSentence = prompt("Please enter a sentence.");
console.log(reverseSentence(prependMidPoint(getAndConvertSentence(userSentence))));