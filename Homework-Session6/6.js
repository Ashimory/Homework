function print(arr) {
    let listedItems = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i].status == "Completed") {
            listedItems += `${i+1}. [x] ${arr[i].task} \n `;
        }
        else {
            listedItems += `${i+1}. [] ${arr[i].task} \n `;
        }
    }
    alert(`The tasks list currently has: \n ${listedItems}`);
};
const taskList = [
    {
        task: "HTML",
        status: "Ongoing"
    },
    {
        task: "CSS",
        status: "Ongoing"
    },
];
var running = true
while (running) {
    let command = prompt("Enter C to add a new entry, R to list all entries, U to update an entry, D to delete an entry, or E to exit the program").toUpperCase();
    switch (command) {
        case "C":
            let newTask = prompt("Enter your task");
            taskList.push(
                {task: newTask,
                 status: "Ongoing",
                }
                );
            print(taskList);
            break;
        case "R":
            print(taskList);
            break;
        case "U":
            let updated = prompt("Which task's status do you want to change?");
            let findUpdated = taskList.find(task => task.task.toLowerCase() == updated.toLowerCase());
            if (typeof findUpdated === "undefined") {
                alert("Task not found!")
            }
            else {
                findUpdated.status = "Completed"
            }
            print(taskList);
            break;
        case "D":
            let deleted = prompt("Which task's info do you want to delete?");
            let findDeleted = taskList.findIndex(task => task.task.toLowerCase() === deleted.toLowerCase());
            if (findDeleted == -1) {
                alert("Task not found!")
            }
            else {
                taskList.splice(findDeleted,1)
            };
            print(taskList);
            break;
        case "E":
            alert("Thanks for using!");
            running = false;
            break;
        default:
            alert("Please enter a valid command");
            break;
    }
}