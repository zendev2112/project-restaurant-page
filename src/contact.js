export function contactPage() {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    let background = document.createElement('style');
    background.innerHTML = "body {background-color: #202c59}";
    contentDiv.appendChild(background); 


}