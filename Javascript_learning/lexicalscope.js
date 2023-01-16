//Lexical Scope
const myVar = 199;
function myApp(){
    function myFunc(){
        function myfunc2(){
            console.log("Inside myfunc2  "+myVar);
        }
        console.log("You are inside myfunc");
        myfunc2();
    }
    console.log("You are inside myApp");
    console.log(myVar);
    myFunc();
}
console.log("Global scope");
myApp();