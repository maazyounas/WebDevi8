const form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {

    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    document.getElementById("outputName").textContent = "Name: " + name;
    document.getElementById("outputEmail").textContent = "Email: " + email;
    document.getElementById("outputAge").textContent = "Age: " + age;

});