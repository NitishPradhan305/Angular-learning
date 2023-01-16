//var is hoisted and it gives undefined
//But let and const when hoisted they give reference error

console.log(firstName);
console.log(lastName);
var firstName = "Nitish";     
let lastName = "Pradhan";     //Uncaught ReferenceError: Cannot access 'lastName' before initialization
                              //at hoistinginletandconst.js:5:13