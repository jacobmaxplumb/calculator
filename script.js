const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
const calcSymbols = ["+", "-", "*", "/"];
let calculationArray = [];
setDisabled();

for (let button of buttons) {
  button.addEventListener("click", handleButtonClick);
}

function handleButtonClick(e) {
  console.log("were able to click on button");
  const buttonPressed = e.target.textContent;
  if (calcSymbols.includes(buttonPressed)) {
    calculationArray.push(display.textContent);
    calculationArray.push(buttonPressed);
    display.textContent = "";
  } else if (buttonPressed === "=") {
    calculationArray.push(display.textContent);
    console.log(calculationArray);
    let total = parseInt(calculationArray[0]);
    for (let i = 1; i < calculationArray.length; i = i + 2) {
      console.log(total);
      const symbol = calculationArray[i];
      const number = parseInt(calculationArray[i + 1]);
      if (symbol === "+") {
        total += number;
      }
      if (symbol === "-") {
        total -= number;
      }
      if (symbol === "/") {
        total /= number;
      }
      if (symbol === "*") {
        total *= number;
      }
    }
    display.textContent = total;
  } else if (buttonPressed === "C") {
    display.textContent = "";
  } else {
    display.textContent += e.target.textContent;
  }
  setDisabled();
}

function setDisabled() {
  const symbolButtons = document.querySelectorAll(".symbol");
  for (let button of symbolButtons) {
    if (display.textContent === "") {
        console.log('disabling symbol buttons');
        button.disabled = true;
    }
    else {
        console.log('enabling symbol buttons');
        button.disabled = false;
    }
  }
}
