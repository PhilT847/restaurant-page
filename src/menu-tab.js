function createMenuTab() {

    const tab = document.createElement("div");
    tab.classList.add("content-tab");
    tab.classList.add("menu-tab");

    // Add content
    let currentSection = createItemSection(tab, "Pizzas");
    createItem(currentSection, "Small Pizza", 12.99);
    createItem(currentSection, "Medium Pizza", 15.99);
    createItem(currentSection, "Large Pizza", 18.99);
    createItem(currentSection, "Add Toppings", "+1.49");
    createToppingOptions(currentSection);
    
    currentSection = createItemSection(tab, "Sides");
    createItem(currentSection, "French Fries", 3.99);
    createItem(currentSection, "Pizza Fries", 4.49);
    createItem(currentSection, "Onion Rings", 3.99);
    createItem(currentSection, "Chicken Tenders", 6.99);

    currentSection = createItemSection(tab, "Beverages");
    createItem(currentSection, "2L Soda", 3.99);
    createItem(currentSection, "Specialty Soda", 2.99);
    createItem(currentSection, "Milkshake", 4.99);

    return tab;
}

function createItemSection(tab, name) {

    let section = document.createElement("div");
    section.classList.add("menu-section");

    const categoryName = document.createElement("h2");
    categoryName.classList.add("menu-header");
    categoryName.textContent = name;

    section.appendChild(categoryName);

    tab.appendChild(section);

    return section;
}

function createItem(tab, name, price) {

    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");
    itemPrice.classList.add("menu-price");

    itemName.textContent = name;
    itemPrice.textContent = price;

    tab.appendChild(itemName);
    tab.appendChild(itemPrice);
}

function createToppingOptions(tab) {

    const toppings = document.createElement("div");

    toppings.textContent = "(Pepperoni, Sausage, Meatball, ";
    toppings.textContent += "Ham, Peppers, Onions, ";
    toppings.textContent += "Pineapple, Garlic)";

    toppings.classList.add("menu-toppings");

    tab.appendChild(toppings);
}

export {
    createMenuTab
};