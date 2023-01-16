//Optional Chaining

const user = {
    name : "Nitish",
    // address : {houseNumber:9080}
};

//When we want to fetch property which is not present in Object 
//then it will show error (Example we have :- )

// console.log(user.address.houseNumber);

//But we can use optional chaining for the property
//which are not present and it will show undefined
//In future it may be available
console.log(user?.name);
console.log(user?.address?.houseNumber);
