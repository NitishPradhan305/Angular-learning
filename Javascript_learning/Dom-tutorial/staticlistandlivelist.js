//Static list and live list
// queryselectorAll hame static list dega 
//Magar getElementsBySomething hame live list dega

const ul = document.querySelector(".todo-list");
const  listItems = document.getElementsByTagName("li");
console.log(listItems);
const li = document.createElement("li");
li.textContent = "Nitish is here";
ul.append(li);
console.log(listItems);