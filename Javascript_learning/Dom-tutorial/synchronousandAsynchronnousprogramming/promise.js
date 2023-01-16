//Use of promise

const bucket = ["coffee","egg","vegetables","salt","oil","rice"];

//creating promise
const friedRicePromise = new Promise((resolve,reject)=>{
    if (bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt")) {
        resolve("Prepared fried rice");
    } else {
        reject("Could not make friedrice");
    }
})

//consuming friedrice
friedRicePromise.then((gotsomething)=>{
    console.log(gotsomething);
}).catch((error)=>{
    console.log(error);
});