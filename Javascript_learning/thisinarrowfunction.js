//Behaviour of this in arrow function

const person = {
    name : "Nitish",
    age : 78,
    about : () => {
        console.log(this);
        console.log(this.name,this.age);
    }
}

person.about.call();  //It will call the window object
                      //This is because its binds the value of this
                      // one level up
                      //And in this case it is one level up means window function