// Variables
let calculation = "";
const outputResult = document.getElementById("result");
const lastUpdateOutput = document.getElementById("last-update");

// Functions

showLocal();

const updateOutput = (value) => {
  outputResult.innerText = value;
}

const calculateFunc = (value) => {
  const finalResult = calculation += value;
  console.log(finalResult);
  updateOutput(finalResult);
}

function showLocal() {
  let localValue = `latest calculation: ${localStorage.getItem("calculation")}` || "there is no recent calculation";
  lastUpdateOutput.innerHTML = `latest calculation: ${localStorage.getItem("calculation")}` || "there is no recent calculation";
  console.log(localValue);
}

