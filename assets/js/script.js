import {amountSugarProduct, calculDensity, clickOnTab} from './helpers.js';

window.addEventListener("load", function() {

    /* TABS */
	// Retrieve the tabs that correspond to the different types of ingredients
	let tabs = document.querySelectorAll(".tabs-ingredients__list > li");

    //For each tab, add a listener to the click
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener( "click", clickOnTab);
	}
    
});