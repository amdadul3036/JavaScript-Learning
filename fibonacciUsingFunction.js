function fibo(n){
    var fibo=[0,1];
    for(i=2;i<10;i++)
    {
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
var result=fibo(10);
console.log(result);
