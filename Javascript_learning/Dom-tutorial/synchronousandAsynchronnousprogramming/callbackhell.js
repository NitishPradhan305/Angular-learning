//Callback hell

const h1 = document.querySelector(".heading1");
console.log(h1);
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");

//Callback hell
setTimeout(() => {
    h1.textContent = "Nitish";
    h1.style.color = "blue";
    setTimeout(() => {
        h2.textContent = "Mohan";
    h1.style.color = "green";
    }, 5000);
    setTimeout(() => {
        h3.textContent = "Mike";
    h3.style.color = "red";
    }, 4000);
    setTimeout(() => {
        h4.textContent = "Carl";
    h4.style.color = "Purple";
    }, 3000);
    setTimeout(() => {
        h5.textContent = "Maxx";
    h5.style.color = "Yellow";
    }, 2000);
}, 1000);