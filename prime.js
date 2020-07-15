var n=19;
for(var i=2;i<n;i++){
    if(n%i==0){
        console.log(n,i,n%i,"It's not a prime number");
        break;
    }
    else{
        console.log(n,i,n%i,"It's prime number");
        break;
    }
}