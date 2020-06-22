let userInput = prompt("Enter your series of numbers, separated by a comma").split(",");
let result = 0;
for (let num = 0; num < userInput.length; num++) {
    result += parseInt(userInput[num]);
};
alert(`The sum of those numbers is ${result}`);