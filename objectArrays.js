let per={
    name:"chandu",
    age:20
}
console.log(per.name);
console.log(per.age);
console.log(per["name"]);
console.log(per["age"]);


const {name,age}=per;   //destructuring assignment
console.log(name);
console.log(age);

let fruit=["apple","banana","mango"]
console.log(fruit[0])


let numbers=[1,2,3,4,5];
let squares=numbers.map((num)=>num*num);  //transforma each element
console.log(squares);

let even=numbers.filter((num)=> num%2==0)           //filter values based on condition
console.log(even)


let sum= numbers.reduce((present,num)=>present+num,0)           //reduce
console.log(sum)


let student=[
    {
        nam:"chandu",
        mark:100
    },
    {
        nam:"santhosh",
        mark:100
    },
    {
        nam:"karthikeya",
        mark:100
    }
]

for(let students of student)
{
    for(let properties in students)
    {
    console.log(`${properties} ${students[properties]}`);
    }
}