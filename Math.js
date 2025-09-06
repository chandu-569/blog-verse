/*function sum(x,y)
{
    console.log(x+y);
}
sum(10,20);

const pi=3.14
console.log(pi)


const subtract=function sub(x,y)
{
    console.log(x-y);
    return x-y;
}
console.log(subtract(5,2))

const square=(x)=>x*x
console.log(square(5))


const subtracts=(x,y)=>
{
    console.log(x,y);
    return x-y;
}


console.log(20,15)
console.log(subtracts(20,15))

*/

export const add=function(x,y)
{
    return x+y;
}

export const sub=function(x,y)
{
    return x-y;
}


export const multiply=function(x,y)
{
    return x*y;
}

const divide=(x,y)=>
{
    return x/y;
}
export default divide;