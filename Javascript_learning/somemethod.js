//Some method  in js
const numbers = [4,10,2,3,6,12,8];

//It will check if atleast one element is 
//satisfying the condition

function isanyOdd(num){
    return num % 3 === 0 ;
}

const val = numbers.some(isanyOdd);
console.log(val);

const users = [
    {useId : 1 , userName : "Nitish" , userAge : 25},
    {useId : 2 , userName : "Suraj" , userAge : 34},
    {useId : 3 , userName : "John" , userAge : 87},
    {useId : 4 , userName : "Carl" , userAge : 90},
    {useId : 5 , userName : "Mike" , userAge : 24},
];

const userOne = users.some((data)=>data.userAge>80);
console.log(`Atleast one of the user age is greater than 80 ${userOne}`);