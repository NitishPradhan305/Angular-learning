//Functions inside function
function simplification(){
    function addNumbers(num1,num2){
        return num1+num2;
    }

    const subtractnumbers=(num2,num3)=>{
    return num2-num3;
    }

    const multiplynum = (num4,num5)=> num4*num5;

    const dividenum = (num6,num7) => num6/num7;

    const giveConstant = num8 => 1;
    
    console.log("All functions are inside function");
    console.log(addNumbers(8,9));
    console.log(giveConstant(5));
}

simplification();
