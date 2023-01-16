//Use of this keyword in dom
const btn = document.querySelector(".btn-headline");

//this keyword shows button itself when we use function declaration or 
//function expression
btn.addEventListener("click",function afterclick(){
    console.log("clicked using event initailiser");
    console.log(this);
});