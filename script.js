const Menu = document.querySelector(".menu");
const Nav = document.querySelector(".navbar");
const Main = document.querySelector(".main");
const Ripple = document.querySelectorAll(".ripple");

Menu.addEventListener("click", () => {
  Nav.classList.toggle("active");
  Menu.classList.toggle("close");
  Main.toggleAttribute("data-overlay");
  document.body.classList.toggle("scroll-hidden");
});

Ripple.forEach((ripple) => {
  ripple.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let Ripples = document.createElement("span");
    Ripples.style.left = x + "px";
    Ripples.style.top = y + "px";
    this.appendChild(Ripples);

    setTimeout(() => {
      Ripples.remove();
    }, 10000);
  });
});