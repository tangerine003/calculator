function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      console.log(result);
      break;

    case "-":
      result = subtract(num1, num2);
      console.log(result);
      break;

    case "*":
      result = multiply(num1, num2);
      console.log(result);
      break;

    case "/":
      result = divide(num1, num2);
      console.log(result);
      break;

    default:
      console.log("error");
  }
}
