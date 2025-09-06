let marks=85;
if(marks>=90)
{
    console.log("A+");
}
else if(marks>=80)
{
    console.log("A");
}
else if(marks>=70)
{
    console.log("b");
}
else 
{
    console.log("c");
}



//switch case
let day=5
switch(day)
{
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        break;
}



//loops
let j=0;
let n=5;
while(j<n)
{
    console.log(j++);
 
}
j=0;
 do
 {
    console.log(j++);
}while(j<n)

for(let i=0;i<n;i++)
{
    console.log(i);
}

let person={
    name:"chandu",
    age:19,
    college:"jntugv"
}
for(let key in person)
{
    console.log(`${key}: ${person[key]}`)
}
for(let i=5;i>0 ;i--)
{
    if(i==3)
    {
        continue;
    }
    else if(i===2)
    {
        break;
    }
    console.log(i);
}