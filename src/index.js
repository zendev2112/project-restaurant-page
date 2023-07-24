// Import .js files as modules in the entry point index.js file, as specified in the webpack.config.js file 

import { initialPageLoad } from "./initial-page-load.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";
import './styles.css';

// Invoke `initialPageLoad` function to always display home page when website is refreshed. 
initialPageLoad();

// `tabSwitcher` module declared as an IIFE to reduce the usage of global variables
const tabSwitcher = (function () {

// HTML elements declared in index.html, and captured by the DOM to be used and styled as buttons    
let menuBtn = document.querySelector('.menu-link');
let contactBtn = document.querySelector('.contact-link');
let homeBtn = document.querySelector('.home-link');

// Event listeners added to the previously captured DOM variables. The callbacks invoked after the click events are imported from the modules and determine the behavior of the webpage.
menuBtn.addEventListener('click', menuPage);
contactBtn.addEventListener('click', contactPage);
homeBtn.addEventListener('click', initialPageLoad);
})();