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
  num1 = Number(num1);
  num2 = Number(num2);
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      return result;
      break;

    case "-":
      result = subtract(num1, num2);
      return result;
      break;

    case "*":
      result = multiply(num1, num2);
      return result;
      break;

    case "/":
      result = divide(num1, num2);
      return result;
      break;

    default:
      console.log("error");
  }
}
const num1 = document.createElement("h3");
const operator = document.createElement("h3");
const num2 = document.createElement("h3");
const resultant = document.createElement("h3");
const displayScreen = document.querySelector(".display");

const calcButtons = document.querySelectorAll(".calc-button");
calcButtons.forEach((button) => {
  button.addEventListener("mousedown", function (e) {
    if (!isNaN(e.target.getAttribute("data-value"))) {
      if (num1.textContent) {
        num2.textContent = e.target.getAttribute("data-value");
        displayScreen.appendChild(num2);
      } else {
        num1.textContent = e.target.getAttribute("data-value");
        displayScreen.appendChild(num1);
      }
    } else if (e.target.getAttribute("data-value") == "=") {
      resultant.textContent = operate(
        num1.textContent,
        operator.textContent,
        num2.textContent
      );
      displayScreen.removeChild(num1);
      displayScreen.removeChild(operator);
      displayScreen.removeChild(num2);
      displayScreen.appendChild(resultant);
    } else {
      operator.textContent = e.target.getAttribute("data-value");
      displayScreen.appendChild(operator);
    }
  });
});
