

const btn = document.getElementById("submitBtn");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
    let userInput = document.getElementById("userInput").value;

    if (userInput === "") {
        output.textContent = "Please enter something!";
    } else {
        output.textContent = "You entered: " + userInput;
    }
});