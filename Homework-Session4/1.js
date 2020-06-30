let startNum = Number(prompt("Enter starting position"));
let endNum = Number(prompt("Enter end location"));
let series = []
let sum = 0
let current = startNum
for (let i = startNum; i < endNum; i+=2) {
    series.push(i)
}
console.log(series)
for (let num = 0; num < series.length; num++) {
    sum += series[num];
}
let returnValue = sum / series.length
alert(`The mean value of the series of number is ${returnValue}`)