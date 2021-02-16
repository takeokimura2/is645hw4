let word = prompt("Enter a word to be added to an array:");

const wordArray = [];

if (word.toUpperCase() === "STOP") {
  console.log("No words to display, Stop was the first word entered.");
}
else {
  while (word.toUpperCase() !== "STOP") {
    wordArray.push(word);
    word = prompt("Enter a word to be added to an array:");
  }
}
if (wordArray.length > 0) {
  console.log(`You entered the following words: ${wordArray}`);
}
else { }

