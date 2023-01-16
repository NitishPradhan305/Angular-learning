//Event bubbling :- When one event is applied for
//all its parent then if we click one the parent's
//events will also be triggered

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
console.log(grandparent);
console.log(parent);
console.log(child);

grandparent.addEventListener("click",()=>console.log("You called grandparent"));
parent.addEventListener("click",()=>console.log("You called parent"));
child.addEventListener("click",()=>console.log("You called child"));
document.body.addEventListener("click",()=>console.log("You called document.body"));

