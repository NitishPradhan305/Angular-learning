//Find Method

const names = ["Nitish" , "Men" , "Cow" , "Animal"];
//(Use of find method as predicate and return only the
// first occurance of the condition
// )

const isLengththree = function(name){
    return name.length === 3;
};

const ans = names.find(isLengththree);   //returns only the single output
console.log(ans);