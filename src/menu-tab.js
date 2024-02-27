function createMenuTab() {

    const tab = document.createElement("div");
    tab.classList.add("content-tab");
    tab.classList.add("menu-tab");

    // Add content
    createItemCategory(tab, "Pizzas");
    createItem(tab, "Small Pizza", 12.99);
    createItem(tab, "Medium Pizza", 15.99);
    createItem(tab, "Large Pizza", 18.99);
    createItem(tab, "Add Toppings", "+1.99");

    createItemCategory(tab, "Sides");
    createItem(tab, "French Fries", 3.99);
    createItem(tab, "Pizza Fries", 4.49);
    createItem(tab, "Onion Rings", 3.99);
    createItem(tab, "Chicken Tenders", 6.99);

    createItemCategory(tab, "Beverages");
    createItem(tab, "2L Soda", 3.99);
    createItem(tab, "Specialty Soda", 2.99);
    createItem(tab, "Milkshake", 4.99);

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