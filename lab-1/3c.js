// Array of strings
const words = ["Homework", "Walk the dog", "Clean room"];

// Funtion to print all array items
let listAllTasks = () => {
    for (i = 0; i < words.length; i++) {
        console.log(words[i]); // loop through and print items
    }
}

// Print each task
listAllTasks();