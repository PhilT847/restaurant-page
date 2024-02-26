function createMenuTab() {

    const tab = document.createElement("div");
    tab.textContent = "Menu";
    tab.classList.add("content-object");

    return tab;
}

export {
    createMenuTab
};