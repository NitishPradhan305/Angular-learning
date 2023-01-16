//Map method use in array containing objects

const users = [
    {name:"Nitish",age:26,skill:"Studying"},
    {name:"John",age:24,skill:"Learning"},
    {name:"Carl",age:22,skill:"Playing"},
    {name:"Peter",age:28,skill:"Sleeping"},
    {name:"Mike",age:95,skill:"Acting"},
]

const names = users.map((user)=>{
    return user.name;
});

console.log(names);