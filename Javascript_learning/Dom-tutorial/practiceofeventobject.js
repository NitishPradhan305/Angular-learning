const allButtons = document.querySelectorAll(".mybuttons button");
console.log(allButtons);

allButtons.forEach(button=>{
    button.addEventListener("click",(event)=>{
        console.log(event.currentTarget.textContent);
        event.currentTarget.style.backgroundColor = "blue";
        event.currentTarget.style.color="White";
    })
});