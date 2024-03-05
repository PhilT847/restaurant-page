function createContactTab() {

    const tab = document.createElement("div");

    tab.classList.add("content-tab");
    tab.classList.add("contact-tab");

    // Header
    const header = document.createElement("h2");
    header.textContent = "Contact Us";
    tab.appendChild(header);

    // Add content
    let currentSection = createContactSection(tab, "Matt Lorem");
    createContactInfo(currentSection, 
                        "Manager", 
                        "123-456-7890", 
                        "mlorem@lorempizza.com");

    currentSection = createContactSection(tab, "Sherry Lorem");
    createContactInfo(currentSection, 
                        "Accounting", 
                        "123-456-7891", 
                        "slorem@lorempizza.com");

    currentSection = createContactSection(tab, "Matt Lorem, Jr.");
    createContactInfo(currentSection, 
                        "Head Chef", 
                        "123-456-7892", 
                        "jlorem@lorempizza.com");

    return tab;
}

function createContactSection(tab, name) {

    let section = document.createElement("div");
    section.classList.add("contact-section");

    const contactName = document.createElement("div");
    contactName.classList.add("contact-header");
    contactName.textContent = name;

    section.appendChild(contactName);

    tab.appendChild(section);

    return section;
}

function createContactInfo(section, role, phone, email) {

    let roleText = document.createElement("div");
    roleText.textContent = role;
    roleText.classList.add("italics");

    let phoneText = document.createElement("div");
    phoneText.textContent = "Phone: " + phone;

    let emailText = document.createElement("div");
    emailText.textContent = "Email: " + email;

    section.appendChild(roleText);
    section.appendChild(phoneText);
    section.appendChild(emailText);
}

export {
    createContactTab
};