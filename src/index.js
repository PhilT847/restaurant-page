import "./style.css";
import { createAboutTab } from "./about-tab.js";
import { createMenuTab } from "./menu-tab.js";
import { createContactTab } from "./contact-tab.js";
import pizzaImage from "./ivan-torres-pizza.jpg";

const pageHandler = (function () {

    let mainContent = document.getElementById("content");
    let navButtons = document.querySelector(".header-nav");

    // Add buttons to nav
    for(let i = 0; i < 3; i++) {

        let navBtn = document.createElement("button");

        // Nav button swaps to different tabs
        navBtn.addEventListener("click", () => {
            switchTab(i);
        });

        // Set class and text
        navBtn.classList.add("header-button");

        switch(i) {
            case 0:
                navBtn.textContent = "About";
                break;
            case 1:
                navBtn.textContent = "Menu";
                break;
            case 2:
                navBtn.textContent = "Contact";
                break;
        }

        navButtons.appendChild(navBtn);
    }

    // Set initial tab and open about tab
    let currentTab = 0;
    switchTab(currentTab);
    
    function switchTab(tabIndex) {

        // Clear main content
        while(mainContent.firstChild) {

            mainContent.removeChild(mainContent.lastChild);
        }

        // Set new tab
        currentTab = tabIndex;
    
        switch(currentTab) {

            case 0:
                mainContent.appendChild(createAboutTab());
                break;

            case 1:
                mainContent.appendChild(createMenuTab());
                break;

            case 2:
                mainContent.appendChild(createContactTab());
                break;
        }
    }

    return { mainContent };

})();

