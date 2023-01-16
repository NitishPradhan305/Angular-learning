//Event capturing :- When one event is applied for
//all its child then if we click one the parent
//events of all childs will also be triggered
//means using third parameter of addEventListener

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
 

//Capturing event
grandparent.addEventListener("click",()=>console.log("Capture !! grandparent"),true);
parent.addEventListener("click",()=>console.log("Capture !! parent"),true);
child.addEventListener("click",()=>console.log("Capture !! child"),true);
document.body.addEventListener("click",()=>console.log("Capture !! document.body"),true);

//Event Bubbling
grandparent.addEventListener("click",()=>console.log("Bubble grandparent"));
parent.addEventListener("click",()=>console.log("Bubble parent"));
child.addEventListener("click",()=>console.log("Bubble child"));
document.body.addEventListener("click",()=>console.log("Bubble document.body"));

