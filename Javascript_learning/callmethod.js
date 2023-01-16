//Use of call method

const user1 = {
    firstName : "Nitish",
    age  : 9,
    about : function(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician);
    }
}

const user2 = {
    firstName : "Mohit",
    age  : 7
}

user1.about.call(user2,"Singing","Arijit");

//Inside call method we have to pass the obj.
//In call method argument we pass binding for this
