//Using async and await

const url = "https://jsonplaceholder.typicode.com/posts";

console.log("Script starts");
async function sendrequest(){
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Something went wrong");
    } else {
        console.log(response);
        const newResponse =await response.json();
        return newResponse;
    }
}

sendrequest().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log("Script ends");