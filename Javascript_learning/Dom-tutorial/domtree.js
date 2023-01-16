//Use dom tree through coding 
const rootNode = document.getRootNode();
console.log(rootNode);
//Child Relationship
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes);
const headElementnode = htmlElementNode.childNodes[0];
console.log(headElementnode); 
const textNode = htmlElementNode.childNodes[1];
console.log(textNode);
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);
//Parent Relationship
const parentofHead = headElementnode.parentElement;
console.log(parentofHead);

//Sibling Relationship
const sibofheadElement = headElementnode.nextSibling;
console.log(sibofheadElement);
const siboftextElement = headElementnode.nextSibling.nextSibling;
console.log(siboftextElement);

//Only get next element sibling node (will not take text sibling means skip that one)
console.log(headElementnode.nextElementSibling);
