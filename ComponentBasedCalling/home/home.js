// load navbar
fetch("../navbar/navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    // load navbar css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../navbar/navbar.css";
    document.head.appendChild(link);

    // load navbar js
    const script = document.createElement("script");
    script.src = "../navbar/navbar.js";
    document.body.appendChild(script);
});


// load hero
fetch("../hero/hero.html")
.then(res => res.text())
.then(data => {
    document.getElementById("hero").innerHTML = data;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../hero/hero.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "../hero/hero.js";
    document.body.appendChild(script);
});


// load footer
fetch("../footer/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../footer/footer.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "../footer/footer.js";
    document.body.appendChild(script);
});