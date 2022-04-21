
/* Give the amount sugar product by a malt */
function amountSugarProduct( mass, potential, efficiency) {
    return mass*(potential/100)*(efficiency/100);
}

/* Give density of total malt in the recipe */
function calculDensity( listGrain, volumeBrew, efficiency ) {
  
    let sumAmountSugarProduct = 0
    let grain;

    for(grain in listGrain){
        sumAmountSugarProduct += amountSugarProduct(listGrain[grain].mass, listGrain[grain].potential, efficiency)
    }
  
    return 1+( 383* (sumAmountSugarProduct/volumeBrew ) )/1000;
}


/**
 * On click retrieve the current tab and change the content according to it
 * 
 * @param {event} tabClickEvent 
 */
function clickOnTab( tabClickEvent ) {

    // Retrieve the tabs that correspond to the different types of ingredients
    let tabs = document.querySelectorAll(".tabs-ingredients__list > li"); 

    // Remove active class from all tabs to assign it to a new tab
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Get clicked tab an assign it active class
    let clickedTab = tabClickEvent.currentTarget; 
    clickedTab.classList.add("active");

    // Get all tabs panes
    let contentPanes = document.querySelectorAll(".tab-ingredients__pane");

    // Remove active class from all tabs pane to assign it to a new tab pane
    for (i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
    }
    
    // Get data attributes to modify the active panel
    let clickedTypeIngredientData = clickedTab.dataset.ingredient;
    let concernedTabPane = document.querySelector('#'+ clickedTypeIngredientData);
    concernedTabPane.classList.add("active");
}

export {amountSugarProduct, calculDensity, clickOnTab};