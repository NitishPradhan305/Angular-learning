//Every method in array
const numbers = [5,6,2,7,3,90,4,223,89,44,76];

//Every method returns boolean 
//It returns true  if every element satisfies the condition
//otherwise returns false
//So it basically behaves like predicate

function isLessthanthousand(eachnum){
    return eachnum<1000;
}

const num = numbers.every(isLessthanthousand);
console.log(`Every number is less than 1000 so it is ${num}`);
