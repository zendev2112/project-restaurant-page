import { initialPageLoad } from "./initial-page-load.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

initialPageLoad();

const loadPages = (function(){
    const homeTab = document.querySelector('.home-link');
    homeTab.onclick = initialPageLoad;

    const menuTab = document.querySelector('.menu-link');
    menuTab.onclick = menuPage;
    
    const contactTab = document.querySelector('.contact-link');
    contactTab.onclick = contactPage;
}
)();
