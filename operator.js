
//ARITHMETIC OPERATORS
let x=20,y=10;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)

//ASSINMENT OPERATORS
let z=5
console.log(z)
z+=3;
console.log(z)
z-=3;
console.log(z)
z*=2;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//comparision operators

let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>=b)
console.log(a<=b)
console.log(a>b)
console.log(a<b)

//logical operators
let age=20;

console.log(age>20 && age<=40)
console.log(age>20 || age<=40)
console.log(!age)


//string functions
let firstname="ch";
let lastname="chandu";
let fullname=`hello ${firstname}.${lastname},welcome to my github`;
console.log(fullname)


//ternary operator
let myage=19
if(myage>=18)
{
    console.log("vote")
}
else
{
    console.log("no vote")
}

let result= myage>=18 ?"eligible" : "not eligible";
console.log(result);

let i=10;
console.log(i++);
console.log(i);