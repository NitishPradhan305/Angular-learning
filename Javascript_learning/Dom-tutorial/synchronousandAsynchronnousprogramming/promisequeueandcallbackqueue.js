//use of promise and setTimeout simultaneously

console.log("Script starts");
const bucket = ["Mike","Carl","John","Joseph","Nitish","Rajeev","Mohit"];
// console.log(bucket);

const playPromise = new Promise((resolve,reject)=>{
    if (bucket.includes("Nitish") && bucket.includes("Rajeev") && bucket.includes("Mohit")) {
resolve("You can play well");        
    }else{
        reject("You can not play");
    }
})

setTimeout(()=>{
    console.log("you reached setTimeout");
},0);

//promise runs first and then setTimeout runs
playPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

for (let i = 0; i < 20; i++) {
    console.log(Math.random());
}

console.log("Script ends");
