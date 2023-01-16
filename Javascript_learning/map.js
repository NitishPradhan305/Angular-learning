//Use of map method in array 

const array1 = [3,6,5,8,9,1,2,9];

//Use return in function when you are using map method
const square = function(number){
    return number * number;
}

const squaredArray = array1.map(square);
console.log(`Your squared array is ${squaredArray}`);

//Another way
array1.map((num)=>{
    return num*2;
}).forEach((no)=>console.log(no));

//3rd way 
console.log("############")
const newArray = array1.map((num2)=>{
    return num2+1;
});
console.log(newArray);