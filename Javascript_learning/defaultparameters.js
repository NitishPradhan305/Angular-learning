//Default Parameters

//traditional way of coding
function add(a , b ){
    if (typeof b === "undefined") {
        b = 0;
    }
    return a+b;
}
console.log(add(7,6));
console.log(add(7));

//default Parameters
function mul(c,d=4){
    return c*d;
}
console.log(mul(2));
console.log(mul(6,9));