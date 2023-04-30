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
const toBeDisplayed = document.createElement("h3");
const displayScreen = document.querySelector(".display");

const calcButtons = document.querySelectorAll(".calc-button");
calcButtons.forEach((button) => {
  button.addEventListener("mousedown", function (e) {
    toBeDisplayed.textContent = e.target.getAttribute("data-value");
    displayScreen.appendChild(toBeDisplayed);
  });
});
