function createAboutTab() {

    const tab = document.createElement("div");
    tab.textContent = "About";
    tab.classList.add("content-object");

    return tab;
}

export {
    createAboutTab
};