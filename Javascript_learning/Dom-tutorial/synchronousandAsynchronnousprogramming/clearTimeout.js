//ClearTimeout is used when we don't want to 
//execute setTimeout after being defined

//Means to disable the setTimeout you can use 
//cleartimeout 

console.log("Scripts starts here");
const id = setTimeout(()=>{
    console.log("You key skills are ++++ ");
},1000);

for (let i = 0; i < 20; i++) {
    console.log("-------");
}

console.log(`your id is ${id}`);
console.log("Clearing time out");
clearTimeout(id);
console.log("Your script ends here");
