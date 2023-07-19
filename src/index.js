import { initialPageLoad } from "./initial-page-load.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

initialPageLoad();

let menuBtn = document.querySelector('.menu-link');
let contactBtn = document.querySelector('.contact-link');
let homeBtn = document.querySelector('.home-link');

menuBtn.addEventListener('click', menuPage);
contactBtn.addEventListener('click', contactPage);
homeBtn.addEventListener('click', initialPageLoad);