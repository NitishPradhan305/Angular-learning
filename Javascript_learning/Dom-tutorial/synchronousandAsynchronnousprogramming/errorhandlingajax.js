const url = "https://jsonplaceholder.typicode.com/postss";
const xhr = new XMLHttpRequest();

xhr.open("GET",url);

xhr.onload = function(){
    if (xhr.status >= 200 & xhr.status < 300) {
        console.log(xhr.status);
        const res = JSON.parse(xhr.response);
        console.log(res);
    }else{
        console.log("Something went wrong");
    }
}

xhr.onerror = () => {
    console.log("Network error");
}
xhr.send();