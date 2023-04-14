/*Buzz */
function bizBuzz(value: number)
{
    
     if (value % 3 == 0 && value % 5 == 0)
    {
        return "Fizz-Buzz"
    }
    else if (value % 3 ==0)
    {
        return "Fizz"
    }
    else if (value % 5 ==0)
    {
        return "Buzz"
    }
    else
    {
        return "Its just a number" + " " + value
    }
}
console.log(bizBuzz(16))