import {createHomePage, createHomeContent} from '../dist/home.js';
import {createContactPage} from '../dist/contact.js';
import {createMenuPage} from '../dist/menu.js';

let divContent = document.getElementById('content');

const navButton = document.getElementsByClassName("nav-btn");

createHomePage(divContent);
createHomeContent(divContent);

function toggleActiveClass(event) {
    event.className.toggle(".active")
}

function clearPage() {
    if (divContent.children[1]) {
        divContent.removeChild(divContent.children[1]);
    } else { return }
    
}

function whatButtonWasClicked(button) {
    const buttonName = button.textContent;
    if (buttonName === "Home") {
        createHomeContent(divContent);
    } else if (buttonName === "Menu") {
        createMenuPage(divContent);
    } else if (buttonName === "Contact") {
        createContactPage(divContent);
    }
};

for (var i = 0; i < navButton.length; i++){
    navButton[i].addEventListener("click", function() {
        clearPage()
        whatButtonWasClicked(this)
})};