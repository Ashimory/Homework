let parsed = prompt("Enter words to capitalize here").split(" ");
console.log(parsed);
for (let w = 0; w < parsed.length; w++) {
    parsed[w] = parsed[w][0].toUpperCase() + parsed[w].substr(1)
};
alert(`Your capitalized words: ${(parsed.join(' '))}`);