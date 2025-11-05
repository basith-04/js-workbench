const inputEl = document.getElementById("input-el")
const length = document.getElementById("Length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


console.log(typeof input)
const btn = document.getElementById("btn-el")
btn.addEventListener("click", function () {
    const input = parseInt(inputEl.value)
    console.log(input)
    
    length.textContent = `${input} meters = ${(input * 3.280)} feet | ${input} feet = ${(input * 0.3048)} meters`
    volume.textContent=`${input}  liters = ${input*0.264172}  gallons | ${input}  gallons = ${input*3.78541}  liters`
    mass.textContent=`${input}  kilos = ${input*2.20462}  pounds | ${input}  pounds = ${input*0.453592}  kilos`

})

