function myNumbers(num1,num2){
    
   var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num ;
    }
    return sum;
}

var result=myNumbers(5,7,0,4,2,6);
console.log(result);
