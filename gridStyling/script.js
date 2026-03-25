const button = document.getElementById("changeGrid");
const grid = document.getElementById("grid");

let isThree = true;

button.addEventListener("click", function () {
    if (isThree) {
        grid.style.gridTemplateColumns = "1fr 1fr";
    } else {
        grid.style.gridTemplateColumns = "1fr 1fr 1fr";
    }

    isThree = !isThree;
});