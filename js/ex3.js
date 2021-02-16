const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
let minimum = 0;
let maximum = 0;

for (let i = 0; i < values.length; i++) {
  sum += values[i];
}

console.log(`The sum of all array values is ${sum}.`)


for (let i = 0; i < values.length; i++) {

  if (i === 0) {
    minimum += values[i]
  }
  else if (minimum > values[i]) {
    minimum = values[i];
  }
}


console.log(`The minimum value of the array is ${minimum}.`)

for (let i = 0; i < values.length; i++) {

  if (i === 0) {
    maximum += values[i]
  }
  else if (maximum < values[i]) {
    maximum = values[i];
  }
}

console.log(`The minimum value of the array is ${maximum}.`)