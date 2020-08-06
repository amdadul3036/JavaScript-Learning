
function addArg(a,b){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        var num = arguments[i];
       sum = sum + num;
       
    }
     return sum;
}

var result = addArg(4,5,10);
console.log(result);
