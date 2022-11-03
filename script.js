let Menu = document.querySelector(".menu");
let Nav = document.querySelector(".navbar");
const Main = document.querySelector(".main")

Menu.addEventListener("click", ()=> {
    Nav.classList.toggle("active");
    Menu.classList.toggle('close');
    Main.toggleAttribute('data-overlay');
    document.body.classList.toggle("scroll-hidden");
})