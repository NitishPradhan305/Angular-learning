const array1 = {
    name : "Nitish",
    age : "26",
    "address office" : "Hyderabad",
    "personal hobbies" : ["playing","Sleeping","Singing","Roaming"],
    phone : "7463993243"
}


//1st way   (for in loop)
for (const key in array1) {
   console.log(key, " : " ,array1[key]);
}

//2nd way (Object.keys)
console.log( typeof(Object.keys(array1)));
let keys = Object.keys(array1);

//3rd way (for of loop)
for (const key of keys) {
    console.log(`Your key is ${key} and your value is ${array1[key]}`);
    
}
