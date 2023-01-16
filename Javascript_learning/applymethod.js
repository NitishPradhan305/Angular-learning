//Use of apply method
//This method takes argument an object and an array
//which contain some values

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

play.apply(person2,["Cricket","bat"]);
play.apply(person1,["Soccer","football"]);