import phone from './assets/phone.svg';
import location from './assets/map-marker-1.svg';
import locationMap from './assets/map.png';

export function contactPage() {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    let background = document.createElement('style');
    background.innerHTML = "body {background-color: #202c59}";
    contentDiv.appendChild(background);
    
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapperDiv');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('contact-title');
    const p = document.createElement('p');
    p.textContent = 'Contact us!';
    menuTitle.appendChild(p);
    wrapperDiv.appendChild(menuTitle);
    

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('phone-div');
    const phoneIcon = document.createElement('img');
    phoneIcon.classList.add('phone-icon');
    phoneIcon.src = phone;
    phoneDiv.appendChild(phoneIcon);
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+54 11 4567 - 5897';
    phoneDiv.appendChild(phoneNumber);


    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');
    const locationIcon = document.createElement('img');
    locationIcon.classList.add('location-icon');
    locationIcon.src = location ;
    locationDiv.appendChild(locationIcon);

    const locationAddress = document.createElement('p');
    locationAddress.textContent = 'Rossetti 1213, 1418, Buenos Aires';
    locationDiv.appendChild(locationAddress)

    const map = document.createElement('img');
    map.classList.add('map');
    map.src = locationMap;
    locationDiv.appendChild(map);

    wrapperDiv.appendChild(phoneDiv);
    wrapperDiv.appendChild(locationDiv);
    contentDiv.appendChild(wrapperDiv);

}