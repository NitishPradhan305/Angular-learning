//Block and function scope
function myApp(){
    if(true){
        // let myname = "Nitish";     (won't be accessible)
        var myname = "Mike";
        console.log(myname);
    }
    console.log(myname);
    
}
myApp();

//let and const are block scope and 
// var  is function scope