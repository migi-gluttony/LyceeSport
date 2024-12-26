function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    menu.classList.toggle("reduit");
}
fetch("../Commun/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
    })
    .catch((error) => {
        console.error("Error loading the HTML file:", error);
    });
fetch("../Commun/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("sidebar").innerHTML = data;
    })
    .catch((error) => {
        console.error("Error loading the HTML file:", error);
    });
fetch("../Commun/footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => {
        console.error("Error loading the HTML file:", error);
    });
