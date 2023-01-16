const mainButton = document.querySelector("button");
console.log(mainButton);

const body = document.querySelector("body");
console.log(body);

let getText = document.querySelector(".changetext");
console.log(getText.textContent);

function randomColorselection(){
    const red = Math.floor(Math.random() * 250);
    const green = Math.floor(Math.random() * 250);
    const blue = Math.floor(Math.random() * 250);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomValue = randomColorselection();
    body.style.backgroundColor = randomValue;
    getText.textContent = randomValue;
})