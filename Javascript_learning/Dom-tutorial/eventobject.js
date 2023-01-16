//Jab browser ko pta chala ke user ne event perform kiya hai
//Jo hum listen kr rahe hain
//Browser do kam karta hai :----------
//1.callback hai wo js engine ko degi
//2.callback function ke sath browser jo event hua hai uski
//information bhi dega
//ye info hame ek object ke form me milega

const allButoons = document.querySelectorAll(".mybuttons button");

for (const button of allButoons) {
    button.addEventListener("click",(event)=>{
        console.log(event);
    })
}


