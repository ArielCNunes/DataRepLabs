// Numbers array
const numbers = [25, 31, 42, 77];

// Funtion to multiply numbers under 70 by 2
let multiply = (num) => {
    if (num < 70) {
        return num *= 2;
    } else {
        return num;
    }
}

// Create a new array after we call the funtion looping through the array
const newArray = numbers.map(multiply);

// Output new array
console.log(newArray);