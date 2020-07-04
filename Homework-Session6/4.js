const dict = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for ‘error’",
    pm: "The short version of Project Manager, the person in charge of the final result of a project",
};
while (true) {
    let neededWord = prompt("Enter term to look up");
    if (neededWord in dict) {
        alert(`${neededWord}: ${dict[neededWord]}`)
    }
    else {
        newDefinition = prompt("Word not found. Would you like to contribute an explanation? Y/N").toLowerCase()
        if (newDefinition == "y") {
            wordDefinition = prompt("Enter the definition for your word:");
            dict[neededWord] = wordDefinition
        }
        else {
            alert("k bye")
            break;
        }
    }
}