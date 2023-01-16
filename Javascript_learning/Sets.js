//Set (It is a iterable)
//Store data
//Sets also have its own methods
//No index based access
//Order is not guaranted
//Unique elements only(No duplicate elements)
//It takes only iterable as an argument
//It can add data of any data type

const numbers = [5,7,8,2,31];

const setVar = new Set(numbers);
console.log(setVar);
setVar.add(78);
setVar.add(67);
setVar.add(["Mike","John"]);
console.log(setVar);

if (setVar.has(78)) {
    console.log("the number is present. ");
}

//finding total number of elements 
let sum = 0;
for (const itr of setVar) {
    // console.log(itr);
    sum = sum + 1;
}
console.log("total number of elements are ",sum);