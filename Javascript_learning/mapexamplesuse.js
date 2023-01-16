//Map use in js
const person1 = {
    id : 1,
    firstname : "Nitish"
};

const person2 = {
    id : 2,
    firstname : "Mahesh"
};

console.log(person1);

const demoMap = new Map();
demoMap.set(person1,{age:25,city:"Hyderabad"});
demoMap.set(person2,{age:29,city:"Kailash"});
console.log(demoMap);
console.log("next is retriving the values:-")

//for getting the age
console.log(demoMap.get(person1).age);
console.log(demoMap.get(person2).city);

for (const [obj1,objval1] of demoMap) {
    // console.log(obj1);
    for (const key in obj1) {
        console.log(key,obj1[key]);
    }
}