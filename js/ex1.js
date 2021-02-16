let Number1 = Number(prompt("Enter a number:"));

let Number2 = Number(prompt("Enter another number:"));

let Operation = prompt("Choose a mathematical operation (i.e. +, -, *, /)")



const calculator = function (x, y, opr) {

  switch (opr) {
    case "+": Answer = x + y;
      break;
    case "-": Answer = x - y;
      break;
    case "*": Answer = x * y;
      break;
    case "/": Answer = x / y;
  }

  alert(`${x}${opr}${y}=${Answer}`)
}

calculator(Number1, Number2, Operation)