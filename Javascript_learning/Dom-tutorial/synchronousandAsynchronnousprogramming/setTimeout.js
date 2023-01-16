//Javascript is a synchronous programming
//It is also a single threaded

//Usage of asynchronous programming
//SetTimeout takes a function as an argument and
//and also the time 
//it also returns one integer
//It is used when we want to run the particular code after 
//execution of all the codes

console.log("Script starts here");
 setTimeout(()=>{
console.log("Your name is Nitish Kumar Pradhan");
 },0);

 for (let i = 0; i < 100; i++) {
    console.log("::::::::::::::::::"); 
 }
 console.log("Script ends here -----------");
