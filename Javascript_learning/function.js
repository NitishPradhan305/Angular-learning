//function in js
function findindex(array1,number1){
    for (const key in array1) {
        if (array1[key] === number1) {
            return key;
        }
    }
    return -1;
}

console.log(findindex([8,4,5,2,3,1,7],3));