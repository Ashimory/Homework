let userInput = prompt("Enter your series of numbers, separated by a comma").split(",");
result = Math.min(...userInput);
alert(`The smallest number of the bunch is ${result}`);