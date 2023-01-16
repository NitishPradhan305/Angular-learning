//Use of promise chaining

function mypromise(){
    return new Promise((resolve,reject)=>{
        resolve("Nitish is here ");
    })
}

//Use of then 
//then always returns a promise

mypromise().then((data)=>{
    console.log(data);
    data += "with Mike";
    return Promise.resolve(data);
}).then(value => {
    console.log(value);
    return value += " as well as Rajeev.";
}).then((value) => {
    console.log(value);    
});