// Import contact icons and map image as variables (webpack will consider those variables as modules)

import phone from './assets/phone.svg';
import location from './assets/map-marker-1.svg';
import locationMap from './assets/map.png';

// module 'menuPage' to be exported and used by index.js
export function contactPage() {

    // Select <div id='content'>
    const contentDiv = document.querySelector('#content');

    // Method to erase all previous content when the module initial-page-load.js is invoked.
    contentDiv.replaceChildren();

    // Create inline <style> body {background-color: #202c59} </style> to change menu page background color and append it to <div id='content'> 
    let background = document.createElement('style');
    background.innerHTML = "body {background-color: #202c59}";
    contentDiv.appendChild(background);
    
    // Create <div class='wrapperDiv'>
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapperDiv');

    // Create <div class='contact-title'>
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('contact-title');

    // Create <p> Contact us! </p> and append it to <div class='contact-title'> 
    const p = document.createElement('p');
    p.textContent = 'Contact us!';
    menuTitle.appendChild(p);

    // Append <div class='contact-title'> to <div class='wrapperDiv'>
    wrapperDiv.appendChild(menuTitle);
    
    // Create <div class='phone-div'>
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('phone-div');

    // Create <img src='./assets/phone.svg'> and append it to <div class='phone-div'> 
    const phoneIcon = document.createElement('img');
    phoneIcon.classList.add('phone-icon');
    phoneIcon.src = phone;
    phoneDiv.appendChild(phoneIcon);

    // Create <p>+54 11 4567 - 5897</p> and append it to <div class='phone-div'>  
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+54 11 4567 - 5897';
    phoneDiv.appendChild(phoneNumber);

    // Create <div class='location-div'>
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');

    // Create <img src='./assets/map-marker-1.svg'> and append it to <div class='location-div'>
    const locationIcon = document.createElement('img');
    locationIcon.classList.add('location-icon');
    locationIcon.src = location ;
    locationDiv.appendChild(locationIcon);

    // Create <p>Rossetti 1213, 1418, Buenos Aires</p> and apppend it to <div class='location-div'>
    const locationAddress = document.createElement('p');
    locationAddress.textContent = 'Rossetti 1213, 1418, Buenos Aires';
    locationDiv.appendChild(locationAddress);

     // Create <img class='map' src='./assets/map.png'> and append it to <div class='location-div'>
    const map = document.createElement('img');
    map.classList.add('map');
    map.src = locationMap;
    locationDiv.appendChild(map);

    // Append <div class='phone-div'> and <div class='location-div'> to <div class='wrapperDiv'> 
    wrapperDiv.appendChild(phoneDiv);
    wrapperDiv.appendChild(locationDiv);

    // Append <div class='wrapperDiv'> to <div id='content'>
    contentDiv.appendChild(wrapperDiv);

}