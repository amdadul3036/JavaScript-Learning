function allNum(){
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(allNum(3,4,1,3.102));