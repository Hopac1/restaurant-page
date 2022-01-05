function createMenuPage(divContent) {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    let menuItem = createMenuItem("pumpkin-pasties", ".jpg");
    menuContainer.appendChild(menuItem);

    menuItem = createMenuItem("hogwarts-crest-pie", ".jpg");
    menuContainer.appendChild(menuItem);

    menuItem = createMenuItem("chocolate-frog", ".png");
    menuContainer.appendChild(menuItem);


    menuItem = createMenuItem("bertie-botts-beans", ".png");
    menuContainer.appendChild(menuItem);

    menuItem = createMenuItem("butterbeer", ".png");
    menuContainer.appendChild(menuItem);

    menuItem = createMenuItem("exploding-bon-bons", ".png");
    menuContainer.appendChild(menuItem);

    menuItem = createMenuItem("fizzing-whizzbees", ".png");
    menuContainer.appendChild(menuItem);


    divContent.appendChild(menuContainer);
};

function createMenuItem(urlName, format) {
    const image = document.createElement("img");
    image.className = "menu-item";
    image.src = "/dist/images/" + urlName + format;
    image.alt = urlName + "-image";
    return image;
};

function createItemContainer() {
    const container = document.createElement("div");
    
}

export {createMenuPage, createMenuItem};