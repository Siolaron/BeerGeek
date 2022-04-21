
/* Give the amount sugar product by a malt*/
function amountSugarProduct(mass,potential,efficiency){
    return mass*(potential/100)*(efficiency/100);
}

/* Give density of total malt in the recipe*/
export default function calculDensity(listGrain,volumeBrew,efficiency){
    let sumAmountSugarProduct = 0
    let grain;

    for(grain in listGrain){
        sumAmountSugarProduct += amountSugarProduct(listGrain[grain].mass, listGrain[grain].potential, efficiency)
    }

    return 1+(383* (sumAmountSugarProduct/volumeBrew))/1000;
}