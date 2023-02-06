"use strict";

/* variables */
const openNavEl = document.querySelector(".open-nav");
const closeNavEl = document.querySelector(".close-nav");
const navbarEl = document.querySelector(".navbar");
const openPickerEl = document.querySelector(".open-picker");
const closePickerEl = document.querySelector(".close-picker");
const colorPickerEl = document.querySelector(".color-picker");
const btnLightEl = document.querySelector(".light");
const btnDarkEl = document.querySelector(".dark");
const changeClassAr = document.querySelectorAll(".change");
let currentYear = new Date().getFullYear();

/* functions */

const updateTheme = function () {
  let themeChoiceValue = document.querySelector(".input-radio:checked").value;
  window.localStorage.setItem("theme", themeChoiceValue);
};

/* storage verification */

const storageTheme = function () {
  let theme = window.localStorage.getItem("theme");
  themeVerifier(theme);
};

function themeVerifier(theme) {
  if (theme === "light") {
    changeToLight();
    document.querySelector(".dark-radio").removeAttribute("checked");
  } else if (theme === "dark") {
    changeToDark();
    document.querySelector(".dark-radio").toggleAttribute("checked");
  }
}

/* navbar functions */
const openNav = function () {
  navbarEl.style.transform = "translateX(0rem)";
};
const closeNav = function () {
  navbarEl.style.transform = "translateX(-19.5rem)";
};
/* color picker funtions */
const openPicker = function () {
  colorPickerEl.style.transform = "translateX(0rem)";
};

const closePicker = function () {
  colorPickerEl.style.transform = "translateX(20rem)";
};

const changeToDark = function () {
  for (let i = 0; i < changeClassAr.length; i++)
    changeClassAr[i].classList.add("dark-mode");
};

const changeToLight = function () {
  for (let i = 0; i < changeClassAr.length; i++)
    changeClassAr[i].classList.remove("dark-mode");
};

/* calls */
window.onload = storageTheme;

/* variables */
openNavEl.addEventListener("click", openNav);
openNavEl.addEventListener("click", closePicker);
closeNavEl.addEventListener("click", closeNav);
openPickerEl.addEventListener("click", openPicker);
openPickerEl.addEventListener("click", closeNav);
closePickerEl.addEventListener("click", closePicker);
btnDarkEl.addEventListener("click", changeToDark);
btnDarkEl.addEventListener("click", updateTheme);
btnLightEl.addEventListener("click", changeToLight);
btnLightEl.addEventListener("click", updateTheme);

/* document */
document.querySelector(".color").addEventListener("click", closePicker);
document.querySelector(".navbar-links").addEventListener("click", closeNav);
document.querySelector(".date").textContent = currentYear;

const showing = function () {
  let test = window.localStorage.getItem("theme");
  alert(test);
  if (test === "light") {
    alert("lightaaaaaaaaaaaaaaaaaaaa");
  } else if (test === "dark") {
    alert("darkaaaaaaaaaaa");
  }
};
document.querySelector(".hero-link").addEventListener("click", showing);
