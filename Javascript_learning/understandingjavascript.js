//Global execution context

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);
function myFunction(){
    console.log("Inside myFunction")
}
var firstName = "Nitish";
var lastName = "Pradhan";
var fullName = firstName +" "+ lastName;
console.log(fullName);