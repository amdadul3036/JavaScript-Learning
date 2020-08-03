//Practicing Arguments

function practicingArgument(num1,num2){ //num1,num2 na dileo kaj korbe because of argument
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum= num+sum;
    }
    return sum;
}
console.log(practicingArgument(10,20,1,2,3,5,6));


