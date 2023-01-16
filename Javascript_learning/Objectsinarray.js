const array1 = [
    {id: "1", name: "Nitish", age: "25"}, 
    {id: "2", name: "Mike", age: "24"},
    {id: "3", name: "Carl", age: "27"}
];
console.log(array1);
// const demo = array1.pop();
const person ={
    id : 5, name: "Suraj" , age : "24"
}
array1.push(person);
// console.log(demo);
console.log(array1);
//nested destructuring
const [{name:name1}, ,{name:name3}]=array1;
console.log(name1);
console.log(name3);