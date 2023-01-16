
// Break statement in use
for (let k = 0; k < 10; k++) {
    if (k===3) {
        break;
    }
    console.log("You entered : "+k);
}
console.log("You have come out of for loop. ");
console.log("----------------------")

//Continue statement in use
for (let j = 0; j < 10; j++) {
    if (j===3) {
        continue;
    }
    console.log("You entered : "+j);
}
console.log("You have come out of for loop. ");