//factorialUsingFunction.js

function fact(n){
    factorial=1;
    for(i=1;i<=n;i++){
    factorial=factorial*i;
    }
    return factorial;
}

var result = fact(100);
console.log(result);