gsap.registerPlugin(ScrollTrigger);
const contactSectionHeight =
  document.querySelector(".contact-section").offsetHeight;
const slideContainer = document.querySelector(".works-section");
const ctaSpan = document.getElementById("cta-span");
const ctaBtnCircle = document.getElementById("cta-btn-circle");
const ctaWrapper = document.querySelector(".hero__cta-wrapper");
const sectionTitleWorks = document.getElementById("section-title-works");
const cursorFollow = document.querySelector(".cursor-follow");
const profileImg = document.querySelector(".profile");
const button = document.querySelector(".hero__adcopy > button");
const overlay = document.querySelector(".overlay");
let mouseX;
let mouseY;
// uncomment this if ever u need a hamburger menu
// button.addEventListener("click", () => {
//   overlay.classList.toggle("active");
// });

//==========GSAP-VARS==========//
let panels = gsap.utils.toArray(".slide");
let size = slideContainer.offsetWidth.toString();
let startScroll = size + "px bottom";
console.log(startScroll);
let endScroll = "+=1000px top";

console.log(startScroll);

//==========GSAP-TIMELINES-AND-TWEENS==========//
const timeline = gsap.timeline();
const scrollTextAnimation = gsap.timeline({
  defaults: { ease: "linear" },
});
scrollTextAnimation.fromTo(
  ".typo-1",
  { opacity: 0.2 },
  { xPercent: -50, opacity: 1 }
);
scrollTextAnimation.from(".typo-2", { xPercent: -112, opacity: 0.2 }, "<=");

//==========MEDIA-QUERY==========//
const isTouchDevice = window.matchMedia("(pointer: coarse)");
const isMobile = window.matchMedia("(max-width: 480px)");

isMobile.addEventListener("change", () => {
  checkQuery();
});

const checkQuery = () => {
  const container = document.querySelector(".container");
  if (isMobile.matches) {
    container.classList.add("active");
    console.log("Mobile Detected");

    mobileZone();
  } else {
    container.classList.remove("active");
    console.log("Large Screen Detected");
    largeScreens();
  }
};

const mobileZone = () => {
  ScrollTrigger.create({
    animation: scrollTextAnimation,
    trigger: ".contact-section",
    scrub: 2,

    start: "-30% bottom",
    end: "+=250px top",
  });
};

const largeScreens = () => {
  ScrollTrigger.create({
    animation: scrollTextAnimation,
    trigger: ".contact-section",
    scrub: 2,

    start: startScroll,
    end: `+=${contactSectionHeight}px`,
  });
};

checkQuery();

VanillaTilt.init(document.querySelector(".hero__avatar"), {
  max: 5,
  speed: 500,
  reverse: true,
  perspective: 500,
  easing: "ease-out",
  glare: true,
  "max-glare": 1,
});
VanillaTilt.init(document.querySelector(".image-wrapper"), {
  max: 5,
  speed: 500,
  reverse: true,
  perspective: 500,
  easing: "ease-out",
  glare: true,
  "max-glare": 1,
});

ctaWrapper.addEventListener("click", () => {
  ctaBtnCircle.style.transform = `translateX(50%)`;
  ctaBtnCircle.style.transition = `all 0.3s ease-out`;
  ctaWrapper.classList.add("hover");
  setTimeout(() => {
    ctaBtnCircle.style.transform = `translateX(0%)`;
    ctaBtnCircle.style.transition = `all 0.3s ease-out`;
    ctaWrapper.classList.remove("hover");
  }, 500);
  sectionTitleWorks.scrollIntoView({
    behavior: "smooth",
  });
});

//Detect if Device is Touch Device or not
//This will only allow the follow-cursor visible on No-touch Device
if (!isTouchDevice.matches) {
  followCursorActivate();
}

//Everytime when the touch device changes
isTouchDevice.addEventListener("change", (e) => {
  if (!e.target.matches) {
    followCursorActivate();
  }
});

//Call this function if Non-touch devices
function followCursorActivate() {
  window.addEventListener("mousemove", (e) => {
    mouseX = e.pageX + "px";
    mouseY = e.pageY + "px";
  });
  function cursor() {
    cursorFollow.style.top = mouseY;
    cursorFollow.style.left = mouseX;
    window.requestAnimationFrame(cursor);
  }
  cursor();
  ctaWrapper.addEventListener("mouseover", () => {
    cursorFollow.classList.add("grow");
    ctaWrapper.classList.add("hover");
    ctaBtnCircle.style.transform = `translateX(50%)`;
    ctaBtnCircle.style.transition = `all 0.3s ease-out`;
  });
  ctaWrapper.addEventListener("mouseleave", () => {
    cursorFollow.classList.remove("grow");
    ctaWrapper.classList.remove("hover");
    ctaBtnCircle.style.transform = `translateX(0%)`;
    ctaBtnCircle.style.transition = `all 0.3s ease-out`;
  });
  timeline.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: slideContainer,
      // pinSpacing: false,
      pin: true,
      scrub: 2,
      snap: 1 / (panels.length - 1),
      end: () => "+=" + slideContainer.offsetWidth,
    },
  });
}

//==========BARBA-JS=============//

function pageTransition() {
  var myPageTransition = gsap.timeline({
    defaults: {
      y: 25,
    },
  });
  myPageTransition.from(".anim-a", {
    opacity: 0,
    duration: 1,
  });
  myPageTransition.from(".anim-b", {
    opacity: 0,
    duration: 1,
  });
}

function contentAnimation2() {
  var worksSection = gsap.timeline({
    defaults: {
      y: 25,
    },
    scrollTrigger: {
      trigger: ".anim-c",
      start: "top 90%",
      endTrigger: ".work-1",
    },
  });
  worksSection.from(".anim-c", {
    opacity: 0,
    duration: 1,
  });

  worksSection.from(".work-1", { y: 25, opacity: 0, duration: 1 }, "<");
  worksSection.from(".work-1 > works-section-mobile__works-texts", {
    y: 25,
    opacity: 0,
    duration: 1,
  });
}

function contentAnimation3() {
  var aboutSection = gsap.timeline({
    defaults: {
      y: 25,
    },
    scrollTrigger: {
      y: 50,
      id: "about me",
      trigger: ".about-me-section",
      start: "top 75%",
      end: "+=50px 80%",
    },
  });

  aboutSection.from(".anim-d", {
    opacity: 0,
    duration: 1,
  });
  aboutSection.from(
    ".anim-e",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    },
    "<"
  );
}

function contentAnimation4() {
  var skillsTimeline = gsap.timeline({
    defaults: {
      y: 25,
    },
    scrollTrigger: {
      trigger: ".anim-g",
      start: "top 80%",
      end: "bottom 80%",
    },
  });
  skillsTimeline.from(".anim-g", { opacity: 0, duration: 1, stagger: 0.3 });
  skillsTimeline.from(
    ".anim-f",
    { opacity: 0, duration: 1, stagger: 0.1 },
    "<.3"
  );
}

function contentAnimation5() {
  if (isMobile.matches) {
    console.log("WORKS MOBILE");

    var worksMobileTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-2",
        start: "top 75%",
      },
    });
    var worksMobileTimeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-3",
        start: "top 75%",
      },
    });

    worksMobileTimeline2.from(".work-2", { y: 25, opacity: 0, duration: 1 });
    worksMobileTimeline2.from(".work-2 > works-section-mobile__works-texts", {
      y: 25,
      opacity: 0,
      duration: 1,
    });
    worksMobileTimeline3.from(".work-3", { y: 25, opacity: 0, duration: 1 });
    worksMobileTimeline3.from(".work-3 > works-section-mobile__works-texts", {
      y: 25,
      opacity: 0,
      duration: 1,
    });
  }
}

//=========FORDA NAVBAR==============//

const menuBtn = document.querySelector(".nav__menu");
const navLinks = document.querySelector(".nav__nav-links");
const homeBody = document.querySelector(".body-home");
const homeContainer = document.querySelector(".container");

let navLinksWidth = navLinks.offsetWidth;
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  console.log("clicked");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navLinks.classList.add("active");
    homeBody.style.left = `-${navLinksWidth}px`;
    homeBody.style.transition = "all .2s ease-in-out";
    homeBody.style.overflow = "hidden";
    ctaWrapper.style.pointerEvents = "none";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("active");
    homeBody.style.left = `0px`;
    homeBody.style.transition = "all .2s ease-in-out";
    homeBody.style.overflow = "auto";
    ctaWrapper.style.pointerEvents = "auto";
    homeBody.style.overflowX = "hidden";

    menuOpen = false;
  }
});

contentAnimation5();
pageTransition();
contentAnimation2();
contentAnimation3();
contentAnimation4();
