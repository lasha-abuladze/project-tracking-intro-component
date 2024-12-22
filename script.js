`use strict`;


const closeOpenBtnsDiv = document.querySelector(`.close-open-buttons`);
const hamburgerBtn = document.querySelector(`.hamburger-btn`);
const closeBtnd = document.querySelector(`.close-btn`);

const navigationUl = document.querySelector(`.navigation-ul`);

const menuBtns = [hamburgerBtn, closeBtnd];


closeOpenBtnsDiv.addEventListener(`click`, () => {
    menuBtns.forEach(el => {
        el.classList.toggle(`display-none`);
    })
    navigationUl.classList.toggle(`open-menu`);
})

