//Use of sort method in array of Objects

const products = [
    {productId : 1,productName : "pocom3" , productPrice : 23000},
    {productId : 2,productName : "motorola G4 plus" , productPrice : 11000},
    {productId : 3,productName : "Samsung s11" , productPrice : 22000},
    {productId : 4,productName : "Nokia8" , productPrice : 25000},
    {productId : 5,productName : "Redmi11pro" , productPrice : 30000},
]

// products.sort((a,b)=>{                         // It is changing the original
//     return a.productPrice-b.productPrice;      //array so we need to clone it and
// });                                            //then sort it 
// console.log(products);    


//So need to clone it and sort it 
const hightolow = products.slice(0).sort((a,b)=>{
    return b.productPrice-a.productPrice;
});

console.log(hightolow);
console.log(products);
