import "./styles.css";

const darkModeBtn = document.querySelector(".dark-light");
const html = document.querySelector("html");

darkModeBtn.addEventListener("click", (e) => {
    if (html.classList.contains("dark")) {
        darkModeBtn.textContent = "Dark mode";
    } else {
        darkModeBtn.textContent = "Light mode";
    }
    html.classList.toggle("dark");
});
