function createContactTab() {

    const tab = document.createElement("div");
    tab.textContent = "Contact";
    tab.classList.add("content-tab");
    tab.classList.add("contact-tab");

    return tab;
}

export {
    createContactTab
};