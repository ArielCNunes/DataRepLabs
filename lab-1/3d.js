// Array of strings
const words = ["Homework", "Walk the dog", "Clean room"];

// Funtion to delete array item
let deleteTask = (task) => {
    for (i = 0; i < words.length; i++) {
        // Check if there is a match
        if (words[i] === task) {
            words.splice(i, 1); // remove at index i, and only delete one item
            console.log(`${task} has been deleted.`);
        }
    }
    // Return new length
    return words.length;
}

// Print length
console.log(deleteTask("Walk the dog"));