const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

let btnEl = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length")
btnEl.addEventListener("click",function(){
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${(baseValue*meterToFeet).toFixed(2)} feet`

    
    
})