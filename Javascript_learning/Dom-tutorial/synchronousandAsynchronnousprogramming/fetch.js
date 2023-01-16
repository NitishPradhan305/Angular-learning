//Use of fetch in js

const url = "https://jsonplaceholder.typicode.com/posts";
//using get
// const newPromise = fetch(url);

//using post 
const newPromise = fetch(url,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

newPromise.then((response) => {
    console.log(response);
    if (response.ok === true) {
        return response.json();
    } else {
        throw new Error("Something went wrong");
    }
}).then((ans) => {
    console.log(ans);
}).catch((error) => {
    console.log(error);
})





