//different types of datatypes in javascript
//String 
//booleans
//number
//null
//BigInt
//Undefined

//Number to string conversion
let age =90;
age = String(age);
console.log(typeof age);

let myName = "Nitish";
myName = Number(myName);
console.log(typeof myName);

//Another  ways of doing that thing 
let marks =50;
console.log(typeof (marks + ""))

let lastName = +"Pradhan";
console.log(typeof lastName);

let cost = 789;
console.log("---------------")
console.log(typeof (cost.toString()));