const person = {
    name : "Nitish",
    city : "Hyderabad",
    age : "26",
    dob : "23/06/1998"
}

const {name, city,...restValues} = person;
console.log(name);
console.log(city);
console.log(restValues);