//__proto__    or  [[prototype]]
//We create an empty object using Object.create
const obj1 = {
    key1 : "Nitish",
    key2 : "Mike"
}

const obj2 = Object.create(obj1);
obj2.key3 = "Hello";

console.log(obj2);
console.log(obj2.key3);
console.log(obj2.key1);    //this is possible due to proto 
                           
//First it will search in base class if it doesn't find there it 
//will search in obj1

console.log(obj2.__proto__);