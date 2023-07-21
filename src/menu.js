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

const pizzas = pizzaMenu(margherita, marinara, napolitana, parmigiana, pepperoni, quattroFormaggi);

const pizzaNames = ['Margherita', 'Marinara', 'Napolitana', 'Parmigiana', 'Pepperoni', 'Quattro Formaggi'];

const pizzaDescription = ['Naples-style, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.',
'Naples-style, seasoned with tomato sauce, extra virgin olive oil, oregano and garlic. The oldest tomato-topped pizza.',
'Naples-style, made with San Marzano tomatoes and Mozzarella di Bufala Campana',
'Sicilian-style, topped with tomato sauce, fried eggplant slices, mozzarella cheese, and grated Grana Padano cheese.',
'American style, topped with mozzarella cheese and crispy pepperoni slices.',
'Rome-style, seasoned with rossa or bianca tomato sauce, and topped with mozzarella, gorgonzola, fontina and parmesano.'
 ]


export function menuPage() {

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
    p.textContent = 'Our menu';
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
        const ingredientsDiv = document.createElement('div');
        ingredientsDiv.classList.add('ingredients-div');
        const pizzaName = document.createElement('p');
        pizzaName.classList.add('pizza-name');
        pizzaName.textContent = pizzaNames[i];
        ingredientsDiv.appendChild(pizzaName);

        const pizzaIngredients = document.createElement('p');
        pizzaIngredients.classList.add('pizza-description');
        pizzaIngredients.textContent = pizzaDescription[i];
        ingredientsDiv.append(pizzaIngredients);

        cell.appendChild(ingredientsDiv);
        containerDiv.appendChild(cell);        
       }
       wrapperDiv.appendChild(div);
    }

    createCell(containerDiv);
    contentDiv.appendChild(wrapperDiv);  



}