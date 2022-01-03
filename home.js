
function createHomePage(divContent) {
    // h1 header
    let headerDiv = document.createElement("div");
    headerDiv.className = "header-div";
    let h1 = document.createElement("h1");
    h1.textContent = "Weasleys' Wizard Wheezes";
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
    
    
    // image of food
    // let image = document.createElement("img");
    // image.src = "../src/chicken.jpg";
    // image.alt = "chicken-image";
    
    // append all three to container div
    // main.appendChild(image);
    divContent.appendChild(headerDiv);
    
    console.log("loaderJS")
    // append container to parent container
};

function createHomeContent(divContent) {
    // container div
    let main = document.createElement("div");
    main.className = "main";
    
    // descriptive text
    let homeContent = document.createElement("div");
    homeContent.className = "info-div";
    let slogan = document.createElement("h2");
    slogan.textContent = "\"I'm Commander Shepard, and this is my favourite cafe on the Citadel!\" - Commander Shepard";
    
    let description = document.createElement("p");
    description.textContent = "The cafe endorsed by the legendary Commander Shepard is here to bring you the best food on the entire Citadel!";
    
    // homeContent.appendChild(headerDiv);
    homeContent.appendChild(slogan);
    homeContent.appendChild(description);
    
    main.appendChild(homeContent);
    
    divContent.appendChild(main);
}
// export function in order to call it from another
export {createHomePage, createHomeContent};