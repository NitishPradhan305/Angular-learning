//Use of new
// 1.this = {}     (Create Empty Object)
// 2.returns this object
// 3.const user  =  Object.create(CreateObject.prototype) (It automatically sets prototype for the object)
// While using key we keep the function name starting with capital letter

function Createobjects(firstName, lastName, age, city, degree, gender) {
    // const user = {};
    // const user = Object.create(createobjects.prototype);  //Using proto 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.degree = degree;
    this.gender = gender;
}

//Using prototype
Createobjects.prototype.func = function detail() {
    return `Your name is ${this.firstName} and age is ${this.age}`;
};

Createobjects.prototype.iseighteen = function voting() {
    return this.age > 18;
};

Createobjects.prototype.isMale = function yourgender() {
    return this.gender === "Male";
}
const user1 = new Createobjects("Nitish", "Pradhan", 25, "Hyderabad", "Btech", "Male");
const user2 = new Createobjects("Mohan", "Sharma", 45, "Delhi", "BCom", "Male");
const user3 = new Createobjects("Juhi", "Chawla", 16, "Mumbai", "Msc", "Female");

// console.log(Createobjects.prototype);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user1.func());
// console.log(user2.func());
// console.log(user1.isMale());
// console.log(user3.isMale());

console.log("********************");
for (const key in user1) {
    console.log(key);
}

console.log("-------------------------------------------");
for (const key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key);
    }
}