let personHeight = parseFloat(prompt("Enter your height in centimetres: ")) / 100
let personWeight = parseFloat(prompt('Enter your weight in kilograms: '))
BMI = (personWeight / Math.pow(personHeight, 2)).toFixed(1)
let bodyType
if (BMI < 16) {
    bodyType = "severely underweight"
}
else if (BMI < 18.5) {
    bodyType = "underweight"
}
else if (BMI < 25) {
    bodyType = "normal"
}
else if (BMI < 30) {
    bodyType = "overweight"
}
else {
    bodyType = "obese"
}
alert(`Your BMI is ${BMI} 
You are ${bodyType}`)