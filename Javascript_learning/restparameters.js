//rest Parameters

function addAll(...b) {
    var sum = 0;
    for (const myVar of b) {
        sum = sum + myVar;
    }
    return sum;
}
console.log(addAll(1, 5, 4, 56, 7, 7, 23, 9));
console.log(addAll(6,2,3,4,8,2));