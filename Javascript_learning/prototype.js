//Use of prototype

//Functions in javascript can be used as objects
//Example:- 

function hello(){
    console.log("hello world");
}

console.log(hello.name);

hello.key1="value1";            //functions can be used as objects
console.log(hello.key1);

//Now prototype :- Free object is given to function hello
//We can use that prototype object in any way we like
//Prototype is only present in functions , not in object or array

hello.prototype.key2="value2";
hello.prototype.key3="YourValue";
hello.prototype.func = function danger(){
    console.log("you are into the prototype area of function");
}
console.log(hello.prototype);
console.log(hello.prototype.func());


