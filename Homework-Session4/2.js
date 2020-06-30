let userInput = prompt("Enter your series of numbers, separated by a comma").split(",");
let oddSum = 0;
let evenSum = 0;
function addition(num) {
    if (num % 2 == 0) {
        evenSum += Number(num);
    }
    else {
        oddSum += Number(num);
    }
}
userInput.forEach(addition);
alert(`The sum of odd numbers: ${oddSum}
The sum of even numbers: ${evenSum}`)