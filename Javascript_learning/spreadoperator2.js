const array1 = [3,5,7];
const array2 = [9,8,1];
const newArray = [...array1,...array2,98];
console.log(newArray);

const demo = [..."7833894798"];
console.log(demo);

//Spread Operator in Object
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key1 : "Nitish is here",
    key3 : "value3",
    key4 : "value4"
}

const newObj = {...obj1,...obj2};
console.log(newObj);

//Convert Array to Object 
const customObj = {...["Nitish","Hero","suraj"]}; 
console.log(customObj);