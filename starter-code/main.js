const hamburger = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navLinks = document.querySelector(".navbar-nav");
let active = false;
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("opened");
  //   hamburgerIcon.src = "/starter-code/assets/shared/icon-close.svg";
  active = !active;
  if (!active) {
    hamburgerIcon.src = "/starter-code/assets/shared/icon-hamburger.svg";
  } else {
    hamburgerIcon.src = "/starter-code/assets/shared/icon-close.svg";
  }
});
