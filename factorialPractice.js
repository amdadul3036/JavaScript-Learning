function fact(num){
    if(num == 0){
        return 1;
    }
    else{
        return num = num * (num - 1);
    }
}

console.log(fact(3));