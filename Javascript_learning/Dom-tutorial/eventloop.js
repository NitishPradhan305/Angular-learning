//Use of event loop and web api
//use of web api is to make the callback functions in queue
//and execute when the operations in global execution context gets over

const allButtons = document.querySelectorAll(".mybuttons button");
console.log(allButtons);

allButtons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        let num = 0 ;
        for (let i = 0; i < 1000000000; i++) {
            num++;
        }
        console.log(event.currentTarget.textContent,num);
    })
})

let val = 0;
for (let k = 0; k < 100000000; k++) {
 val++;   
}
console.log("You are in global execution context",val);
console.log("last statement");