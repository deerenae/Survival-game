let btn = document.querySelector("btn");
let card = document.querySelector(".card");

btn.addEventListener("click", () => {
    card.classList.toggle("active");
});