// Import home image as variables (webpack will consider it as a module)
import home from './assets/home.jpg'

// module 'initialPageLoad' to be exported and used by index.js
export function initialPageLoad(){
    // Select <div id='content'>
    const contentDiv = document.querySelector('#content');

    // Create <div class='wrapperDiv'>
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapperDiv');

    // Method to erase all previous content when the module initial-page-load.js is invoked.
    contentDiv.replaceChildren();

    // Create  <div class=restaurant-motto>
    const restaurantMotto = document.createElement('div');
    restaurantMotto.classList.add('restaurant-motto');

    // Create <p>Original recipe since 1960</p> and append it to <div class=restaurant-motto>     
    const p = document.createElement('p');
    p.textContent = 'Original recipe since 1960'
    restaurantMotto.appendChild(p);    

    // Append <div class=restaurant-motto> to <div class='wrapperDiv'> 
    wrapperDiv.appendChild(restaurantMotto);

    // Create <div class='home-image'>
    const homeImage = document.createElement('div');
    homeImage.classList.add('home-image');

    // Create <img src='./assets/home.jpg'> and append it to <div class='home-image'> 
    const img = document.createElement('img');
    homeImage.appendChild(img);
    img.src = home

    // Append <div class='home-image'> to <div class='wrapperDiv'> 
    wrapperDiv.appendChild(homeImage);

    // Append <div class='wrapperDiv'> to <div id='content'>
    contentDiv.appendChild(wrapperDiv);
    

}