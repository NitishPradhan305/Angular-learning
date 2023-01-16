//Arrow functions in js
const dividetwonumbers = (number1,number2) => {
    return number1/number2;
}
console.log(dividetwonumbers(8,2));

//example2 (No need to write return keyword also)
const multiplytwonumbers = (a,b) => a*b;
console.log(multiplytwonumbers(5,6));

//example3   (No need to give brackets when one parameter)
const findlength = str => str.length;
console.log(findlength("Nitish Kumar Pradhan"));