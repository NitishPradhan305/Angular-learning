//Creating Objects in js
const person = {
    name : "Nitish",
    age : 25,
    hobbies : ["Playing","sleeping","singing"]
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies.pop());

//Adding key Value pair
person.gender = "Male";
person["address"] = "Jharkhand";   //another way to add address
console.log(person);