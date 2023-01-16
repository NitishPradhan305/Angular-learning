//creating xhr object
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET",url);
console.log(xhr.readyState);

xhr.send();

xhr.onreadystatechange = function hello(){
    if (xhr.readyState === 4) {
        const response = xhr.response;
        console.log(typeof response);
        const data = JSON.parse(response);
        console.log(typeof data);
        console.log(data);
    }
}


