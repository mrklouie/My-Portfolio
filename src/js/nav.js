const menuBtn = document.querySelector(".nav__menu");
const navLinks = document.querySelector(".nav__nav-links");
const contactWrapper = document.querySelector(".contact-wrapper");
const contactBody = document.querySelector(".body-contact");
const homeBody = document.querySelector(".body-home");

let navLinksWidth = navLinks.offsetWidth;
console.log(navLinksWidth);
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  console.log("clicked");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navLinks.classList.add("active");
    contactWrapper.style.transition = "all .2s ease-in-out";
    contactWrapper.style.left = `-${navLinksWidth}px`;

    contactBody.style.overflow = "hidden";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("active");
    contactWrapper.style.left = `0px`;

    contactWrapper.style.transition = "all .2s ease-in-out";
    contactBody.style.overflow = "auto";

    menuOpen = false;
  }
});

gsap.from("main", { opacity: 0, scale: 0.97 });
