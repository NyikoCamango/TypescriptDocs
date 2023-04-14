/*Convert Pounds to Kg */
function convertPoundsToKg(pound:number)
{
    let kg:number=0.453592
    let result:number=pound * kg
    return result.toFixed(2)
}
console.log(convertPoundsToKg(3))


/*Convert Inches to Centimeter*/
function convertInchesToCentimeter(Inches:number)
{
    let Centimeter: number=2.54
    let result: number= Centimeter * Inches
    return result
}
/*  */
console.log(convertInchesToCentimeter(3))


/*Convert Fahrenheit to Celsius */
function convertFahrenheitToCelsius(Fahrenheit: number)
{
    let result: number=(Fahrenheit-32) * 5/9
    return result
}

console.log(convertFahrenheitToCelsius(32))


/*Convert ft to Meters */
function convertFtToMeters(ft:number)
{
    let meter:number= 0.3048
    let result: number =meter *ft
    return result
}

console.log(convertFtToMeters(3))








