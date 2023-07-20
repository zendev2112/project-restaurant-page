export function menuPage() {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const background = document.createElement('style');
    background.innerHTML = "body {background-color: #581f18}";
    contentDiv.appendChild(background);
    
    



}