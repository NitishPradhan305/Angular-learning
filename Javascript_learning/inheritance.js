//Inheritance in js
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    func(){
        console.log(`Your name is ${this.name} and your age is ${this.age}`);
    }

    eat(){
        console.log(`${this.name} you are eating`);
    }
    
    noise(sound){
        console.log(`${sound}`);
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    eat(){
        console.log("You are eating in dog class.");
    }

    testspeed(){
        console.log(`You are running at a speed of ${this.speed}`);
    }
}

const tommy = new Dog("tommy",67,990);
tommy.eat();
tommy.testspeed();