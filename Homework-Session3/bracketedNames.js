let userInput = prompt("Enter your series of names, separated by a comma").split(",");

// Method 1:
// const result = [];
// for (let n = 0; n < userInput.length; n++) {
//     result.push(`<${userInput[n]}>`);
// }
// alert (`${userInput} => ${result}`);
// Method 2:
function wrap(name) {
    return "<" + name + ">"
}
alert (`${userInput} => ${userInput.map(wrap)}`);