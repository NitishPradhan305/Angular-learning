//Promise chaining in ajax 

const url = "https://jsonplaceholder.typicode.com/posts";

function sendrequest(method,url){
    return new Promise((resolve,reject) => {
        
            const xhr = new XMLHttpRequest();
            xhr.open(method,url);
            xhr.onload = function(){
                if (xhr.status >= 200 & xhr.status < 300) { 
                    const response = xhr.response;  
                    resolve(response);
                }else{
                    reject(new Error("something went wrong"));                }
            }
            xhr.send();
    })
}

sendrequest("GET",url).then((res)=>{
    const data = JSON.parse(res);
    return data;
}).then(data => {
    console.log(data);
    return data;
}).then((ans) => {
    const id =  ans[5].id;
    console.log(id);
    return id;
}).then((id) => {
    const url2 = `${url}/${id}`;
    return sendrequest("GET",url2);    
}).then(newResponse => {
    console.log(newResponse);
}).catch((error) => {
    console.log(error);
});

