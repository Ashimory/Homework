let userInput = prompt("Enter your series of numbers, separated by a comma").split(",");
let nSpliced = Number(prompt("How many numbers should we cut out, starting from the first number?"));
newArr = userInput.splice(0,nSpliced);
alert(newArr);
console.log(newArr);