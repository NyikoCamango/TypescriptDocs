/*Check for odd */
function detectOdd(variable:number)
{
    if (variable % 2 ==1)
    {
        return "odd"
    }else
    {
        return "even"
    }
}
console.log(detectOdd(9))


/* array that checks for odd numbers*/
let arrayCheckOdds:number[]=[1,2,3,4,5,6,7,8,9]
function CheckOdd(variable: number[])
{
    let odd:number[]=[]
    for(let numOdd of variable)
    {
        if(numOdd % 2 == 1)
        {
            odd.push(numOdd)
        }
    }
    return odd
}
console.log(CheckOdd(arrayCheckOdds))
