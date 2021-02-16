const vowels = ["a", "e", "i", "o", "u", "y"];

userWord = prompt("Enter a word:");

let vowelCounter = 0;

lowerLetter = userWord.toLowerCase();

for (let i = 0; lowerLetter.length > i; i++) {

  for (let x = 0; vowels.length > x; x++) {
    if (lowerLetter[i] === vowels[x]) {
      vowelCounter += 1;
    }
  }
}

let remainingLetters = lowerLetter.length;

let palindromeCheck;

for (let y = 0; remainingLetters > 1; y++) {

  if (lowerLetter[y] === lowerLetter[remainingLetters - 1]) {
    palindromeCheck = "a palindrome";
    remainingLetters -= 1;

  }

  else {
    palindromeCheck = "not a palindrome";
    remainingLetters = 0;
  }

}

console.log(`${userWord} contains ${vowelCounter} vowels and is ${palindromeCheck}.`);