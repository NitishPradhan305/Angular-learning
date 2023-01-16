//reduse method use in array

const array1 = [4,5,2,6,7,1,8];
const sum = array1.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
},10);

console.log(sum);

//Internal Implementation

//Accumulator || currentvalue   ||  Next element
//10                  4              5
//14                  5              2
//19                  2               6
//21                  6              7
//27                  7               1
//34                  1                8
//35                  8                0
//43     (Sum)

