export function contactPage() {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    const aHome = document.createElement('a');
    aHome.classList.add('home-link');    
    aHome.href = '#';
    aHome.textContent = 'Dieguito\'s Pizza';
    h1.appendChild(aHome);    
    header.appendChild(h1);
    contentDiv.appendChild(header); 

    let background = document.createElement('style');
    background.innerHTML = "body {background-color: #202c59}";
    document.body.appendChild(background);

    const headerMenu =  document.createElement('div');
    headerMenu.classList.add('header-menu');
    const ul = document.createElement('ul');
    const liMenu = document.createElement('li');
    const aMenu = document.createElement('a');
    aMenu.classList.add('menu-link');
    aMenu.href = '#';
    aMenu.textContent = 'Menu';
    liMenu.appendChild(aMenu);
    const liContact = document.createElement('li');
    const aContact = document.createElement('a');
    aContact.classList.add('contact-link');
    aContact.href = '#';
    aContact.textContent = 'Contact';
    liContact.appendChild(aContact);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);
    headerMenu.appendChild(ul);
    header.appendChild(headerMenu);


}