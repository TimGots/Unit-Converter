const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

let btnEl = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

btnEl.addEventListener("click", function () {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feets = ${(baseValue/meterToFeet).toFixed(2)} meters`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(2)} liters`
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue/kiloToPound).toFixed(2)} kilograms`
    
})