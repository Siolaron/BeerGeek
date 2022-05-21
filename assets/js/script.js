import {
    amountSugarProduct,
    calculDensity,
    clickOnTab,
    finalDensity,
    calculAlcohol,
    calculBitterness,
    calculColorEBC,
    giveEBCtoRGB,
    totalHops,
    totalMalt
} from './helpers.js';

/* --------------------------------------------------------------------------------------------
                                      FUNCTIONS
-------------------------------------------------------------------------------------------- */

/* ----------------------
    CREATE RECEIPT
---------------------- */

/**
 * Check the create receipt form
 */
function checkInitReceipt(e) {
    e.preventDefault()
    let form_initreceipt = e.target
    let validate_name, validate_volume, validate_boiling, validate_estimated_efficiency
    // Get the values
    let receipt_name = form_initreceipt.querySelector('#receipt_name')
    let receipt_volume = form_initreceipt.querySelector('#receipt_volume')
    let receipt_boiling = form_initreceipt.querySelector('#receipt_boiling')
    let receipt_estimated_efficiency = form_initreceipt.querySelector('#receipt_estimated_efficiency')

    // Check name
    if (receipt_name.value == '' || receipt_name.value == null || receipt_name.value == 'undefined') {
        setErrorInitReceipt(receipt_name, 'Ce champ est incorrect')
        validate_name = false
    } else {
        validate_name = true
    }

    // Check volume
    if (receipt_volume.value == '' || receipt_volume.value == null || receipt_volume.value == 'undefined') {
        setErrorInitReceipt(receipt_volume, 'Ce champ est incorrect')
        validate_volume = false
    } else {
        validate_volume = true
    }

    // Check boiling
    if (receipt_boiling.value == '' || receipt_boiling.value == null || receipt_boiling.value == 'undefined') {
        setErrorInitReceipt(receipt_boiling, 'Ce champ est incorrect')
        validate_boiling = false
    } else {
        validate_boiling = true
    }

    // Check estimated efficiency
    if (receipt_estimated_efficiency.value == '' || receipt_estimated_efficiency.value == null || receipt_estimated_efficiency.value == 'undefined') {
        setErrorInitReceipt(receipt_estimated_efficiency, 'Ce champ est incorrect')
        validate_estimated_efficiency = false
    } else {
        validate_estimated_efficiency = true
    }

    if (validate_name && validate_volume && validate_boiling && validate_estimated_efficiency)
        validateInitReceipt()

}

/**
 * Create error message
 */
function setErrorInitReceipt(input, message) {
    // Disabled add ingredient button
    document.getElementById('add_ingredient').classList.add('disabled')

    // Add error class
    input.classList.add('error')

    // Create error node
    let errorMessage = document.createElement('p')
    errorMessage.classList.add('initreceipt__error')
    errorMessage.innerHTML = message

    input.parentNode.append(errorMessage)

    // Focus listener to remove error
    input.addEventListener('focus', function () {
        // Remove class
        input.classList.remove('error')
        // Remove message
        errorMessage.remove()
    })
}

/**
 * Called to unable add ingredient button
 */
function validateInitReceipt() {
    // Enable add ingredient button
    document.getElementById('add_ingredient').classList.remove('disabled')
    // Add event listener
    let btn_add_ingredient = document.getElementById('add_ingredient')
    btn_add_ingredient.addEventListener('click', openModalToAddIngredient)
}

/* ----------------------
    ADD INGREDIENT
---------------------- */

/**
 * Open modal to add an ingredient
 */
function openModalToAddIngredient() {
    let modal = document.getElementById('modal-ingredients')
    modal.style.display = 'grid'
}

/**
 * Close modal to add an ingredient
 */
function closeModalToAddIngredient() {
    let modal = document.getElementById('modal-ingredients')
    modal.style.display = 'none'
}

/**
 * Select an ingredient to choose the form's inputs
 */
function selectIngredientInModal(e) {
    // Variables
    let selected_ingredient = e.target
    let max_quantity = selected_ingredient.dataset.quantity
    let suffix_value = selected_ingredient.dataset.suffix
    let selected_name = selected_ingredient.dataset.name
    let selected_type = selected_ingredient.dataset.type
    let potential = selected_ingredient.dataset.potential
    let ebc = selected_ingredient.dataset.ebc
    let alpha = selected_ingredient.dataset.alpha
    let attenuation = selected_ingredient.dataset.attenuation
    let input_quantity = document.getElementById('add_quantity')
    let input_time = document.getElementById('add_time')
    let input_ingredient_name = document.getElementById('add_ingredient_name')
    let input_ingredient_type = document.getElementById('add_ingredient_type')
    let input_ingredient_potential = document.getElementById('add_ingredient_potential')
    let input_ingredient_ebc = document.getElementById('add_ingredient_ebc')
    let input_ingredient_alpha = document.getElementById('add_ingredient_alpha')
    let input_ingredient_attenuation = document.getElementById('add_ingredient_attenuation')
    let suffix_container = document.getElementById('add_quantity_suffix')

    // Remove the previous ingredient selected if there is any
    let previous_ingredient = document.querySelector('.tab-ingredients__list-item.selected')
    if (previous_ingredient != null)
        previous_ingredient.classList.remove('selected')

    // Toggle the class 'selected' for the target
    selected_ingredient.classList.toggle('selected')

    // Clear inputs
    input_quantity.value = ''
    input_time.value = ''
    input_ingredient_name.value = ''
    input_ingredient_type.value = ''
    input_ingredient_potential.value = ''
    input_ingredient_ebc.value = ''
    input_ingredient_alpha.value = ''
    input_ingredient_attenuation.value = ''

    // Set the correct suffix
    suffix_container.innerText = suffix_value

    // Set the max quantity
    input_quantity.setAttribute('max', max_quantity)

    // Set the correct hidden input
    input_ingredient_name.value = selected_name
    input_ingredient_type.value = selected_type
    if(potential){
        input_ingredient_potential.value = potential
    }
    if(ebc){
        input_ingredient_ebc.value = ebc
    }
    if(alpha){
        input_ingredient_alpha.value = alpha
    }
    if(attenuation){
        input_ingredient_attenuation.value = attenuation
    }
}

/**
 * Check all the parameters before adding new ingredient
 */
function checkAddIngredient(e) {
    e.preventDefault()
    let form_addingredient = e.target
    let validate_name, validate_type, validate_quantity, validate_step, validate_time
    let new_ingredient = []
    // Get the values
    let ingredient_name = form_addingredient.querySelector('#add_ingredient_name')
    let ingredient_type = form_addingredient.querySelector('#add_ingredient_type')
    let ingredient_quantity = form_addingredient.querySelector('#add_quantity')
    let ingredient_quantity_suffix = document.getElementById('add_quantity_suffix').innerText
    let ingredient_step = form_addingredient.querySelector('#add_step')
    let ingredient_time = form_addingredient.querySelector('#add_time')
    let ingredient_potential = form_addingredient.querySelector('#add_ingredient_potential')
    let ingredient_ebc = form_addingredient.querySelector('#add_ingredient_ebc')
    let ingredient_alpha = form_addingredient.querySelector('#add_ingredient_alpha')
    let ingredient_attenuation = form_addingredient.querySelector('#add_ingredient_attenuation')

    // Check name
    if (ingredient_name.value == '' || ingredient_name.value == null || ingredient_name.value == 'undefined') {
        setErrorAddIngredient('Aucun ingrédient n\'a été séléctionné')
        validate_name = false
    } else {
        validate_name = true
        new_ingredient['name'] = ingredient_name.value
    }

    // Check type
    if (ingredient_type.value == '' || ingredient_type.value == null || ingredient_type.value == 'undefined') {
        setErrorAddIngredient('Aucun ingrédient n\'a été séléctionné')
        validate_type = false
    } else {
        validate_type = true
        new_ingredient['type'] = ingredient_type.value
    }

    // Check quantity
    if (ingredient_quantity.value == '' || ingredient_quantity.value == null || ingredient_quantity.value == 'undefined') {
        setErrorAddIngredient('La quantité choisie n\'est pas valide')
        validate_quantity = false
    } else {
        validate_quantity = true
        new_ingredient['quantity'] = ingredient_quantity.value
        new_ingredient['quantity_suffix'] = ingredient_quantity_suffix
    }

    // Check step
    if (ingredient_step.value == '' || ingredient_step.value == null || ingredient_step.value == 'undefined') {
        setErrorAddIngredient('Aucune étape n\'a été séléctionnée')
        validate_step = false
    } else {
        validate_step = true
        new_ingredient['step'] = ingredient_step.value
    }

    // Check time
    if (ingredient_time.value == '' || ingredient_time.value == null || ingredient_time.value == 'undefined') {
        setErrorAddIngredient('Le temps choisi n\'est pas valide')
        validate_time = false
    } else {
        validate_time = true
        new_ingredient['time'] = ingredient_time.value
    }

    // Check potential
    if (ingredient_potential.value == '' || ingredient_potential.value == null || ingredient_potential.value == 'undefined') {
        new_ingredient['potential'] = 0
    } else {
        new_ingredient['potential'] = ingredient_potential.value
    }

    // Check ebc
    if (ingredient_ebc.value == '' || ingredient_ebc.value == null || ingredient_ebc.value == 'undefined') {
        new_ingredient['ebc'] = 0
    } else {
        new_ingredient['ebc'] = ingredient_ebc.value
    }

    // Check alpha
    if (ingredient_alpha.value == '' || ingredient_alpha.value == null || ingredient_alpha.value == 'undefined') {
        new_ingredient['alpha'] = 0
    } else {
        new_ingredient['alpha'] = ingredient_alpha.value
    }

    // Check attenuation
    if (ingredient_attenuation.value == '' || ingredient_attenuation.value == null || ingredient_attenuation.value == 'undefined') {
        new_ingredient['attenuation'] = 0
    } else {
        new_ingredient['attenuation'] = ingredient_attenuation.value
    }

    if (validate_name && validate_type && validate_quantity && validate_step && validate_time){
        validateAddIngredient(new_ingredient)
        calculSpecifity(new_ingredient)
    }
}

function setErrorAddIngredient(message) {
    console.log(message);
}

function validateAddIngredient(new_ingredient) {
    let tab_receipt = document.getElementById("tab_receipt")

    // Create template and clone it
    let template = document.getElementById("template_ingredient_line")
    let clone = document.importNode(template.content, true);

    // Lines container
    let name_case = clone.querySelector('.tabreceipt__item.name .tabreceipt__content')
    let type_case = clone.querySelector('.tabreceipt__item.type .tabreceipt__content')
    let quantity_case_content = clone.querySelector('.tabreceipt__item.quantity .tabreceipt__content')
    let quantity_case_suffix = clone.querySelector('.tabreceipt__item.quantity .tabreceipt__suffix')
    let step_case = clone.querySelector('.tabreceipt__item.step .tabreceipt__content')
    let time_case = clone.querySelector('.tabreceipt__item.time .tabreceipt__content')

    // Fill the cases
    name_case.innerText = new_ingredient.name
    type_case.innerText = new_ingredient.type
    quantity_case_content.innerText = new_ingredient.quantity
    quantity_case_suffix.innerText = new_ingredient.quantity_suffix
    step_case.innerText = new_ingredient.step
    time_case.innerText = new_ingredient.time

    // Set the new line on our tab
    tab_receipt.appendChild(clone)

    // Close the modal
    closeModalToAddIngredient()
}

/* --------------------------------------------------------------------------------------------
                                    Calcul specifity
-------------------------------------------------------------------------------------------- */
let listGrain = {}
let listHops = {}
let listYeast = {}

function calculSpecifity(new_ingredient) {
    /* Variables */
    let volumeBrew = document.querySelector('#receipt_volume').value
    let efficiency = document.querySelector('#receipt_estimated_efficiency').value

    /*Select display result*/
    let massMalt = document.querySelector('#mass-malt')
    let massHops = document.querySelector('#mass-hops')
    let OG = document.querySelector('#originel-density')
    let FG = document.querySelector('#final-density')
    let IBU = document.querySelector('#bitterness')
    let EBC = document.querySelector('#color')
    let ABV = document.querySelector('#rate-alcohol')

    if(new_ingredient.type == 'malt'){
        let malt = {
            [new_ingredient.name] : {
                "mass": new_ingredient.quantity,
                "potential": new_ingredient.potential,
                "ebc": new_ingredient.ebc
            }
        }
        Object.assign(listGrain,listGrain,malt)
    }
    if(new_ingredient.type == 'houblon'){
        let hop = {
            [new_ingredient.name]: {
                "mass": new_ingredient.quantity,
                "alpha": new_ingredient.alpha,
                "duration": new_ingredient.time
            }
        }
        Object.assign(listHops,listHops,hop)
    }
    if(new_ingredient.type == 'levure'){
        let yeast = {
            "attenuation" : new_ingredient.attenuation,
        }
        Object.assign(listYeast,listYeast,yeast)
    }

    document.querySelector('#mass-malt')

    let sumMalt = totalMalt(listGrain)
    let sumHops = totalHops(listHops)
    let DO = calculDensity(listGrain, volumeBrew, efficiency)
    let FD = finalDensity(DO.toFixed(3), listYeast["attenuation"])
    let bitterness = calculBitterness(DO,listHops,volumeBrew)
    let colorEBC = calculColorEBC(listGrain,volumeBrew)
    let rateAlcohol = calculAlcohol(DO, FD)

    /* Display values */
    massMalt.innerText = sumMalt
    massHops.innerText = sumHops
    OG.innerText = DO.toFixed(3)
    if (FD == '' || FD == null || FD == 'undefined' || isNaN(FD)) {
        FG.innerText = 0
    }else{
        FG.innerText = FD.toFixed(3)
    }
    IBU.innerText = bitterness
    EBC.innerText = colorEBC.toFixed(0)
    if (rateAlcohol == '' || rateAlcohol == null || rateAlcohol == 'undefined' || isNaN(rateAlcohol)) {
        ABV.innerText = 0
    }else{
        ABV.innerText = rateAlcohol.toFixed(1)
    }


    console.log(giveEBCtoRGB(colorEBC.toFixed(0)))
}

/* --------------------------------------------------------------------------------------------
                                Display data from file
-------------------------------------------------------------------------------------------- */

/**
 *  Fetch data from file
 * 
 * @param {*} ingredientType Type of ingredient, yeasts, hops or malts
 * @param {*} sortBy By which type of information the table will be sorted
 * @param {*} orderBy Whether the table will be sorted ascending or descending
 */
 function fetchDataJson(ingredientType, sortBy = null, orderBy = null) {

    /* Get datas from json file */
    fetch('./assets/datas/' + ingredientType + '.json')
    .then(response => {
        return response.json();
    })
    .then(function(ingredients) {
        traitmentDataIngredients(ingredients, ingredientType, sortBy, orderBy);
    });
}

/**
 * Detects by which type of information and in which way the data will be sorted
 * 
 */
function sortData() {

    //Depending on the class, the data will be sorted in an ascending or descending manner
    let orderBy;
    orderBy = this.classList.contains('alpha') ?  orderBy = 'alpha' : orderBy = 'alpha-reverse';
    this.classList.toggle('alpha');

    //Detects the current ingredient and the type of information the user has clicked on
    let sortBy = this.dataset.info;
    let typeIngredient = document.querySelector('.tabs-ingredients__item.active').dataset.ingredient;

    //Re fetch the data to sort them
    fetchDataJson(typeIngredient, sortBy, orderBy);
}

/**
 * For each ingredient we create an item in the table, we assign it to a line and this line is then added to the corresponding tab
 * 
 * @param {Array} ingredients
 * @param {String} typeIngredient Type of ingredient : hops, malts or yeasts
 * @param {String} sortBy Sorting according to ingredient information
 * @param {String} orderBy Sort alphabetically from A to Z or from Z to A
 */
 function traitmentDataIngredients(ingredients, typeIngredient, sortBy, orderBy) {
    ingredients = ingredients.data;

    let ingredients_array = [];

    //push all ingredients in an array to be able to sort them after
    for (const ingredient of Object.entries(ingredients)) {
        ingredients_array.push(ingredient);
    }  
    
    //Sort datas
    if(sortBy !== null) {
        ingredients_array = ingredients_array.sort(function(a, b) {

            if ( a[1][sortBy] < b[1][sortBy] ){
                return -1;
              }
              if ( a[1][sortBy] > b[1][sortBy] ){
                return 1;
              }
              return 0;
        });

        //Sorting data descending
        if(orderBy == 'alpha-reverse') {
            ingredients_array.reverse();
        }

        //Remove old lines to make room for new ones
        let tab_active = document.querySelector('.tab-ingredients__pane.active');
        let old_rows = tab_active.querySelectorAll(".tabreceipt__line:not(.main)");

        old_rows.forEach(function(old_row) {
            old_row.remove();
        });
    }

    //Creating semantics for the data and assigning them to the corresponding tab
    ingredients_array.forEach(ingredient => {
        let parent = document.querySelector('#' + typeIngredient + ' .tabreceipt');
        let divs = createItemsArray(typeIngredient, ingredient);
        
        let li = document.createElement('li');
        li.setAttribute('class','tabreceipt__line');
        for (const oneDiv of Object.entries(divs)) {
            li.append(oneDiv[1]);
        }

        parent.appendChild(li);

    });

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

/* --------------------------------------------------------------------------------------------
                                    CALLS TO FUNCTION
-------------------------------------------------------------------------------------------- */

window.addEventListener("load", function () {

    /* ----------------------
              TABS
    ---------------------- */
    // Retrieve the tabs that correspond to the different types of ingredients
    let tabs = document.querySelectorAll(".tabs-ingredients__list > li")
    if (tabs != null)
        //For each tab, add a listener to the click
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", clickOnTab)
        }

    /* ----------------------
        GET DATAS FROM FILE
    ---------------------- */

     /* infos ingredients */
     let allIngredients = ['hops', 'malts', 'yeasts'];
 
     /* For each file get the data from it */
     allIngredients.forEach(ingredient => {
        fetchDataJson(ingredient);
     });

    /* ----------------------
            SORT DATAS
    ---------------------- */

     let infos = document.querySelectorAll('.tabreceipt__line.main .tabreceipt__item');

     infos.forEach(info => {
        info.addEventListener("click", sortData);
     });

    /* ----------------------
          CREATE RECEIPT
    ---------------------- */
    let form_initreceipt = document.getElementById('form__initreceipt')
    if (form_initreceipt != null)
        form_initreceipt.addEventListener('submit', checkInitReceipt)

    /* ----------------------
          ADD INGREDIENT
    ---------------------- */
    /* Close modal */
    let modal_cross = document.getElementById('modal-cross')
    if (modal_cross != null)
        modal_cross.addEventListener('click', closeModalToAddIngredient)

    /* Select Ingredient */
    let ingredients = document.querySelectorAll('.tab-ingredients__list-item')
    if (ingredients != null)
        ingredients.forEach(ingredient => {
            ingredient.addEventListener('click', selectIngredientInModal)
        })

    /* Check form */
    let form_addingredient = document.getElementById('form__add-ingredient')
    if (form_addingredient != null)
        form_addingredient.addEventListener('submit', checkAddIngredient)
})

