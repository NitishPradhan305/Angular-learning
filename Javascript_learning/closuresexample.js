function hello(x){
    const a = "Nitish";
    const b = "Pradhan";
    return function closureEx(){
      console.log(a,b,x)
    };
}

const ans = hello("Mike");
ans();
