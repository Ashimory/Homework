let userInput = prompt("Enter your series of numbers, separated by a comma").split(",");

// Method 1
// let result = [];
// for (let num = 0; num < userInput.length; num++) {
//     if (parseInt(userInput[num]) % 2 == 1 || parseInt(userInput[num]) % 2 == -1) {
//         result.push(userInput[num]);
//     }
// };
// alert(`The odd numbers are ${result}`);
// Method 2
function checkOdd(num) {
    return num % 2 !== 0;
}
alert(`${userInput} => ${userInput.filter(checkOdd)}`)