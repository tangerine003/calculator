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
      if (displayScreen.contains(num1)) {
        if (displayScreen.contains(operator)) {
          if (displayScreen.contains(num2)) {
            num2.textContent += e.target.getAttribute("data-value");
          } else {
            num2.textContent = e.target.getAttribute("data-value");
            displayScreen.appendChild(num2);
          }
        } else {
          num1.textContent += e.target.getAttribute("data-value");
        }
      } else {
        if (displayScreen.contains(resultant)) {
          if (displayScreen.contains(num2)) {
            num2.textContent += e.target.getAttribute("data-value");
          } else {
            num2.textContent = e.target.getAttribute("data-value");
            displayScreen.appendChild(num2);
          }
        } else {
          num1.textContent = e.target.getAttribute("data-value");
          displayScreen.appendChild(num1);
        }
      }
    } else if (e.target.getAttribute("data-value") == "=") {
      if (displayScreen.contains(num1)) {
        resultant.textContent = operate(
          num1.textContent,
          operator.textContent,
          num2.textContent
        );
        displayScreen.removeChild(num1);
      } else {
        resultant.textContent = operate(
          resultant.textContent,
          operator.textContent,
          num2.textContent
        );
        displayScreen.removeChild(resultant);
      }
      displayScreen.removeChild(operator);
      displayScreen.removeChild(num2);
      displayScreen.appendChild(resultant);
    } else {
      if (displayScreen.contains(num2)) {
        if (displayScreen.contains(num1)) {
          resultant.textContent = operate(
            num1.textContent,
            operator.textContent,
            num2.textContent
          );
          displayScreen.removeChild(num1);
        } else {
          resultant.textContent = operate(
            resultant.textContent,
            operator.textContent,
            num2.textContent
          );
          displayScreen.removeChild(resultant);
        }
        displayScreen.removeChild(operator);
        displayScreen.removeChild(num2);
        displayScreen.appendChild(resultant);
      }
      operator.textContent = e.target.getAttribute("data-value");
      displayScreen.appendChild(operator);
    }
  });
});

const topButtons = document.querySelectorAll(".top-button");

topButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const topButton = e.target.getAttribute("data-value");
    if (topButton == "AC") {
      displayScreen.textContent = "";
    } else {
      if (displayScreen.lastElementChild == num1) {
        const textContentArray = Array.from(num1.textContent);
        textContentArray.pop();
        num1.textContent = textContentArray.join("");
      } else if (displayScreen.lastElementChild == operator) {
        const textContentArray = Array.from(operator.textContent);
        textContentArray.pop();
        operator.textContent = textContentArray.join("");
      } else if (displayScreen.lastElementChild == num2) {
        const textContentArray = Array.from(num2.textContent);
        textContentArray.pop();
        num2.textContent = textContentArray.join("");
      } else {
        const textContentArray = Array.from(resultant.textContent);
        textContentArray.pop();
        resultant.textContent = textContentArray.join("");
      }
    }
  });
});
