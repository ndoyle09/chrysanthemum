// Define the function
function log(event) {
    console.log(`${event.target.id} clicked.`);
}

// Select all buttons
const buttons = document.querySelectorAll("button");

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", log);
});

console.log("Javascript file loaded.");