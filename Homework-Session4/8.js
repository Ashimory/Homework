let userInput = prompt("Enter your series of numbers, separated by a comma").split(",");
alert (Math.max(...userInput) - Math.min(...userInput));