//Request or Resolve the promise in 2 seconds

const names = ["Nitish","Mike","Carl","John","Rajeev"];

function myFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (names.includes("Nitish") && names.includes("Rajeev")) {
                resolve("Are good friends");
            }else{
                reject("You have rejected me");
            }
        }, 2000);
    })
}

myFunc().then((data)=>console.log(data)).catch((error)=>console.log(error));