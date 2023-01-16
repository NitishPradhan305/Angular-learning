//Maps 
//Map is an iterable
//store data in ordered fashion
//store key value pair (like object)
//duplicate keys are not allowed like objects
//Objects can only have string and symbol as key

//In maps you can use anything as key
//like array ,number and string

const hashMap = new Map();
hashMap.set("name","Nitish");
hashMap.set("age",26);
hashMap.set(true,"Indian");
hashMap.set(["hello","boy"],60000);

console.log(hashMap.get("name"));
console.log("Keys are as follows:-")
for (const key of hashMap.keys()) {
    console.log(key);
}

console.log("Iterate the hashMap :- ");
for (const [key1,value1] of hashMap) {      //Here it is array destucturings
    console.log(key1,value1);
}

//Map stores collection of Arrays
