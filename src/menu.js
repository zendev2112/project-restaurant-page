import margherita from './assets/margherita.png';
import marinara from './assets/marinara.png';
import napolitana from './assets/napolitana.png';
import parmigiana from './assets/parmigiana.png';
import pepperoni from './assets/pepperoni.png';
import quattroFormaggi from './assets/quattro-formaggi.png';

function pizzaMenu(...pizzas){
   let pizzaArray = [];
   pizzaArray.push(...pizzas);
   return pizzaArray;
}

const pizzas = pizzaMenu(margherita, marinara, napolitana, parmigiana, pepperoni, quattroFormaggi)


export function menuPage() {

    console.log(pizzas);

    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const background = document.createElement('style');
    background.innerHTML = "body {background-color: #581f18}";
    contentDiv.appendChild(background);

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapperDiv');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    const p = document.createElement('p');
    p.textContent = 'Our unique menu';
    menuTitle.appendChild(p);
    wrapperDiv.appendChild(menuTitle);

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('containerDiv');

    function createCell(div){
       for(let i = 0; i < pizzas.length;i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-div');
        cell.appendChild(imgDiv);
        const img = document.createElement('img');
        img.src = pizzas[i];
        imgDiv.appendChild(img);
        cell.appendChild(imgDiv);
        containerDiv.appendChild(cell);        
       }
       wrapperDiv.appendChild(div);
    }

    createCell(containerDiv);
    contentDiv.appendChild(wrapperDiv);  



}