const openButton = document.querySelector (".hamburger");
const closeButton = document.querySelector (".close-button");
const menu = document.querySelector (".menu");


openButton.addEventListener ("click", e => {
    e.preventDefault();
    menu.style.display = ("flex");
    closeButton.style.display = ("flex");
    openButton.style.display = ("none");
})

closeButton.addEventListener ("click", e => {
    e.preventDefault();
    menu.style.display = ("none");
    closeButton.style.display = ("none");
    openButton.style.display = ("flex");
})