//Using index3.html
//Use of keypress (If we press any key we it must be visible)

const btn = document.querySelector(".btn-headline");
console.log(btn);

const body = document.body;
console.log(body);

body.addEventListener("keypress",(event)=>{
     console.log(event.key);
});
