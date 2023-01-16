//CallBack Functions
//you can pass function inside the parameter of the 
//another function, this is called callback function


function fun2(name){
    console.log("You are inside fun2");
    console.log(`Your name is ${name}`);
}

function fun1(callback){
console.log("May god bless you. ");
callback("Nitish");
}

fun1(fun2);