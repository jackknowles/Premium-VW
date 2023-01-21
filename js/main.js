//names hamburdger as menuButton
const menuButton = document.querySelector(".hamburger");

//when hamburger clicked memnu activate and then deactivated
menuButton.addEventListener("click", function () {
  const mainNav = document.querySelector(".main-nav");
  menuButton.classList.toggle("is-active");
  mainNav.classList.toggle("is-active");
});

// for pop-up form open
const formOpenButton = document.querySelector(".section-hero__btn-cta");
const formSection = document.querySelector(".section-form");

formOpenButton.addEventListener("click", function () {
  formSection.classList.remove("section-form--unclicked");
});

// to close pop up
// saves the close button
const formCloseButton = document.querySelector(".section-form__close-btn");

// this function add section-form--unclicked class to sectionform, closing the form
formCloseButton.addEventListener("click", function () {
  formSection.classList.add("section-form--unclicked");
});

