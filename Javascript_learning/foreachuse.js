//Foreach use in js

const users = [
    {name:"Nitish",age:26,skill:"Studying"},
    {name:"John",age:24,skill:"Learning"},
    {name:"Carl",age:22,skill:"Playing"},
    {name:"Peter",age:28,skill:"Sleeping"},
    {name:"Mike",age:95,skill:"Acting"},
]

users.forEach((user)=>{
    console.log(`Username is ${user.name} and age is ${user.age} skill is ${user.skill}`);
})