function amountSugarProduct(mass,potential,efficiency){
    return mass*(potential/100)*(efficiency*100);
}

function calculDensity(listGrain,volumeBrassin,efficiency){
    let E = 0;

    listGrain.forEach(grain =>
        E += amountSugarProduct(grain.mass,grain.potential,efficiency)
    )

    return 1+(383* (E/volumeBrassin))/1000;
}