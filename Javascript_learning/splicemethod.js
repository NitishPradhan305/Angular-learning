//Splice method in js
const array1 = ["item1","item2","item3","item4"];

//Splice method changes the original array 
//It returns the deleted elements as an array
//Parameters are  start , delete and insert

//insert and delete
const newArray = array1.splice(1,1,"Hello Hero");
console.log(newArray);
console.log(array1);

//delete the items
const deletedArray = array1.splice(1,2);
console.log("deleted items are :- ",deletedArray);

//insert the array
array1.splice(1,0,["Nitish","Suraj"]);
console.log(array1);