randomNumber = parseInt((Math.random() + 0.01) * 100);
console.log(randomNumber);

pickNumber = parseInt(Number(prompt("Choose a number between 1 and 100:")));

counter = 1;

guessNumber = function (guess, answer) {
  if (guess > answer) {
    pickNumber = Number(prompt("Too high, guess again:"));
    counter++;
  }
  else if (guess < answer) {
    pickNumber = Number(prompt("Too low, guess again:"));
    counter++;
  }
  else {
    counter++;
  }
}

while (pickNumber !== randomNumber) {
  guessNumber(pickNumber, randomNumber);
}

alert(`Collect! It took you ${counter} attemps to guess the correct number.`);