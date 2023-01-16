//Static methods and properties

class Employee{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    static demo(){
        return `Hey ${this.firstName} you are using static method`;
    }

    static str = "Hello World";
}


console.log(Employee.demo());
console.log(Employee.str);
