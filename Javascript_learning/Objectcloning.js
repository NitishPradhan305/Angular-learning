//Clone the object

const obj1 = {
    id : 4,
    name : "Nitish"
};

// const obj2 = obj1;
// obj1.age=26;
// console.log(obj1);
// console.log(obj2)

//But we can clone this to avoid change in the second object
const obj2 = {...obj1};
obj1.age=26;
console.log(obj1);
console.log(obj2)

//Another way of cloning is Object.assign 

const person = {name:"John",skill:"Football Player"};
const clonedPerson = Object.assign({},person);
person.city="Delhi";
console.log("%%%%%%%%%%");
console.log(person);
console.log(clonedPerson);