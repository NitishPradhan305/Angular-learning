
const todoItem = document.createElement("li");
console.log(todoItem);
todoItem.textContent = "My name is Nitish";
const element = document.querySelector(".todo-list");
console.log(element);
element.prepend(todoItem);
// element.append(todoItem);
console.log(element);

//remove element
todoItem.remove();
console.log(element);

//before (It inserts value before the) outer segment
const todoItem1 = document.createElement("li");
todoItem1.textContent = "My name is Nitish";
element.before(todoItem1);
console.log(element);