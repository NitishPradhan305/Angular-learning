//Use of new Keyword
function createObject(firstName,age){
    // let this = {};     (Understanding purpose)
    this.firstName = firstName;
    this.age = age;
}

createObject.prototype.about = function(){
    console.log(this.firstName,this.age);
}

const user = new createObject("Nitish",67);   // It gives a new User
console.log(user);

//new keyword creates an empty object
//this = {}
//new returns this object
//const user = Object.create(createObject.prototype) is automatically invoked

user.about();

