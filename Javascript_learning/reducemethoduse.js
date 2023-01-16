//Reduce method use in array

const products = [
    {productId:1,productName:"mobile",productPrice:23000},
    {productId:2,productName:"laptop",productPrice:33000},
    {productId:3,productName:"trimmer",productPrice:2000},
    {productId:4,productName:"earphone",productPrice:800},
]

const sumofprice=products.reduce((totalprice,product)=>{
    return totalprice+product.productPrice;
},0);

console.log(sumofprice);