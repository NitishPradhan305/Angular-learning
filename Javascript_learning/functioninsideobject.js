//Methods
//Function inside object is called method

const person = {
    name : "Nitish",
    age : 24,
    about : function(){
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}

person.about();

//Another way of using this 
//this is used to refer the current object using 
//which the key is called

function yourInfo(){
    console.log(`Your name is ${this.firstName} and skill is ${this.skill}`);
}

const user1 = {
    firstName : "John",
    skill :  "Dance",
    detail : yourInfo
}
const user2 = {
    firstName : "Mike",
    skill :  "Singing",
    detail : yourInfo
}
const user3 = {
    firstName : "Carl",
    skill :  "Playing",
    detail : yourInfo
}

user1.detail();
user2.detail();
user3.detail();