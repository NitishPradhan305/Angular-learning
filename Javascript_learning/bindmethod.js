//Bind method use 
//It returns one func which we can print

const play = function(sport,tool){
    console.log(this.name,this.age,sport,tool);
}

const person1 = {
    name : "Nitish",
    age : 78
}

const person2 = {
    name : "Mike",
    age : 70
}

const fun = play.bind(person2,"Badminton","Cork");
fun();