function fact(n){
    if(n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

var result=fact(3);
    console.log(result);