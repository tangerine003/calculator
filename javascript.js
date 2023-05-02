function add(num1, num2) {
  return Math.round((num1 + num2 + Number.EPSILON) * 100) / 100;
}

function subtract(num1, num2) {
  return Math.round((num1 - num2 + Number.EPSILON) * 100) / 100;
}
function multiply(num1, num2) {
  return Math.round((num1 * num2 + Number.EPSILON) * 100) / 100;
}
function divide(num1, num2) {
  return Math.round((num1 / num2 + Number.EPSILON) * 100) / 100;
}

function operate(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (num2 == 0 && operator == "/") {
    displayScreen.textContent = "";
    displayScreen.append(confusedEmoji);
  } else {
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
}
const num1 = document.createElement("h3");
const operator = document.createElement("h3");
const num2 = document.createElement("h3");
const resultant = document.createElement("h3");
const displayScreen = document.querySelector(".display");

const errorMessage = document.createElement("h3");
errorMessage.textContent = "ERROR";

let noOfPointsInOperand1 = 0;
let noOfPointsInOperand2 = 0;

const confusedEmoji = document.createElement("img");
confusedEmoji.src = "./imgs/path1.png";
confusedEmoji.width = 50;
confusedEmoji.setAttribute("class", "astonished-face");

const calcButtons = document.querySelectorAll(".calc-button");
calcButtons.forEach((button) => {
  button.addEventListener("mousedown", function (e) {
    let sound = new Audio("./audio-effects/select-sound-121244.mp3");
    sound.play();
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
            noOfPointsInOperand2 = 0;
            num2.textContent = e.target.getAttribute("data-value");
            displayScreen.appendChild(num2);
          }
        } else {
          displayScreen.textContent = "";
          num1.textContent = e.target.getAttribute("data-value");
          displayScreen.appendChild(num1);
        }
      }
    } else if (e.target.getAttribute("data-value") == "=") {
      if (displayScreen.lastElementChild == num2) {
        if (displayScreen.contains(num1)) {
          resultant.textContent = operate(
            num1.textContent,
            operator.textContent,
            num2.textContent
          );
          if (!(displayScreen.lastElementChild == confusedEmoji)) {
            displayScreen.removeChild(num1);
          }
        } else {
          resultant.textContent = operate(
            resultant.textContent,
            operator.textContent,
            num2.textContent
          );
          if (!(displayScreen.lastElementChild == confusedEmoji)) {
            displayScreen.removeChild(resultant);
          }
        }
        if (!(displayScreen.lastElementChild == confusedEmoji)) {
          displayScreen.removeChild(operator);
          displayScreen.removeChild(num2);
          displayScreen.appendChild(resultant);
        }
      } else {
        displayScreen.textContent = "";
        displayScreen.appendChild(errorMessage);
      }
    } else if (e.target.getAttribute("data-value") == ".") {
      if (displayScreen.lastElementChild == num2) {
        if (noOfPointsInOperand2 >= 1) {
          e.target.setAttribute("data-disabled", "true");
        } else {
          num2.textContent += e.target.getAttribute("data-value");
          noOfPointsInOperand2++;
        }
      }
      if (displayScreen.lastElementChild == num1) {
        if (noOfPointsInOperand1 >= 1) {
          e.target.setAttribute("data-disabled", "true");
        } else {
          num1.textContent += e.target.getAttribute("data-value");
          noOfPointsInOperand1++;
        }
      }
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
      if (displayScreen.lastElementChild == confusedEmoji) {
        displayScreen.textContent = "";
      }
      operator.textContent = e.target.getAttribute("data-value");
      displayScreen.appendChild(operator);
    }
  });
});

const topButtons = document.querySelectorAll(".top-button");

topButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let sound = new Audio("./audio-effects/select-sound-121244.mp3");
    sound.play();
    const topButton = e.target.getAttribute("data-value");
    if (topButton == "AC") {
      noOfPointsInOperand1 = 0;
      noOfPointsInOperand2 = 0;
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
