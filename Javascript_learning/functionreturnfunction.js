//Function is returning function

function myFun(){
    function yourFun(){
        console.log("You are inside yourFun");
    }
    return yourFun;
}

const callbackFun = myFun();
console.log(callbackFun);
callbackFun();