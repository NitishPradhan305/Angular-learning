//Event elegation : we can only define event listener
//into grand parent , but it will be useful for adding event into
//child and parent as well

const grandparent = document.querySelector(".grandparent");

 grandparent.addEventListener("click",(e)=>{
    //  console.log(e.target);
    console.log("Clicked me");
});