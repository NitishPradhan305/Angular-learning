//Find Method use in js
const users = [
    {useId : 1 , userName : "Nitish" , userAge : 25},
    {useId : 2 , userName : "Suraj" , userAge : 34},
    {useId : 3 , userName : "John" , userAge : 87},
    {useId : 4 , userName : "Carl" , userAge : 90},
    {useId : 5 , userName : "Mike" , userAge : 24},
];

const uniqueUser = users.find((user)=>{
    return user.useId === 4;
});
console.log(uniqueUser);

//we use find method in such cases where there is unique 
//column and we want to retrieve the only user
