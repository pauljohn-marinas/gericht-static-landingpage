const btn = document.getElementById("toggle-button");
const menu = document.getElementById("toggle-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});