//Use of mouseOver and mouseleave event
//Using index3.html

const btn = document.querySelector(".btn-headline");
console.log(btn);

btn.addEventListener("mouseover",()=>{
     console.log("Mouseover happened");
});
btn.addEventListener("mouseleave",()=>{
    console.log("Mouseleave happened");
});