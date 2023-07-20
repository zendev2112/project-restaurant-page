import home from './assets/home.jpg'

export function initialPageLoad(){
    const contentDiv = document.querySelector('#content');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapperDiv');

    contentDiv.replaceChildren();
    
    const restaurantMotto = document.createElement('div');
    restaurantMotto.classList.add('restaurant-motto');
    const p = document.createElement('p');
    p.textContent = 'Original recipe since 1960'
    restaurantMotto.appendChild(p);    
    wrapperDiv.appendChild(restaurantMotto);

    const homeImage = document.createElement('div');
    homeImage.classList.add('home-image');
    const img = document.createElement('img');
    homeImage.appendChild(img);
    img.src = home
    wrapperDiv.appendChild(homeImage);

    contentDiv.appendChild(wrapperDiv);
    

}