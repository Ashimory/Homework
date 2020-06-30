function print(arr) {
    let listedContacts = "";
    for (i = 0; i < arr.length; i++) {
        listedContacts += `${i+1}. ${arr[i].name}: ${arr[i].number}   \n `;
    }
    alert(`The contacts list currently has: \n ${listedContacts}`);
};
const phoneList = [
    {
        name: "Tony",
        number: '0973712343'
    },
    {
        name: "Peter",
        number: "0973712213"
    },
];
var running = true
while (running) {
    let command = prompt("Enter C to add a new entry, R to list all entries, U to update an entry, D to delete an entry, or E to exit the program").toUpperCase();
    if (command == "C") {
        let newName = prompt("Enter your contact name");
        let newNum = prompt("Enter your contact's number");
        phoneList.push(
            {name: newName,
            number: newNum,
            }
            );
        print(phoneList);
    }
    else if (command == "R") {
        print(phoneList);
    }
    else if (command == "U") {
        let updated = prompt("Which contact's info do you want to change?");
        let findUpdated = phoneList.find(contact => contact.name.toLowerCase() === updated.toLowerCase());
        if (typeof findUpdated === "undefined") {
            alert("Name not found!")
        }
        else {
            let updatedNumber = prompt ("Enter new contact number:");
            findUpdated.number = updatedNumber;
        }
        print(phoneList);
    }
    else if (command == "D") {
        let deleted = prompt("Which contact's info do you want to delete?");
        let findDeleted = phoneList.findIndex(contact => contact.name.toLowerCase() === deleted.toLowerCase());
        if (findDeleted == -1) {
            alert("Name not found!")
        }
        else {
            phoneList.splice(findDeleted)
        }
    }
    else if (command == "E") {
        alert("Thanks for using!");
        running = false;
    }
    else {
        alert("Please enter a valid command");
    }
}