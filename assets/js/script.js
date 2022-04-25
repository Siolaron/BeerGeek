import {amountSugarProduct, calculDensity, clickOnTab, finalDensity, calculAlcohol, calculBitterness} from './helpers.js';

/* --------------------------------------------------------------------------------------------
                                      CREATE RECEIPT
-------------------------------------------------------------------------------------------- */

function checkCreateReceipt(e) {
    e.preventDefault()
    let form_createreceipt = e.target
    let validate_name, validate_volume, validate_boiling, validate_estimated_efficiency
    // Get the values
    let receipt_name = form_createreceipt.querySelector('#receipt_name')
    let receipt_volume = form_createreceipt.querySelector('#receipt_volume')
    let receipt_boiling = form_createreceipt.querySelector('#receipt_boiling')
    let receipt_estimated_efficiency = form_createreceipt.querySelector('#receipt_estimated_efficiency')

    // Check name
    if (receipt_name.value == '' || receipt_name.value == null || receipt_name.value == 'undefined') {
        setErrorCreateReceipt(receipt_name, 'Ce champ est incorrect')
        validate_name = false
    } else {
        validate_name = true
    }

    // Check volume
    if (receipt_volume.value == '' || receipt_volume.value == null || receipt_volume.value == 'undefined') {
        setErrorCreateReceipt(receipt_volume, 'Ce champ est incorrect')
        validate_volume = false
    } else {
        validate_volume = true
    }

    // Check boiling

    if (receipt_boiling.value == '' || receipt_boiling.value == null || receipt_boiling.value == 'undefined') {
        setErrorCreateReceipt(receipt_boiling, 'Ce champ est incorrect')
        validate_boiling = false
    } else {
        validate_boiling = true
    }

    // Check estimated efficiency
    if (receipt_estimated_efficiency.value == '' || receipt_estimated_efficiency.value == null || receipt_estimated_efficiency.value == 'undefined') {
        setErrorCreateReceipt(receipt_estimated_efficiency, 'Ce champ est incorrect')
        validate_estimated_efficiency = false
    } else {
        validate_estimated_efficiency = true
    }

    if (validate_name && validate_volume && validate_boiling && validate_estimated_efficiency)
        validateCreateReceipt()

}

function setErrorCreateReceipt(input, message) {
    // Disabled add ingredient button
    document.getElementById('add_ingredient').classList.add('disabled')

    // Add error class
    input.classList.add('error')

    // Create error node
    let errorMessage = document.createElement('p')
    errorMessage.classList.add('createreceipt__error')
    errorMessage.innerHTML = message

    input.parentNode.append(errorMessage)

    // Focus listener to remove error
    input.addEventListener('focus', function () {
        input.classList.remove('error')
        errorMessage.remove()
    })
}

function validateCreateReceipt() {
    // Enable add ingredient button
    document.getElementById('add_ingredient').classList.remove('disabled')
}

/**
 * Fetch data from file
 * 
 * @param {String} ingredientType 
 */
function fetchDataJson(ingredientType) {
    let typeName = ingredientType[0];
    let fileIngredientType = ingredientType[1];

     /* READ JSON DATA */
    fetch(fileIngredientType)
    .then(response => {
        return response.json();
    })
    .then(function(ingredients) {
        traitmentDataIngredients(ingredients, typeName);
    });
}

/**
 * For each ingredient we create an item in the table, we assign it to a line and this line is then added to the corresponding tab
 * 
 * @param {Array} ingredients 
 * @param {String} typeName 
 */
 function traitmentDataIngredients(ingredients, typeName) {

    ingredients = ingredients.data;

    for (const ingredient of Object.entries(ingredients)) {
        let parent = document.querySelector('#' + typeName + ' .tabreceipt');

        let divs = createItemsArray(typeName, ingredient);

        let li = document.createElement('li');
        li.setAttribute('class','tabreceipt__line');
        for (const oneDiv of Object.entries(divs)) {
            li.append(oneDiv[1]);
        }
        parent.appendChild(li);
    }  
}

/**
 * Create div and assign text to it
 * 
 * @param {String} text 
 * @returns 
 */
function createDiv(text) {
    let div = document.createElement('div');
    div.setAttribute('class','tabreceipt__item');

    let p = document.createElement('p');
    p.textContent = text;

    div.appendChild(p);

    return div;
}

/**
 * We get several pieces of information, we assign them to divs and we add these divs to the line
 * 
 * @param {String} typeName 
 * @param {Array} ingredient 
 * @returns 
 */
function createItemsArray(typeName, ingredient) {
    let divName;
    let divType;
    let divLaboratory;
    let divOrigin;
    let divQuantity = createDiv('1,00 oz');

    if(typeName === 'yeasts') {

        divName = createDiv(ingredient[1]['NAME']);
        divType = createDiv(ingredient[1]['TYPE']);
        divLaboratory = createDiv(ingredient[1]['LABORATORY']);
        
        return { divName, divType, divLaboratory, divQuantity };

    } else {
        
        divName = createDiv(ingredient[1]['NAME']);
        divType = createDiv(ingredient[1]['TYPE']);
        divOrigin = createDiv(ingredient[1]['ORIGIN']);
        
        return { divName, divType, divOrigin, divQuantity };
    }
    
}

window.addEventListener("load", function() {

    /* TABS */
	// Retrieve the tabs that correspond to the different types of ingredients
	let tabs = document.querySelectorAll(".tabs-ingredients__list > li");

    //For each tab, add a listener to the click
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener( "click", clickOnTab);
	}

    /* INFOS INGREDIENTS */
    let allIngredientsUrl = 
    {
        hops: "./assets/datas/hops.json", 
        malts: "./assets/datas/malts.json", 
        yeasts: "./assets/datas/yeasts.json"
    };

    //For each file get the data from it
    for (const ingredientType of Object.entries(allIngredientsUrl)) {
        fetchDataJson(ingredientType);
    } 
    
  /* CREATE RECEIPT */
  document.getElementById('form__createreceipt').addEventListener('submit', checkCreateReceipt);
    
});

/* EXEMPLE calculDensity */ 

/* exemple malt */
let listGrain = {
    acidMalt : {
        "mass" : 12,
        "potential" : 58.7
    },
    amberMalt : {
        "mass" : 12,
        "potential" : 75
    },
}
/* exemple levure */
let abbayeBelgian = {
        attenuation :72
}
/* exemple houblon*/
let listHops = {
    admiral : {
        "mass" : 120,
        "alpha" : 14.75,
        "duration":30
    },
}


let DO = calculDensity(listGrain,200,80)
console.log(DO.toFixed(3))

let FD = finalDensity(DO.toFixed(3),abbayeBelgian["attenuation"])
console.log(FD.toFixed(3))

let rateAlcohol = calculAlcohol(DO,FD)
console.log(rateAlcohol.toFixed(1))

let bitterness = calculBitterness(DO,listHops,200)
console.log(bitterness)