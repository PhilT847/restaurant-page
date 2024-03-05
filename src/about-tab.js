function createAboutTab() {

    const tab = document.createElement("div");

    tab.classList.add("content-tab");
    tab.classList.add("about-tab");

    // Header
    const header = document.createElement("h2");
    header.textContent = "About Us";
    tab.appendChild(header);

    // Text
    const textOne = document.createElement("p");
    textOne.textContent = "Lorem ipsum dolor sit amet, " + 
                            "consectetur adipiscing elit, " +
                            "sed do eiusmod tempor incididunt " +
                            "ut labore et dolore magna aliqua. " +
                            "Id eu nisl nunc mi ipsum faucibus " +
                            "vitae. Egestas diam in arcu cursus " +
                            "euismod quis viverra nibh cras.";
    
    const textTwo = document.createElement("p");
    textTwo.classList.add("italics");
    textTwo.textContent = "Augue neque gravida in fermentum et " +
                            "sollicitudin ac orci phasellus!";

    tab.appendChild(textOne);
    tab.appendChild(textTwo);

    let currentSection = createAboutSection(tab, "Hours");
    createSectionItem(currentSection, "Mon-Thurs:", "11am - 9pm");
    createSectionItem(currentSection, "Fri-Sat:", "11am - 11pm");
    createSectionItem(currentSection, "Sunday:", "12pm - 6pm");

    currentSection = createAboutSection(tab, "Locations");
    createSectionItem(currentSection, "Nicetown:", "128 Main Street");
    createSectionItem(currentSection, "Eastburg:", "2246 Tomato Lane");

    return tab;
}

function createAboutSection(tab, header) {

    let section = document.createElement("div");
    section.classList.add("about-section");

    const sectionName = document.createElement("div");
    sectionName.classList.add("about-header");
    sectionName.textContent = header;

    section.appendChild(sectionName);

    tab.appendChild(section);

    return section;
}

function createSectionItem(section, textOne, textTwo) {

    let addTextOne = document.createElement("div");
    addTextOne.classList.add("right-align");
    addTextOne.textContent = textOne;

    let addTextTwo = document.createElement("div");
    addTextTwo.textContent = textTwo;

    section.appendChild(addTextOne);
    section.appendChild(addTextTwo);
}

export {
    createAboutTab
};