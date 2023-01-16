//Using the events :- Used to perform events

const btn = document.querySelector(".btn-headline");

//1 st way :-
//give the attribute to the button element
//<button class="btn btn-headline" onclick="console.log('You clicked me')">Learn More</button>

//2nd way
// console.dir(btn);
// btn.onclick = function clicked(){
//     console.log("clicked me");
// }

//3rd way
btn.addEventListener("click",function afterclick(){
    console.log("clicked using event initailiser");
});