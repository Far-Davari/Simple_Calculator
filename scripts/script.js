// Variables
let calculation = "";
const outputResult = document.getElementById("result");
const lastUpdateOutput = document.getElementById("last-update");

// Functions

const updateOutput = (value) => {
    outputResult.innerText = value;
}

const calculateFunc = (value) => {
  const finalResult = calculation += value;
  console.log(finalResult);
  updateOutput(finalResult);
}

