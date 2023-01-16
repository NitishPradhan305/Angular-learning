//Using for loop in dom
const items = document.getElementsByTagName("a");
console.log(items);

// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     element.style.backgroundColor="Blue";
//     element.style.color = "Black";
//     element.style.fontWeight = "Bold";
// }

for (const item of items) {
    const element = item;
    element.style.backgroundColor="Black";
    element.style.color = "White";
    element.style.fontWeight = "Bold";
}