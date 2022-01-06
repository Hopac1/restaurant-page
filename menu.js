function createMenuPage(divContent) {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    let menuItem = createMenuItem("chocolate-frog", ".png");
    let itemContainer = createItemName("Chocolate Frog - 4.95");
    itemContainer.appendChild(menuItem)
    menuContainer.appendChild(itemContainer);

    menuItem = createMenuItem("bertie-botts-beans", ".png");
    itemContainer = createItemName("Bertie Bott's Every Flavour Beans - 8.95");
    itemContainer.appendChild(menuItem)
    menuContainer.appendChild(itemContainer);

    menuItem = createMenuItem("exploding-bon-bons", ".png");
    itemContainer = createItemName("Exploding Bon Bons - 8.00");
    itemContainer.appendChild(menuItem)
    menuContainer.appendChild(itemContainer);
    
    menuItem = createMenuItem("fizzing-whizzbees", ".png");
    itemContainer = createItemName("Fizzing Whizzbees - 8.00");
    itemContainer.appendChild(menuItem)
    menuContainer.appendChild(itemContainer);
    
    menuItem = createMenuItem("butterbeer", ".png");
    itemContainer = createItemName("Butterbeer - 3.95");
    itemContainer.appendChild(menuItem)
    menuContainer.appendChild(itemContainer);
    
    menuItem = createMenuItem("butterbeer-4-pack", ".png");
    itemContainer = createItemName("Butterbeer 4 Pack - 11.95");
    itemContainer.appendChild(menuItem)
    menuContainer.appendChild(itemContainer);

    divContent.appendChild(menuContainer);
};

function createMenuItem(urlName, format) {
    const image = document.createElement("img");
    image.className = "menu-item";
    image.src = "/dist/images/" + urlName + format;
    image.alt = urlName + "-image";
    return image;
};

function createItemName(itemName) {
    const container = document.createElement("div");
    container.className = "item-name-container";

    const text = document.createElement("h2");
    text.className = "item-name";
    text.textContent = itemName;

    container.appendChild(text);
    return container;
}

export {createMenuPage, createMenuItem};