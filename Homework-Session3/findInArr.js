const arr = [693, 34, 704, 24, -952, 1, 2, 3, 69, 420, 242, 42, 18, 7, 2002];
let findingNumber = Number(prompt("Enter a number, see if it's in the super hidden list:"));
let result = arr.indexOf(findingNumber);
console.log(result)
if (result == -1) {
    alert(`That number is NOT on the list`);
}
else {
    alert(`That number IS in the list at index number ${result}`);
}
