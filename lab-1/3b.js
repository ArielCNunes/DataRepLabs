// Array of strings
const words = ["Homework", "Walk the dog"];

// Funtion to add a task to the array
let addTask = (task) => {
    words.push(task);
    console.log(`${task} has been added to array.`);
    return words.length;
}

// Print whatever the funtion returns and also execute it (push new item and console log)
console.log(addTask("Clean room"));