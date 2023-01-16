//Use of everymethod in array

const users = [
    {useId : 1 , userName : "Nitish" , userAge : 25},
    {useId : 2 , userName : "Suraj" , userAge : 34},
    {useId : 3 , userName : "John" , userAge : 87},
    {useId : 4 , userName : "Carl" , userAge : 90},
    {useId : 5 , userName : "Mike" , userAge : 24},
];

const ans = users.every(user=>user.userAge<100);
console.log("So everyone's age is than 100 "+ans); 