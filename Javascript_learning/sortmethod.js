//sort method in array
const numbers = [8,3,2,1,4,9,5,89,2000,341];
numbers.sort();
console.log(numbers);   // This happens because it is being 
                        //sorted based on Ascii values
                        //and also they are treated as Strings

// Sort the Strings
const names = ["Nitish","ant","Sheep","Birth","abc","lion"];
names.sort();
console.log(names);

//Sort the numbers using sort method taking callback
//function as an argument
numbers.sort((a,b)=>{
    return a-b;
});
console.log("Sorted array ",numbers);

//the above operation is possible because:-
// when a - b = (positive)  --- (b comes first and then a)
// when a - b = (negative)  --- (a comes first and then b)
