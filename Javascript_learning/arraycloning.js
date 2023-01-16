//Cloning array are of three types
let names = ["Nitish","Suraj"];
console.log(names);
console.log("_____________________")


//1st way:-
let names2 = ["Nitish","Suraj"];
names.push("Men");
console.log(names===names2);
console.log(names2);
 console.log("------------------------")
//2nd way


let names3 = names.slice(0);
names.push("Pan");
console.log("names3 is "+names3);
console.log(names===names3);
console.log("********************")
//3rd way 


let names4 = [].concat(names);
names.push("Fall");
console.log("Is names and names4 same :-"+ names===names4);
console.log("4th clone is :- "+names4);
console.log("#######################")


//4th way is using Spread Operator
let names5 = [...names];
console.log(names5);
console.log(names===names5);

//add extra elements to array2 and assign to array2 after cloning from array1
console.log("@@@@@@@@@@@@@@@@@@@@@@@@");
let array1 = ["A","B","C"];
console.log(array1);
console.log("!!!!!!!!!!");
let array2 = array1.slice(0).concat("D","E");
console.log(array2);
