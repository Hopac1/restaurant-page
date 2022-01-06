function createContactPage(divContent) {
    let contactDiv = document.createElement("div");
    contactDiv.className = "contact-container";

    let contactTitle = document.createElement("p");
    contactTitle.textContent = "Contact Us";
    contactTitle.className = "title";

    let email = document.createElement("p");
    email.textContent = "mustnotbenamed@email.com";
    email.className = "contact";

    let addressTitle = document.createElement("p");
    addressTitle.textContent = "Where We Are";
    addressTitle.className = "title";

    let address = document.createElement("p");
    address.textContent = "93 Diagon Alley, London, England, Great Britain";
    address.className = "contact";

    const image = document.createElement("img");
    image.className = "map";
    image.src = "images/map.png";
    image.alt = "map-of-shop";

    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(email);
    contactDiv.appendChild(addressTitle);
    contactDiv.appendChild(address);
    contactDiv.appendChild(image);

    divContent.appendChild(contactDiv);
}

export {createContactPage};