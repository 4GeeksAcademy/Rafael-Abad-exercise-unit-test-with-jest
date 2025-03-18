
const dollarToYen = 110;
const YenToPound = 0.0069;
//tasas de cambio son ficticias

const fromEuroToDollar =(euros)=>{
    const tasaDeCambio=1.2;
    return euros*tasaDeCambio;
}
const fromDollarToYen=(dollar)=>{
    return dollar*dollarToYen;
}
const fromYenToPound=(yen)=>{
    return yen*YenToPound;
}
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum };