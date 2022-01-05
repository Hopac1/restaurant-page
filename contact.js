function createContactPage(divContent) {
    let contactDiv = document.createElement("div");

    let email = document.createElement("p");
    email.textContent = "email: mustnotbenamed@email.com";
    email.className = "email";

    let address = document.createElement("p");
    address.textContent = "93 Diagon Alley, London, England, Great Britain";
    address.className = "address";

    contactDiv.appendChild(email);
    contactDiv.appendChild(address);

    divContent.appendChild(contactDiv);
}

export {createContactPage};