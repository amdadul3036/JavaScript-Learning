function myNumbers(num1,num2){
    console.log(arguments);
    console.log(arguments[4]);
    return num1+num2;
    }
var result=myNumbers(5,7,0,4,2,6);
console.log(result);
