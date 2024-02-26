function createContactTab() {

    const tab = document.createElement("div");
    tab.textContent = "Contact";
    tab.classList.add("content-object");

    return tab;
}

export {
    createContactTab
};