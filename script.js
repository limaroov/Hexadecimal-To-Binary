// Declaring items
const number = document.getElementById("number");
const displayData = document.getElementById("data");
const resultDiv = document.querySelector(".result");
const resultUl = document.getElementById("result-ul");

// Declaring Buttons
const convertBtn = document.getElementById("convert-btn");

const dataTable = {
  0: "0000",
  1: "0001",
  2: "0010",
  3: "0011",
  4: "0100",
  5: "0101",
  6: "0110",
  7: "0111",
  8: "1000",
  9: "1001",
  A: "1010",
  B: "1011",
  C: "1100",
  D: "1101",
  E: "1110",
  F: "1111",
};

function isNumberOrChar(item) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let characters = ["A", "B", "C", "D", "E", "F"];

  let isNumber = numbers.some(item);
  let isChar = characters.some(item);

  return isNumber ? "number" : isChar ? "char" : null;
}

convertBtn.addEventListener("click", () => {
  // Getting input data
  const numberData = number.value;
  const splitedNumber = splitNumberToUnits(numberData);

  let numberToBinary = [];

  let numberArray = splitedNumber.map((item, index) => {
    let resutlNumber = dataTable[item];
    numberToBinary.push({
      itemNumber: splitedNumber[index],
      result: resutlNumber,
    });
    return resutlNumber;
  });

  let joinedNumbers = joinNumbers(numberArray);

  displayResult(numberToBinary, joinedNumbers);
});

function displayResult(array, data) {
  resultUl.innerHTML = "";
  displayData.textContent = "";

  array.forEach((item) => {
    resultUl.innerHTML += `<li>${item.itemNumber} : ${item.result}</li>`;
  });
  displayData.textContent = data;
  resultDiv.style.opacity = "100";
}

function joinNumbers(numberArr) {
  return numberArr.join("");
}

function splitNumberToUnits(string) {
  return string.split("");
}
