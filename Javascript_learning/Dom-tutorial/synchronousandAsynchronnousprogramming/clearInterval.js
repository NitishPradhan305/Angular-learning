
const button = document.querySelector("button");
const body = document.body;
console.log(body);
const func = function(){
    const red = Math.floor(Math.random()*125);
    const green = Math.floor(Math.random()*125);
    const blue = Math.floor(Math.random()*125);
    const demoVariable = `rgb(${red},${green},${blue})`;
    console.log(demoVariable);
    body.style.backgroundColor = demoVariable;
};
const id = setInterval(func, 1000);

button.addEventListener("click",()=>{
    clearInterval(id);
    button.textContent = body.style.backgroundColor;
});

button.addEventListener("dblclick",()=>{
    const newId = setInterval(func,0);
    console.log(newId);
})