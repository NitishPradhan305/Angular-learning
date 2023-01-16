//closuresexaple4.js

function func(){
    let num = 0;
    return function func2(){
if (num === 0) {
    console.log("You called me");
    num++;
}else{
    console.log("Aap mujhe ek bar call kr chuke ho");
}
    };
}

const myFunc = func();
myFunc();
myFunc();
myFunc();
const myfunc2 = func();
myfunc2();
myfunc2();