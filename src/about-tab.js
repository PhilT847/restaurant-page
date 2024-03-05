function createAboutTab() {

    const tab = document.createElement("div");

    tab.classList.add("content-tab");
    tab.classList.add("about-tab");

    // Header
    const header = document.createElement("h2");
    header.textContent = "About Us";
    tab.appendChild(header);

    // Text
    const textOne = document.createElement("div");
    textOne.textContent = "Lorem ipsum dolor sit amet, " + 
                            "consectetur adipiscing elit, " +
                            "sed do eiusmod tempor incididunt " +
                            "ut labore et dolore magna aliqua. " +
                            "Id eu nisl nunc mi ipsum faucibus " +
                            "vitae. Egestas diam in arcu cursus " +
                            "euismod quis viverra nibh cras.";
    
    const textTwo = document.createElement("div");
    textTwo.classList.add("italics");
    textTwo.textContent = "Augue neque gravida in fermentum et " +
                            "sollicitudin ac orci phasellus!";

    tab.appendChild(textOne);
    tab.appendChild(textTwo);

    return tab;
}

export {
    createAboutTab
};