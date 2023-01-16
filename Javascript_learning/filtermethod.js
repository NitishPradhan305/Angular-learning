//Use of filter method in array
//Used same like the stream filter method is java
//return only boolean true/false
//So we can say it is like predicate
const array1 = [3,5,6,4,2,8,9,1];
const newArray = array1.filter((num)=>{
    return num % 2 === 0 ;
});
console.log(newArray);