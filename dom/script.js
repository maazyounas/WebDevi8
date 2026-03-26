// Select elements from DOM
const title = document.getElementById("title");
const description = document.getElementById("description");
const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const addElementBtn = document.getElementById("addElementBtn");
const container = document.getElementById("container");


// Change text using DOM
changeTextBtn.addEventListener("click", function () {
    description.textContent = "Text changed using DOM!";
});


// Change style using DOM
changeColorBtn.addEventListener("click", function () {
    title.style.color = "blue";
});


// Create new element using DOM
addElementBtn.addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added using DOM";
    container.appendChild(newParagraph);
});