//Array Destructuring with spread Operator
const names = ["Nitish","John","Peter","Sam"];
const [value1,value2,...restValues] = names;
console.log(value1);
console.log(value2);
console.log(restValues);
