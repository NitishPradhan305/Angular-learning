//Hoisting   (function is called before its declaration is called hoisting)

console.log(hello());      //Only possible for function declaration
function hello(){           //not for function expression and arrow functions
    console.log("Hello world");
}


