//selection of all buttons
const allButoons = document.querySelectorAll(".mybuttons button");
console.log(allButoons);
// const firstButoon = document.querySelectorAll("#one");
// console.log(firstButoon);


for (const button of allButoons) {
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
}