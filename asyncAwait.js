const sampleData=async ()=>
{
    try{
        let response=await fetch("https://www.google.com");
        console.log(response)
    }catch(err){
console.log("ERROR acessing google :" +err)
    }
}
sampleData()