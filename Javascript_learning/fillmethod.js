//Fill method in js

const numbers = [8,4,5,2,9,6,1];
//Fill method can fill the array  with only one number

const arr = new Array(10).fill(2);
console.log(arr);

//and fill method can change the original array
numbers.fill(0,3,6);
console.log(numbers);