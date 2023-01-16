const names = ["Nitish","Mohan","Karan","Sam"];
const array1 = [];
for (let index in names) {
    array1.push(names[index].toUpperCase());
}
console.log(array1);