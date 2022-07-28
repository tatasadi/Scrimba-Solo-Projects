/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
const btnConvert = document.getElementById("btn-convert");
const inputNumber = document.getElementById("input-number");
const unitLengthEl = document.getElementById("unit-length");
const unitVolumeEl = document.getElementById("unit-volume");
const unitMassEl = document.getElementById("unit-mass");

btnConvert.addEventListener("click", function() {
  convert();
});

function convert(){
  const inputValue = Number(inputNumber.value);
  const feet = Number(inputValue * meterToFeet).toFixed(3);
  const meters = Number(inputValue / meterToFeet).toFixed(3);
  const liters = Number(inputValue / literToGallon).toFixed(3);
  const gallons = Number(inputValue * literToGallon).toFixed(3);
  const kilograms = Number(inputValue * kilogramToPound).toFixed(3);
  const pounds = Number(inputValue / kilogramToPound).toFixed(3);
  unitLengthEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`;
  unitVolumeEl.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;
  unitMassEl.textContent = `${inputValue} kilograms = ${pounds} pounds | ${inputValue} pounds = ${kilograms} kilograms`;
}

convert();
