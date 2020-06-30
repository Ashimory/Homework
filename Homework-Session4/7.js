let size = Number(prompt("How many numbers do you want in each chunk?"));
let array = prompt("Enter your series of numbers, separated by a comma").split(",");
let result = [];    
for (let i = 0; i < array.length; i += size) {
        chunk = array.slice(i, i + size);
        result.push(chunk);
    };
console.log(result);