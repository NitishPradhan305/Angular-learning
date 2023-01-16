//Need of closures

function myFunction(firstName,lastName){
    function innerfunc(){
        console.log(firstName,lastName);
    }
    return innerfunc;
}

const myFunc = myFunction("Nitish","Pradhan");
myFunc();

//while passing the function from one function it takes
//also the local memory containing all the varaibles
//with it , this is called closures. 
