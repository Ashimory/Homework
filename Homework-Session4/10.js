let userInput = prompt("Enter a string to see if it's a palindrome:").split("");
let before = userInput.join("");
let after = userInput.reverse().join("");
if (before == after) {
    alert("Yep, it's a palindrome")
}
else {
    alert("Nope, not a palindrome")
}