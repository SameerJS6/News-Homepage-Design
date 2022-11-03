let Menu = document.querySelector(".menu");
let NavList = document.querySelector(".nav-lists");

Menu.addEventListener("click", ()=> {
    NavList.classList.toggle("active");
    document.body.classList.toggle("scroll-hidden");
    Menu.classList.toggle('close');
})