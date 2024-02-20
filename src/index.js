import "./style.css";
import { createAboutTab } from "./about-tab.js";
import { createMenuTab } from "./menu-tab.js";
import { createContactTab } from "./contact-tab.js";

const pageHandler = () => {

    const mainContent = document.getElementById("content");

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
};

