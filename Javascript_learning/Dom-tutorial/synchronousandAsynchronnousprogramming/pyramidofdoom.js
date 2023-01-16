//pyramid of dom
const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");
const h8 = document.querySelector(".heading8");
const h9 = document.querySelector(".heading9");
const h10 = document.querySelector(".heading10");

function createpyramid(heading, text, color,time, onSuccessCallback, onFailureCallback) {
    
    setTimeout(()=>{
        if (heading) {
            heading.textContent = text;
            heading.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            onFailureCallback();
        }
    },time);
    
}

//This is called pyramid of doom
createpyramid(h1, "one", "green",1000, () => {
    createpyramid(h2, "two", "blue",1000, () => {
        createpyramid(h3, "three", "red",1000, () => {
            createpyramid(h4, "four", "purple",1000,() => {
                createpyramid(h5, "five", "orange",1000, () => {
                    createpyramid(h6, "six", "pink",1000, () => {
                        createpyramid(h7, "seven", "yellow",1000, () => {
                            createpyramid(h8, "eight", "brown",1000, () => {
                                createpyramid(h9, "nine", "black",1000, () => {
                                    createpyramid(h10, "Ten", "Green",1000, () => {

                                    }, () => console.log("Incorrect heading"));
                                }, () => console.log("Incorrect heading"));
                            }, () => console.log("Incorrect heading"));
                        }, () => console.log("Incorrect heading"));
                    }, () => console.log("Incorrect heading"));
                }, () => console.log("Incorrect heading"));
            }, () => console.log("Incorrect heading"));
        }, () => console.log("Incorrect heading"));
    }, () => console.log("Incorrect heading"));
}, () => console.log("Incorrect heading"));




