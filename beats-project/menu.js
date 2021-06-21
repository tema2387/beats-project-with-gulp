const openButton = document.querySelector (".hamburger");
const closeButton = document.querySelector (".close-button");
const menu = document.querySelector (".menu");
let item = document.querySelectorAll(".menu__item");


openButton.addEventListener ("click", e => {
    e.preventDefault();
    menu.style.display = ("flex");
    closeButton.style.display = ("flex");
    openButton.style.display = ("none");
})

for (let i = 0; i< item.length; i++) {
item[i].addEventListener ("click", e => {
    e.preventDefault();
    menu.style.display = ("none");
    closeButton.style.display = ("none");
    openButton.style.display = ("flex");
})
}

closeButton.addEventListener ("click", e => {
    e.preventDefault();
    menu.style.display = ("none");
    closeButton.style.display = ("none");
    openButton.style.display = ("flex");
})