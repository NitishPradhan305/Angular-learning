//Class in js
class CreateObject{
    constructor(firstName,lastName,age,skill,city){
        console.log("constructor is called");
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.skill=skill;
        this.city=city;
    }

    func(){
        console.log(`your name is ${this.firstName} and lastname is ${this.lastName}`);
    }

    vote(){
        if (this.age>18) {
            console.log('You can vote')
        }else{
            console.log("You can not vote");
        }
    }

    entercity(myCity){
        console.log(`Your city is ${myCity}`);
    }
}

const user1 = new CreateObject("Nitish","Pradhan",45,"developer","Hyderabad");
const user2 = new CreateObject("Mike","stark",45,"tester","Delhi");
const user3 = new CreateObject("John","Doe",45,"Operator","Bombay");

console.log(user1);
console.log(user2);
console.log(user3);

console.log(user1.func());
user2.entercity("Delhi");
user3.vote();