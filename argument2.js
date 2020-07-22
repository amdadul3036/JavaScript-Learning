function myNumbers(num1,num2){
    
    console.log(arguments[4], "-- Argument[4]");
   var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num);
    }
    return num1+num2;
}

var result=myNumbers(5,7,0,4,2,6);
console.log(result);
