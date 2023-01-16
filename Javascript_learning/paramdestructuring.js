//Param Destructuring in js
const person = {
    name : "Nitish",
    skill : "Dance",
    age : "78"
}

//traditional way
// function getobject(obj){
//     console.log(obj.name);
//     console.log(obj.skill);
//     console.log(obj.age);
// }

//with using param destructuring
function getobject({name:firstname,skill:hunur,age:aayu}){
    console.log(firstname);
    console.log(hunur);
    console.log(aayu);
}

getobject(person);