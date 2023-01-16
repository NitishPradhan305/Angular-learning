//Use of getters and setters
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullname(fullName){
       const [firstName,lastName]=fullName.split(" ");
       this.firstName=firstName;
       this.lastName=lastName;
    }

}

const person1 = new Person("Nitish","Pradhan",50);
console.log(person1);
person1.fullname = "John Doe";
console.log(person1.firstName);
console.log(person1.lastName);

