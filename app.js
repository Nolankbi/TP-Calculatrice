const buttons = document.getElementById("buttons");
const result = document.getElementById("result");

let finalResult = "";
let operator = "";
let firstEntry = "";

const actions = {
  //Represente les actions possible pour la calculatrice
  add: () => {
    operator = "+";
    firstEntry = finalResult;
    finalResult = "0";
  },

  minus: () => {
    operator = "-";
    firstEntry = finalResult;
    finalResult = "0";
  },

  time: () => {
    operator = "x";
    firstEntry = finalResult;
    finalResult = "0";
  },

  divide: () => {
    operator = "/";
    firstEntry = finalResult;
    finalResult = "0";
  },

  seven: () => {
    finalResult += "7";
  },

  eight: () => {
    finalResult += "8";
  },

  nine: () => {
    finalResult += "9";
  },

  four: () => {
    finalResult += "4";
  },

  five: () => {
    finalResult += "5";
  },

  six: () => {
    finalResult += "6";
  },

  one: () => {
    finalResult += "1";
  },

  two: () => {
    finalResult += "2";
  },

  three: () => {
    finalResult += "3";
  },

  zero: () => {
    finalResult += "0";
  },

  coma: () => {
    if (!finalResult.split("").includes(".")) {
      finalResult += ".";
    }
  },

  ac: () => {
    finalResult = "0";
    firstEntry = "";
    operator = "";
  },

  equal: () => {
    switch (operator) {
      case "+":
        finalResult = Number(firstEntry) + Number(finalResult);
        break;
      case "-":
        finalResult = Number(firstEntry) - Number(finalResult);
        break;
      case "/":
        finalResult = Number(firstEntry) / Number(finalResult);
        break;
      case "x":
        finalResult = Number(firstEntry) * Number(finalResult);
        break;

      default:
        break;
    }
  },
};

buttons.addEventListener("click", (event) => {
  const {
    target: { id },
  } = event;

  finalResult = finalResult.toString().replace(/^0/gm, "");

  if (id in actions) {
    actions[id]();
    result.innerText = finalResult;
  }
});
