/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((item) =>
  item.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);
/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__image", 1.5, { opacity: 0, y: 150, delay: 1 });
gsap.from(".home__data", 1.8, { opacity: 0, x: -100, delay: 0.8 });
gsap.from(".home__info", 1.8, { opacity: 0, x: -100, delay: 0.8 });
