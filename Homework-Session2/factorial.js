destination = parseInt(prompt("Enter the number you want to calculate the factorial of:"))
result = 1
if (destination < 0) {
    alert("You can only calculate the factorial of a positive integer")
}
else if (destination == 0) {
    alert(result)
}
else  {
    for (i = 1; i < destination + 1; i++) {
        result *= i
    }
    alert(result)
}