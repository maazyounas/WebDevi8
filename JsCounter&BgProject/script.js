let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function () {
    count++; 
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});