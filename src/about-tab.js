function createAboutTab() {

    const tab = document.createElement("div");
    tab.textContent = "About";
    tab.classList.add("content-tab");
    tab.classList.add("about-tab");

    return tab;
}

export {
    createAboutTab
};