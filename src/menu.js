// Import pizza images as variables (webpack will consider those variables as modules)

import margherita from './assets/margherita.png';
import marinara from './assets/marinara.png';
import napolitana from './assets/napolitana.png';
import parmigiana from './assets/parmigiana.png';
import pepperoni from './assets/pepperoni.png';
import quattroFormaggi from './assets/quattro-formaggi.png';

// Function declaration to return an array containing all pizza images.   
function pizzaMenu(...pizzas){
   let pizzaArray = [];
   pizzaArray.push(...pizzas);
   return pizzaArray;
}

// 'pizzaMenu' function declared inside 'pizzas' variable to store the returned array in memory.
const pizzas = pizzaMenu(margherita, marinara, napolitana, parmigiana, pepperoni, quattroFormaggi);

// Array literal containing all pizza names.
const pizzaNames = ['Margherita', 'Marinara', 'Napolitana', 'Parmigiana', 'Pepperoni', 'Quattro Formaggi'];

// Array literal containing all pizza descriptions.
const pizzaDescription = ['Naples-style, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.',
'Naples-style, seasoned with tomato sauce, extra virgin olive oil, oregano and garlic. The oldest tomato-topped pizza.',
'Naples-style, made with San Marzano tomatoes and Mozzarella di Bufala Campana',
'Sicilian-style, topped with tomato sauce, fried eggplant slices, mozzarella cheese, and grated Grana Padano cheese.',
'American style, topped with mozzarella cheese and crispy pepperoni slices.',
'Rome-style, seasoned with rossa or bianca tomato sauce, and topped with mozzarella, gorgonzola, fontina and parmesano.'
 ]

// module 'menuPage' to be exported and used by index.js
export function menuPage() {

   // Select <div id='content'>
   const contentDiv = document.querySelector('#content');

   // Method to erase all previous content when the module initial-page-load.js is invoked.
   contentDiv.replaceChildren();

   // Create inline <style> body {background-color: #581f18} </style> to change menu page background color and append it to <div id='content'> 
   const background = document.createElement('style');
   background.innerHTML = "body {background-color: #581f18}";
   contentDiv.appendChild(background);

   // Create <div class='wrapperDiv'>
   const wrapperDiv = document.createElement('div');
   wrapperDiv.classList.add('wrapperDiv');

   // Create <div class='menu-title'>
   const menuTitle = document.createElement('div');
   menuTitle.classList.add('menu-title');

   // Create <p>Our menu</p> and append it to <div class='menu-title'> 
   const p = document.createElement('p');
   p.textContent = 'Our menu';
   menuTitle.appendChild(p);

   // Append <div class='menu-title'> to <div class='wrapperDiv'> 
   wrapperDiv.appendChild(menuTitle);

   // Create <div class='containerDiv>
   const containerDiv = document.createElement('div');
   containerDiv.classList.add('containerDiv');

   // `createCell`: function to dynamically create divs and display the menu options.
   function createCell(div){
      
      // for...loop to:
      //1) Create dynamic divs as containers of each menu option contents; 
      //2) iterate over the 'pizzas', 'pizzaNames' and 'pizzaDescription' arrays, in order to sequentially fill the content of the dynamically created divs with the value of each index.
      for(let i = 0; i < pizzas.length;i++) {
        
        // Create <div class='cell'> 
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // Create <div class='img-div'> and append it to <div class='cell'> 
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-div');
        cell.appendChild(imgDiv);

        // Create <img> element. As the for...loop iterates over the 'pizzas' array (pizza images), it assigns the array's index value to the src attribute of the img element (<img src=pizzas[i]>)
        const img = document.createElement('img');
        img.src = pizzas[i];

        // Append <img src=pizzas[i]> to <div class='img-div'> 
        imgDiv.appendChild(img);

        // Append <div class='img-div'> to <div class='cell'> 
        cell.appendChild(imgDiv);

        // Create <div class='ingredients-div'>
        const ingredientsDiv = document.createElement('div');
        ingredientsDiv.classList.add('ingredients-div');

        // Create <p class='pizza-name'> pizzaNames[i] </p>. As the for...loop iterates over the 'pizzaNames' array (pizza names), it assigns the array's index value to the content of the <p> element 
        const pizzaName = document.createElement('p');
        pizzaName.classList.add('pizza-name');
        pizzaName.textContent = pizzaNames[i];

        // Append <p class='pizza-name'> pizzaNames[i] </p> to <div class='ingredients-div'>  
        ingredientsDiv.appendChild(pizzaName);

        // Create <p class='pizza-description'> pizzaDescription[i]</p>. As the for...loop iterates over the 'pizzaDescription' array (pizza descriptions), it assigns the array's index value to the content of the <p> element  
        const pizzaIngredients = document.createElement('p');
        pizzaIngredients.classList.add('pizza-description');
        pizzaIngredients.textContent = pizzaDescription[i];

        // Append <p class='pizza-description'> pizzaDescription[i]</p> to <div class='ingredients-div'>
        ingredientsDiv.append(pizzaIngredients);

        // Append <div class='ingredients-div'> to <div class='cell'>         
        cell.appendChild(ingredientsDiv);
        // Append <div class='cell'> to <div class='containerDiv> 
        containerDiv.appendChild(cell);        
      }
      
      // Append container div (declared as a parameter in the function) to <div class='wrapperDiv'>
      wrapperDiv.appendChild(div);
   }

  // Invoke `createCell` function with <div class='containerDiv> as argument
  createCell(containerDiv);

  // Append <div class='wrapperDiv> to <div id='content'>
  contentDiv.appendChild(wrapperDiv);  

}