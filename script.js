let Menu = document.querySelector(".menu");
let Nav = document.querySelector(".navbar");

Menu.addEventListener("click", ()=> {
    Nav.classList.toggle("active");
    document.body.classList.toggle("scroll-hidden");
    Menu.classList.toggle('close');
})