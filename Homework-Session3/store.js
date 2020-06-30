function print(arr) {
    let listedItems = "";
    for (i = 0; i < arr.length; i++) {
        listedItems += `${i+1}. ${arr[i]} \n `;
    }
    alert(`The store currently has: \n ${listedItems}`);
};
const itemList = ["White shirt", "Black pants"];
var running = true
while (running) {
    let command = prompt("Enter C to add a new entry, R to list all entries, U to update an entry, D to delete an entry, or E to exit the program").toUpperCase();
    if (command == "C") {
        let added = prompt("Enter your new item:");
        itemList.push(added);
        print(itemList);
    }
    else if (command == "R") {
        print(itemList);
    }
    else if (command == "U") {
        let updated = parseInt(prompt("Enter an entry number: ")) - 1;
        let newContent = prompt("Enter new content for this entry: ");
        itemList[updated] = newContent;
        print(itemList);
    }
    else if (command == "D") {
        let deleted = parseInt(prompt("Enter an entry number: "));
        let mass = parseInt(prompt(`How many entries do you want to delete from entry ${deleted} down, including entry ${deleted}? `));
        itemList.splice(deleted-1,mass);
        print(itemList);
    }
    else if (command == "E") {
        alert("Thanks for using!");
        running = false;
    }
    else {
        alert("Please enter a valid command");
    }
}
