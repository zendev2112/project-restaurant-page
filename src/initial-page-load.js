export function initialPageLoad(){
    const contentDiv = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Dieguito\'s Pizza'
    header.appendChild(h1);
    contentDiv.appendChild(header); 

    const headerMenu =  document.createElement('div');
    headerMenu.classList.add('header-menu');
    const ul = document.createElement('ul');
    const liMenu = document.createElement('li');
    const aMenu = document.createElement('a');
    aMenu.href = '#';
    aMenu.textContent = 'Menu';
    liMenu.appendChild(aMenu);
    const liContact = document.createElement('li');
    const aContact = document.createElement('a');
    aContact.href = '#';
    aContact.textContent = 'Contact';
    liContact.appendChild(aContact);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);
    headerMenu.appendChild(ul);
    header.appendChild(headerMenu);

    const restaurantMotto = document.createElement('div');
    restaurantMotto.classList.add('restaurant-motto');
    const p = document.createElement('p');
    p.textContent = 'Original italian recipe since 2010'
    restaurantMotto.appendChild(p);
    contentDiv.appendChild(restaurantMotto); 

    const homeImage = document.createElement('div');
    homeImage.classList.add('home-image');
    const img = document.createElement('img');
    homeImage.appendChild(img);
    img.src = '../src/assets/artur-rutkowski-4yzEtTQLdL4-unsplash.jpg';
    contentDiv.appendChild(homeImage);

}