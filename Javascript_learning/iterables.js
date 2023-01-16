//Iterables 
//Jispe humlog for of loop laga sakte hain wo iterables hain
//String and array are iterables
//Object is not iterable;

const str = "Nitish";
for (const itr of str) {
    console.log(itr);
}

const array1 = ["Mohan","Mike","John"];
for (const item of array1) {
    console.log(item);
}

// const obj = {name:"Nitish",age:25};
// for (const user of obj) {                    (It is not iterable)
//     console.log(user);
// }

// const obj = {name:"Nitish",age:25};
// for (const key in obj) {
//    console.log(obj[key]);
// }