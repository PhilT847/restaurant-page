function createMenuTab() {

    const tab = document.createElement("div");
    tab.classList.add("content-tab");
    tab.classList.add("menu-tab");

    // Add content
    createItemCategory(tab, "Pizzas");
    createItem(tab, "Plain Pizza", 19.99);

    return tab;
}

function createItemCategory(tab, name) {

    const categoryName = document.createElement("h2");
    categoryName.classList.add("menu-header");
    categoryName.textContent = name;

    tab.appendChild(categoryName);
}

function createItem(tab, name, price) {

    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemName.textContent = name;
    itemPrice.textContent = price;

    tab.appendChild(itemName);
    tab.appendChild(itemPrice);
}

export {
    createMenuTab
};