
/** Give the amount sugar product by a malt
 *
 * @param mass
 * @param potential
 * @param efficiency
 *
 * @return number
 */
function amountSugarProduct( mass, potential, efficiency) {
    return mass*(potential/100)*(efficiency/100);
}

/** Give density of total malt in the recipe
 *
 * @param listGrain
 * @param volumeBrew
 * @param efficiency
 *
 * @return number
 * */
function calculDensity( listGrain, volumeBrew, efficiency ) {
  
    let sumAmountSugarProduct = 0
    let grain;

    for(grain in listGrain){
        sumAmountSugarProduct += amountSugarProduct(listGrain[grain].mass, listGrain[grain].potential, efficiency)
    }
  
    return 1+( 383* (sumAmountSugarProduct/volumeBrew ) )/1000;
}

/** Give final density
 *
 * @param originelDensity
 * @param attenuation
 * @return {number}
 */
function finalDensity(originelDensity,attenuation){

    return 1+(((originelDensity*1000-1000)*(1-attenuation/100))/1000)
}

/** Give alcochol rate
 *
 * @param originelDensity
 * @param finalDensity
 * @return {number}
 */
function calculAlcohol(originelDensity, finalDensity){
    return ((originelDensity*1000)-(finalDensity*1000))/7.6
}

/** Gives bitterness of hops
 *
 * @param originelDensity
 * @param durationInfusion
 * @param alphaAcid
 * @param massHops
 * @param volumeBrew
 * @return {number}
 */
function sumBitterness(originelDensity, durationInfusion, alphaAcid, massHops,volumeBrew){
    let step1 = 1.65*Math.pow(0.000125,originelDensity/1000)
    let step2 = (1-Math.pow(Math.exp(1),-0.04*durationInfusion))/4.15
    let step3 = (alphaAcid/10*massHops*74.90)
    return (step1*step2*step3)/volumeBrew
}

/** Gives bitterness of created beer
 *
 * @param originelDensity
 * @param listHops
 * @param volumeBrew
 * @return {number}
 */
function calculBitterness(originelDensity, listHops,volumeBrew){

    let sumBitternessBeer = 0
    let hops;

    for(hops in listHops){
        sumBitternessBeer += sumBitterness(originelDensity,listHops[hops].duration,listHops[hops].alpha, listHops[hops].mass, volumeBrew)
    }

    return Math.round(sumBitternessBeer*10)/10
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

export {amountSugarProduct, calculDensity, clickOnTab, finalDensity, calculAlcohol, calculBitterness};
