let userInput = prompt("Enter your series of numbers, separated by a comma").split(",");
result = [];
for (num = 0; num < userInput.length; num++) {
    if (! result.includes(userInput[num])) {
        result.push(userInput[num])
    }
}
alert(`${userInput} => ${result}`)