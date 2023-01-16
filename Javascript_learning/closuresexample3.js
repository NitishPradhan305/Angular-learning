//Example3 in closures

function myFunc(x){
   return function calculate(y){
    let num = 1;
     for (let i = 0; i < x; i++) {
        num = num * y; 
     }
   
     return num;
   }; 
}

const simplyfy = myFunc(3);
console.log(simplyfy(3));