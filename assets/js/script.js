import { amountSugarProduct, calculDensity, clickOnTab, finalDensity, calculAlcohol } from './helpers.js';

/* --------------------------------------------------------------------------------------------
                                      FUNCTIONS
-------------------------------------------------------------------------------------------- */

/* ----------------------
    CREATE RECEIPT
---------------------- */

/**
 * Check the create receipt form
 */
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

/**
 * Create error message
 */
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
        // Remove class
        input.classList.remove('error')
        // Remove message
        errorMessage.remove()
    })
}

/**
 * Called to unable add ingredient button
 */
function validateCreateReceipt() {
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
    let input_quantity = document.getElementById('add_quantity')
    let input_time = document.getElementById('add_time')
    let input_ingredient_name = document.getElementById('add_ingredient_name')
    let input_ingredient_type = document.getElementById('add_ingredient_type')
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

    // Set the correct suffix
    suffix_container.innerText = suffix_value

    // Set the max quantity
    input_quantity.setAttribute('max', max_quantity)

    // Set the correct hidden input
    input_ingredient_name.value = selected_name
    input_ingredient_type.value = selected_type
}

/**
 * Check all the parameters before adding new ingredient
 */
function checkAddIngredient(e) {
    e.preventDefault()
    let form_addingredient = e.target
    let validate_name, validate_quantity, validate_step, validate_time
    let new_ingredient = []
    // Get the values
    let ingredient_name = form_addingredient.querySelector('#add_ingredient_name')
    let ingredient_type = form_addingredient.querySelector('#add_ingredient_type')
    let ingredient_quantity = form_addingredient.querySelector('#add_quantity')
    let ingredient_step = form_addingredient.querySelector('#add_step')
    let ingredient_time = form_addingredient.querySelector('#add_time')

    // Check name
    if (ingredient_name.value == '' || ingredient_name.value == null || ingredient_name.value == 'undefined') {
        setErrorAddIngredient('Aucun ingrédient n\'a été séléectionné')
        validate_name = false
    } else {
        validate_name = true
        new_ingredient['name'] = ingredient_name.value
    }

    // Check type
    if (ingredient_type.value == '' || ingredient_type.value == null || ingredient_type.value == 'undefined') {
        setErrorAddIngredient('Aucun ingrédient n\'a été séléectionné')
        validate_name = false
    } else {
        validate_name = true
        new_ingredient['type'] = ingredient_type.value
    }

    // Check quantity
    if (ingredient_quantity.value == '' || ingredient_quantity.value == null || ingredient_quantity.value == 'undefined') {
        setErrorAddIngredient('La quantité choisie n\'est pas valide')
        validate_quantity = false
    } else {
        validate_quantity = true
        new_ingredient['quantity'] = ingredient_quantity.value
    }

    // Check step
    if (ingredient_step.value == '' || ingredient_step.value == null || ingredient_step.value == 'undefined') {
        setErrorAddIngredient('Aucune étape n\'a été sélectionnée')
        ingredient_step = false
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

    if (validate_name && validate_quantity && validate_step && validate_time)
        validateAddIngredient(new_ingredient)
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
    let name_case = clone.querySelector('.tabreceipt__item.name')
    let type_case = clone.querySelector('.tabreceipt__item.type')
    let quantity_case = clone.querySelector('.tabreceipt__item.quantity')
    let step_case = clone.querySelector('.tabreceipt__item.step')
    let time_case = clone.querySelector('.tabreceipt__item.time')

    // Fill the cases
    name_case.innerText = new_ingredient.name
    type_case.innerText = new_ingredient.type
    quantity_case.innerText = new_ingredient.quantity
    step_case.innerText = new_ingredient.step
    time_case.innerText = new_ingredient.time

    // Set the new line on our tab
    tab_receipt.appendChild(clone)

    // Close the modal
    closeModalToAddIngredient()
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
          CREATE RECEIPT
    ---------------------- */
    let form_createreceipt = document.getElementById('form__createreceipt')
    if (form_createreceipt != null)
        form_createreceipt.addEventListener('submit', checkCreateReceipt)

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

/* EXEMPLE calculDensity */

let listGrain = {
    acidMalt: {
        "mass": 12,
        "potential": 58.7
    },
    amberMalt: {
        "mass": 12,
        "potential": 75
    },
}

let abbayeBelgian = {
    attenuation: 72
}

let DO = calculDensity(listGrain, 200, 80)
console.log(DO.toFixed(3))

let FD = finalDensity(DO.toFixed(3), abbayeBelgian["attenuation"])
console.log(FD.toFixed(3))

let rateAlcohol = calculAlcohol(DO, FD)
console.log(rateAlcohol.toFixed(1))
