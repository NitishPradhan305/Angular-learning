//Create Multiple Objects

const usermethods = {
     func : function detail(){
      return `Your name is ${this.firstName} and age is ${this.age}`;
    },

     iseighteen : function voting(){
        return this.age > 18;
    },

     isMale : function yourgender(){
        return this.gender === "Male";
    }
}

function createobjects(firstName,lastName,age,city,degree,gender){
    // const user = {};
    const user = Object.create(usermethods);  //Using proto 
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.city=city;
    user.degree=degree;
    user.gender=gender;
    // user.about = usermethods.func;
    // user.vote =usermethods.iseighteen;
    // user.isMale =usermethods.isMale;
    
    return user;
}

const user1 = createobjects("Nitish","Pradhan",25,"Hyderabad","Btech","Male");
const user2 = createobjects("Mohan","Sharma",45,"Delhi","BCom","Male");
const user3 = createobjects("Juhi","Chawla",16,"Mumbai","Msc","Female");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1.func());
console.log(user2.func());
console.log(user1.isMale());
console.log(user3.isMale());

