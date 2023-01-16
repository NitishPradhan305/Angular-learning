//ForEach Function use

const array1 = [2,5,6,3,4,8,9];

function fun2(number,ind){
console.log(`Number is ${number} and index is ${ind}`);
}

//Traditional way
// for (let i = 0; i < array1.length; i++) {
//     fun2(array1[i],i);
// }

array1.forEach(fun2);
console.log("-------------------");

//Another approach
array1.forEach(function cap(name,id,age,k){
    console.log(`name is ${name} and id is ${id}`);
});
