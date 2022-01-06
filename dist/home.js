
function createHomePage(divContent) {
    // h1 header
    let headerDiv = document.createElement("div");
    headerDiv.className = "header-div";
    let h1 = document.createElement("h1");
    h1.textContent = "Weasleys' Wizard Wheezes";
    
    // shop logo
    let image = document.createElement("img");
    image.className = "shop-logo";
    image.src = "images/shop-logo.png";
    image.alt = "shop-logo";
    headerDiv.appendChild(image);
    headerDiv.appendChild(h1);

    // nav buttons
    let navBar = document.createElement("div");
    navBar.className = "nav-bar"
    let home = document.createElement("button");
    home.className = "nav-btn";
    home.textContent = "Home";
    navBar.appendChild(home);

    let menu = document.createElement("button");
    menu.className = "nav-btn";
    menu.textContent = "Menu";
    navBar.appendChild(menu);

    let contact = document.createElement("button");
    contact.className = "nav-btn";
    contact.textContent = "Contact";
    navBar.appendChild(contact);

    headerDiv.appendChild(navBar);
    

    divContent.appendChild(headerDiv);
    
    console.log("loaderJS")
};

function createHomeContent(divContent) {
    // container div
    let main = document.createElement("div");
    main.className = "main";
    
    // descriptive text
    let homeContent = document.createElement("div");
    homeContent.className = "info-div";
    let slogan = document.createElement("h2");
    slogan.textContent = "From chocolate frogs to butterbeer, we sell it all!";
    
    let description = document.createElement("p");
    description.className = "description";
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    homeContent.appendChild(slogan);
    homeContent.appendChild(description);
    
    main.appendChild(homeContent);
    
    divContent.appendChild(main);
}
// export function in order to call it from another
export {createHomePage, createHomeContent};