// import calculDensity from './helpers.js'

/*
let listGrain = {
    acidMalt : {
        "mass" : 12,
        "potential" : 58.7
    },
    amberMalt : {
        "mass" : 2,
        "potential" : 75
    },
}

let test = calculDensity(listGrain,200,80)

console.log(test)*/

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

document.getElementById('form__createreceipt').addEventListener('submit', checkCreateReceipt)
